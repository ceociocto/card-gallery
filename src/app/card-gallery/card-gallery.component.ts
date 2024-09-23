import { Component } from '@angular/core';

@Component({
  selector: 'app-card-gallery',
  standalone: true,
  imports: [],
  templateUrl: './card-gallery.component.html',
  styleUrl: './card-gallery.component.scss'
})
export class CardGalleryComponent {
  cards = [
    { title: 'Card 1', content: 'This is the content of card 1' },
    { title: 'Card 2', content: 'This is the content of card 2' },
    { title: 'Card 3', content: 'This is the content of card 3' },
    { title: 'Card 4', content: 'This is the content of card 4' },
    { title: 'Card 5', content: 'This is the content of card 5' },
    { title: 'Card 6', content: 'This is the content of card 6' },
    { title: 'Card 7', content: 'This is the content of card 7' },
    { title: 'Card 8', content: 'This is the content of card 8' },
    { title: 'Card 9', content: 'This is the content of card 9' },
    { title: 'Card 10', content: 'This is the content of card 10' },
    { title: 'Card 11', content: 'This is the content of card 11' },
    { title: 'Card 12', content: 'This is the content of card 12' },
  ];  
}
