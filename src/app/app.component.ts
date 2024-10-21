import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifSearchComponent } from './components/gif-search/gif-search.component';
import { HttpClientModule } from '@angular/common/http'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GifSearchComponent, HttpClientModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyop';
}
