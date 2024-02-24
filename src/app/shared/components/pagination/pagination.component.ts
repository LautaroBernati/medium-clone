import { Component, Input, OnInit, inject } from '@angular/core';
import { UtilityService } from '../../services/utils.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'mc-pagination',
  templateUrl: 'pagination.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PaginationComponent implements OnInit {
  /**
   * Total amount of entities.
   */
  @Input('total') public totalAmount: number = 0;
  @Input('limit') public limit: number = 20;
  @Input('currentPage') public currentPage: number = 1;
  @Input('url') public url = '';
  private _pagesCount = 1;
  private readonly _utilsService = inject(UtilityService);
  public pages: Array<number> = [];

  public ngOnInit(): void {
    this._pagesCount = Math.ceil(this.totalAmount / this.limit);
    this.pages = this._pagesCount > 0 ? this._utilsService.range(1, this._pagesCount) : [];
  }
}
