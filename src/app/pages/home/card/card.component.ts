import { Component, Input } from '@angular/core';
import { Item } from 'src/app/shared/models/item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() Item!: Item
}
