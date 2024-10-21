import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { GiphyService } from '../../services/giphy.service';

@Component({
  selector: 'app-gif-search',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './gif-search.component.html',
  styleUrls: ['./gif-search.component.css'],
  providers: [GiphyService] 
})
export class GifSearchComponent {
  query: string = '';
  gifs: any[] = [];
  searchHistory: string[] = ['hola', 'mundo'];

  constructor(private giphyService: GiphyService) {
    this.loadSearchHistory();
  }

  search(): void {
    if (this.query.trim() !== '') {
      this.giphyService.searchGifs(this.query).subscribe((response) => {
        this.gifs = response.data;
        this.addToHistory(this.query);
        this.query = '';
      });
    }
  }

  addToHistory(query: string): void {
    if (!this.searchHistory.includes(query)) {
      this.searchHistory.unshift(query);
      localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory));
    }
  }

  loadSearchHistory(): void {
    const history = localStorage.getItem('searchHistory');
    if (history) {
      this.searchHistory = JSON.parse(history);
    }
  }

  searchFromHistory(query: string): void {
    this.query = query;
    this.search();
  }
}
