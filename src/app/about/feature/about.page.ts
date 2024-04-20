import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { PreferencesService } from '../../shared/services/preferences.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('collapse', [
      state('false', style({ height: AUTO_STYLE, visibility: AUTO_STYLE })),
      state('true', style({ height: '0', visibility: 'hidden' })),
      transition('false => true', animate(150 + 'ms ease-in')),
      transition('true => false', animate(150 + 'ms ease-out')),
    ]),
    trigger('fadeIn', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate('200ms',
          style({ opacity: 1 })
        )
      ]),
      transition('* => void', [
        animate('500ms',
          style({ opacity: 0 })
        )
      ])
    ])
  ],
})
export class AboutPage implements OnDestroy {
  private readonly _collapseAboutAppEmitter$ = new BehaviorSubject(false);
  private readonly _collapseAboutMeEmitter$ = new BehaviorSubject(false);
  private readonly _prefsService = inject(PreferencesService);

  public readonly appTheme$ = this._prefsService.appThemes$;
  public readonly collapseAboutApp$ = this._collapseAboutAppEmitter$.asObservable();
  public readonly collapseAboutMe$ = this._collapseAboutMeEmitter$.asObservable();

  public yearsPassedSince2020(): number {
    const currentYear = new Date().getFullYear();
    const yearsPassed = currentYear - 2020;

    return yearsPassed;
  }

  public handleCollapseAboutApp(): void {
    this._collapseAboutAppEmitter$.pipe(
      take(1),
    ).subscribe((collapse) => this._collapseAboutAppEmitter$.next(!collapse));
  }

  public handleCollapseAboutMe(): void {
    this._collapseAboutMeEmitter$.pipe(
      take(1),
    ).subscribe((collapse) => this._collapseAboutMeEmitter$.next(!collapse));
  }

  public ngOnDestroy(): void {
    this._collapseAboutAppEmitter$.complete();
    this._collapseAboutMeEmitter$.complete();
  }
}
