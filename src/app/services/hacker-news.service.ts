import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsService {
  private apiUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.apiUrl}/topstories.json`).pipe(
      catchError(error => {
        console.error('Error fetching top stories:', error);
        return throwError(error);
      })
    );
  }

  

}
