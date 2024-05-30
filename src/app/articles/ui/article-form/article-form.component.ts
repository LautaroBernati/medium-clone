import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article, EditableArticle } from '../../data-access/services/articles.service';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';
import { BehaviorSubject, combineLatest, startWith } from 'rxjs';
import { LetDirective, PushPipe } from '@ngrx/component';
import { TranslateModule } from '@ngx-translate/core';
import { AppTheme } from '../../../shared/types/themes.interface';

@Component({
  selector: 'art-form-ui',
  templateUrl: 'article-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
    LetDirective,
    PushPipe,
    TranslateModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleFormComponent implements OnInit, OnChanges, OnDestroy {
  private readonly _isLoadingEmitter$ = new BehaviorSubject(false);
  private readonly _isSubmittingEmitter$ = new BehaviorSubject(false);
  private readonly _themeEmitter$ = new BehaviorSubject<AppTheme | null>(null);

  public isLoading$ = this._isLoadingEmitter$.asObservable();
  public isSubmitting$ = this._isSubmittingEmitter$.asObservable();
  public readonly theme$ = this._themeEmitter$.asObservable();

  @Input() public action: 'create' | 'edit' | null = null;
  @Input('articleToEdit') public item: Article | null = null;
  @Input('isLoading') public isLoading = false;
  @Input('isSubmitting') public isSubmitting = false;
  @Input('errors') public errors: IBackendErrors | null = null;
  @Input() public theme: AppTheme | null = null;

  @Output('save') public saveEmitter$ = new EventEmitter<EditableArticle>();

  public readonly form = new FormGroup({
    body: new FormControl('', { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(800)], nonNullable: true }),
    description: new FormControl('', { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(40)], nonNullable: true }),
    title: new FormControl('', { validators: [Validators.required, Validators.minLength(1), Validators.maxLength(30)], nonNullable: true }),
    tagList: new FormControl<string[] | null>(null, { validators: [Validators.required] }),
  });

  public readonly addTagControl = new FormControl('', { validators: [Validators.maxLength(50), Validators.minLength(1), Validators.required], nonNullable: true });

  public readonly formData$ = combineLatest({
    formValues: this.form.valueChanges.pipe(startWith(this.form.getRawValue())),
    formStatus: this.form.statusChanges.pipe(startWith('INVALID')),
    addTagValue: this.addTagControl.valueChanges.pipe(startWith('')),
    addTagStatus: this.addTagControl.statusChanges.pipe(startWith('INVALID')),
  });

  public ngOnInit(): void {
    if (!this.action) {
      throw new TypeError('Property action is required for this component.');
    }

    if (this.action === 'create') {
      this.form.controls.tagList.addValidators(Validators.required);
      this.form.controls.tagList.updateValueAndValidity();
    } else if (this.action === 'edit' && this.item) {
      this.form.patchValue(this.item, { emitEvent: false });
      this.form.controls.tagList.disable({ emitEvent: false });
      this.addTagControl.disable({ emitEvent: false });
    }

    if (this.theme) {
      this._themeEmitter$.next(this.theme);
    }
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isLoading']) {
      this._isLoadingEmitter$.next(changes['isLoading'].currentValue);
    }

    if (changes['isSubmitting']) {
      this._isSubmittingEmitter$.next(changes['isSubmitting'].currentValue);
    }

    if (changes['theme']) {
      this._themeEmitter$.next(changes['theme'].currentValue);
    }
  }

  public ngOnDestroy(): void {
    this._isLoadingEmitter$.complete();
    this._isSubmittingEmitter$.complete();
    this._themeEmitter$.complete();
  }

  public addTag(): void {
    if (this.form.controls.tagList.value) {
      const previousTags = this.form.controls.tagList.value;
      const tags = [...previousTags, this.addTagControl.value];

      this.form.controls.tagList.patchValue(tags);
    } else {
      this.form.controls.tagList.patchValue([this.addTagControl.value]);
    }

    this.addTagControl.reset();
  }

  public removeTag(indexToDelete: number): void {
    if (this.form.controls.tagList.value) {
      const tags = this.form.controls.tagList.value.filter((_, index) => index !== indexToDelete);

      this.form.controls.tagList.patchValue(tags);
    }
  }

  public onSubmit(): void {
    this.saveEmitter$.emit({
      ...this.form.getRawValue(),
      tagList: this.form.controls.tagList.getRawValue() ?? [],
    });
  }
}
