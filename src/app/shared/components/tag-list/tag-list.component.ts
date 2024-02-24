import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'mc-tag-list',
  templateUrl: 'tag-list.component.html',
  standalone: true,
  imports: [CommonModule]
})
export class TagListComponent {
  @Input() public tags: string[] = [];
}
