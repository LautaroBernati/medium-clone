import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

type CustomError = {
  code: number;
  description: string;
}

@Component({
  selector: 'app-error-page',
  templateUrl: 'error-pages.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorPagesPage {
  private readonly _route = inject(ActivatedRoute);

  public readonly data$ = this._route.paramMap.pipe(
    map((params) => {
      const errorCode = Number(params.get('errorNumber'));

      return isNaN(errorCode) ? 500 : errorCode;
    }),
    map(data => this._buildErrorObj(data)),
  );

  private _buildErrorObj(errorCode: number): CustomError {
    let description = '';

    switch (errorCode) {
      case 403:
        description = 'Forbidden';
        break;
      case 401:
        description = 'Unauthorized';
        break;
      case 404:
        description = 'Not Found';
        break;
      default:
        description = 'Unknown error';
        break;
    }

    return {
      code: errorCode,
      description,
    };
  }
}
