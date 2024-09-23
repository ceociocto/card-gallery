import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Card Gallery';
  cards = [
    {
      title: 'Card 1',
      subtitle: 'Subtitle 1',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 1.'
    },
    {
      title: 'Card 2',
      subtitle: 'Subtitle 2',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 2.'
    }, 
    {
      title: 'Card 3',
      subtitle: 'Subtitle 3',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 3.'
    },
    {
      title: 'Card 4',
      subtitle: 'Subtitle 4',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 4.'
    },
    {
      title: 'Card 5',
      subtitle: 'Subtitle 5',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 5.' 
    },
    {
      title: 'Card 6',
      subtitle: 'Subtitle 6',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 6.'
    },  
    {
      title: 'Card 7',
      subtitle: 'Subtitle 7',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 7.'
    },
    {
      title: 'Card 8',    
      subtitle: 'Subtitle 8',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 8.'
    },
    {
      title: 'Card 9',    
      subtitle: 'Subtitle 9',
      image: 'https://via.placeholder.com/150',
      content: 'This is the content of card 9.'
    },
  ];
}
