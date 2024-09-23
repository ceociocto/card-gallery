import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class AppComponent implements OnInit {
  title = 'Card Gallery';

  originalCards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      image: 'https://via.placeholder.com/300x250'
    },
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      image: 'https://via.placeholder.com/300x300',
      type: 'summary'
    },
    {
      title: 'Card 4',
      subtitle: 'Subtitle 4',
      image: 'https://via.placeholder.com/300x220'
    },
    {
      title: 'Card 5',
      subtitle: 'Subtitle 5',
      image: 'https://via.placeholder.com/300x270',
      type: 'summary'
    },
    {
      title: 'Card 6',
      subtitle: 'Subtitle 6',
      image: 'https://via.placeholder.com/300x240'
    },
    {
      title: 'Card 7',
      subtitle: 'Subtitle 7',
      image: 'https://via.placeholder.com/300x260'
    },
    {
      title: 'Card 8',
      subtitle: 'Subtitle 8',
      image: 'https://via.placeholder.com/300x280'
    },
    {
      title: 'Card 9',
      subtitle: 'Subtitle 9',
      image: 'https://via.placeholder.com/300x230'
    },
    {
      title: 'Card 10',
      subtitle: 'Subtitle 10',
      image: 'https://via.placeholder.com/300x250'
    }
  ];

  summaryCards: any[] = [];
  otherCardsLeft: any[] = [];
  otherCardsMiddle: any[] = [];

  ngOnInit() {
    this.summaryCards = this.originalCards.filter(card => card.type === 'summary');
    const otherCards = this.originalCards.filter(card => card.type !== 'summary');
    
    otherCards.forEach((card, index) => {
      if (index % 2 === 0) {
        this.otherCardsLeft.push(card);
      } else {
        this.otherCardsMiddle.push(card);
      }
    });
  }
}
