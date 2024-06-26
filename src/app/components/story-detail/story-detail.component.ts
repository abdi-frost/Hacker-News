import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../../services/news.service';



@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.scss']
})
export class StoryDetailComponent implements OnInit{
  
  story!: any;

  constructor(private route: ActivatedRoute, private newsService: NewsService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    // TODO: find better way to handle this
    id && this.newsService.getStoryDetails(+id).subscribe(
      data => this.story = data
    )
  }
}
