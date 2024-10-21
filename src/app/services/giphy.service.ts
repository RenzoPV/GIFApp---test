import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {
  private apiKey: string = environment.apiKey; 
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  searchGifs(query: string): Observable<any> {
    const params = {
      api_key: this.apiKey,
      q: query,
      limit: '25'
    };
    return this.http.get(this.apiUrl, { params });
  }
}
