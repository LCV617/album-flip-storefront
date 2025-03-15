
export interface Album {
  id: string;
  title: string;
  artist: string;
  year: number;
  genre: string;
  imageUrl: string;
  tracks: Track[];
  price: number;
  description?: string;
}

export interface Track {
  number: number;
  title: string;
  duration: string;
}

// Sample data - replace with your actual album data from Google Sheets
export const albums: Album[] = [
  {
    id: '1',
    title: 'The Dark Side of the Moon',
    artist: 'Pink Floyd',
    year: 1973,
    genre: 'Progressive Rock',
    imageUrl: 'https://m.media-amazon.com/images/I/61R7gJadP7L._UF1000,1000_QL80_.jpg',
    price: 29.99,
    description: 'The Dark Side of the Moon is the eighth studio album by the English rock band Pink Floyd, released in March 1973.',
    tracks: [
      { number: 1, title: 'Speak to Me', duration: '1:30' },
      { number: 2, title: 'Breathe', duration: '2:43' },
      { number: 3, title: 'On the Run', duration: '3:30' },
      { number: 4, title: 'Time', duration: '7:06' },
      { number: 5, title: 'The Great Gig in the Sky', duration: '4:43' }
    ]
  },
  {
    id: '2',
    title: 'Thriller',
    artist: 'Michael Jackson',
    year: 1982,
    genre: 'Pop',
    imageUrl: 'https://m.media-amazon.com/images/I/71iQcMbTpZL._UF1000,1000_QL80_.jpg',
    price: 24.99,
    description: 'Thriller is the sixth studio album by American singer Michael Jackson, released on November 30, 1982.',
    tracks: [
      { number: 1, title: 'Wanna Be Startin\' Somethin\'', duration: '6:03' },
      { number: 2, title: 'Baby Be Mine', duration: '4:20' },
      { number: 3, title: 'The Girl Is Mine', duration: '3:42' },
      { number: 4, title: 'Thriller', duration: '5:57' },
      { number: 5, title: 'Beat It', duration: '4:18' }
    ]
  },
  {
    id: '3',
    title: 'Abbey Road',
    artist: 'The Beatles',
    year: 1969,
    genre: 'Rock',
    imageUrl: 'https://m.media-amazon.com/images/I/91YlTtiGi4L._UF1000,1000_QL80_.jpg',
    price: 27.99,
    description: 'Abbey Road is the eleventh studio album by the English rock band the Beatles, released on 26 September 1969.',
    tracks: [
      { number: 1, title: 'Come Together', duration: '4:19' },
      { number: 2, title: 'Something', duration: '3:03' },
      { number: 3, title: 'Maxwell\'s Silver Hammer', duration: '3:27' },
      { number: 4, title: 'Oh! Darling', duration: '3:27' },
      { number: 5, title: 'Octopus\'s Garden', duration: '2:51' }
    ]
  },
  {
    id: '4',
    title: 'Rumours',
    artist: 'Fleetwood Mac',
    year: 1977,
    genre: 'Rock',
    imageUrl: 'https://m.media-amazon.com/images/I/71BekDJBb3L._UF1000,1000_QL80_.jpg',
    price: 26.99,
    description: 'Rumours is the eleventh studio album by British-American rock band Fleetwood Mac, released on 4 February 1977.',
    tracks: [
      { number: 1, title: 'Second Hand News', duration: '2:56' },
      { number: 2, title: 'Dreams', duration: '4:17' },
      { number: 3, title: 'Never Going Back Again', duration: '2:14' },
      { number: 4, title: 'Don\'t Stop', duration: '3:13' },
      { number: 5, title: 'Go Your Own Way', duration: '3:38' }
    ]
  },
  {
    id: '5',
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    year: 1959,
    genre: 'Jazz',
    imageUrl: 'https://m.media-amazon.com/images/I/71dqiiu9rIL._UF1000,1000_QL80_.jpg',
    price: 22.99,
    description: 'Kind of Blue is a studio album by American jazz trumpeter-composer Miles Davis, released on August 17, 1959.',
    tracks: [
      { number: 1, title: 'So What', duration: '9:22' },
      { number: 2, title: 'Freddie Freeloader', duration: '9:46' },
      { number: 3, title: 'Blue in Green', duration: '5:37' },
      { number: 4, title: 'All Blues', duration: '11:33' },
      { number: 5, title: 'Flamenco Sketches', duration: '9:26' }
    ]
  },
  {
    id: '6',
    title: 'Back in Black',
    artist: 'AC/DC',
    year: 1980,
    genre: 'Hard Rock',
    imageUrl: 'https://m.media-amazon.com/images/I/61Di3q6JxuL._UF1000,1000_QL80_.jpg',
    price: 25.99,
    description: 'Back in Black is the seventh studio album by Australian rock band AC/DC, released on 25 July 1980.',
    tracks: [
      { number: 1, title: 'Hells Bells', duration: '5:12' },
      { number: 2, title: 'Shoot to Thrill', duration: '5:17' },
      { number: 3, title: 'What Do You Do for Money Honey', duration: '3:33' },
      { number: 4, title: 'Given the Dog a Bone', duration: '3:30' },
      { number: 5, title: 'Let Me Put My Love into You', duration: '4:16' }
    ]
  },
  {
    id: '7',
    title: 'Blue',
    artist: 'Joni Mitchell',
    year: 1971,
    genre: 'Folk',
    imageUrl: 'https://m.media-amazon.com/images/I/71xHx-2T9wL._UF1000,1000_QL80_.jpg',
    price: 23.99,
    description: 'Blue is the fourth studio album by Canadian singer-songwriter Joni Mitchell, released on June 22, 1971.',
    tracks: [
      { number: 1, title: 'All I Want', duration: '3:34' },
      { number: 2, title: 'My Old Man', duration: '3:33' },
      { number: 3, title: 'Little Green', duration: '3:27' },
      { number: 4, title: 'Carey', duration: '3:02' },
      { number: 5, title: 'Blue', duration: '3:05' }
    ]
  },
  {
    id: '8',
    title: 'Purple Rain',
    artist: 'Prince',
    year: 1984,
    genre: 'Pop/Rock',
    imageUrl: 'https://m.media-amazon.com/images/I/71B3sJXUJ6L._UF1000,1000_QL80_.jpg',
    price: 28.99,
    description: 'Purple Rain is the sixth studio album by American recording artist Prince, released on June 25, 1984.',
    tracks: [
      { number: 1, title: 'Let\'s Go Crazy', duration: '4:39' },
      { number: 2, title: 'Take Me with U', duration: '3:54' },
      { number: 3, title: 'The Beautiful Ones', duration: '5:13' },
      { number: 4, title: 'Computer Blue', duration: '3:59' },
      { number: 5, title: 'Darling Nikki', duration: '4:14' }
    ]
  }
];
