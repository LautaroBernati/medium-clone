import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Article, EditableArticle } from '../../data-access/services/articles.service';
import { BackendErrorMessagesComponent } from '../../../shared/components/backend-error-messages/backend-error-messages.component';
import { IBackendErrors } from '../../../shared/types/backend-errors.interface';

@Component({
  selector: 'art-form-ui',
  templateUrl: 'article-form.component.html',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BackendErrorMessagesComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ArticleFormComponent implements OnInit {
  @Input() public action: 'create' | 'edit' | null = null;
  @Input('articleToEdit') public item: Article | null = null;
  @Input('isLoading') public isLoading = false;
  @Input('isSubmitting') public isSubmitting = false;
  @Input('errors') public errors: IBackendErrors | null = null;
  @Output('save') public saveEmitter$ = new EventEmitter<EditableArticle>();

  public readonly form = new FormGroup({
    body: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    description: new FormControl('', { validators: [Validators.required], nonNullable: true }),
    title: new FormControl('', { validators: [], nonNullable: true }),
    tagList: new FormControl<string[] | null>(null, { validators: [Validators.required] }),
  });

  public readonly addTagControl = new FormControl('', { validators: [Validators.maxLength(50), Validators.minLength(1)], nonNullable: true });

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
