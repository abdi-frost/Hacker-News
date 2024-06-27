import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit {
  story$!: Observable<any>;
  showFullText: boolean = false;
  maxTextLength: number = 300;
  viewComments: boolean = false;

  constructor(private route: ActivatedRoute, private newsService: NewsService) { }

  ngOnInit(): void {
    this.story$ = this.route.paramMap.pipe(
      switchMap(params => this.newsService.getStoryDetails(+params.get('id')!))
    );
  }

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }

  truncateText(text: string, showFull: boolean): string {
    if (showFull || text.length <= this.maxTextLength) {
      return text;
    }
    return text.slice(0, this.maxTextLength) + '...';
  }

  toggleComments(): void {
    this.viewComments = !this.viewComments;
  }
}
