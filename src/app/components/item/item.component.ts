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

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    if (this.itemId)
      this.item$ = this.newsService.getStoryDetails(this.itemId);  
  }
}
