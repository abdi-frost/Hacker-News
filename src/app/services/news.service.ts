import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class NewsService {
  private baseUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) {}

  getTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/topstories.json`);
  }
  
  getNewStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/newstories.json`);
  }

  getAskStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/askstories.json`);
  }

  getJobStories(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/jobstories.json`);
  }

  getStoryDetails(storyId: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/item/${storyId}.json`);
  }

  getBestStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/beststories.json`);
  }

  getShowStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/showstories.json`);
  }

  // Implement other API methods as needed (e.g., getNewStories, getAskStories, etc.)
}
