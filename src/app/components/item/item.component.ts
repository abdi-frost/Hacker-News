import { Component, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit {
  
  @Input() itemId!: number;
  item$!: Observable<any>;
  isLoading: boolean = true;
  viewComments: boolean = false;
  viewReplies: boolean = false;
  showFullText: boolean = false;
  maxTextLength: number = 300; // maximum number of characters to display before truncating

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.itemId) {
      this.item$ = this.newsService.getStoryDetails(this.itemId);
      this.item$.subscribe(() => this.isLoading = false);
    }
  }

  toggleComment(): void {
    this.viewComments = !this.viewComments;
  }

  toggleReplies(): void {
    this.viewReplies = !this.viewReplies;
  }

  toggleText(): void {
    this.showFullText = !this.showFullText;
  }

  truncateText(text: string, showFullText: boolean): string {
    if (showFullText) {
      return text;
    }
    return text.length > this.maxTextLength ? text.substring(0, this.maxTextLength) + '...' : text;
  }
}
