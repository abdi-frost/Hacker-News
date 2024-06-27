import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store'
import { BestState, FetchBestItems } from '../../state/best.state';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.scss']
})
export class BestComponent {
  p: number = 1;

  @Select(BestState.items) items$!: Observable<any[]>;
  @Select(BestState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchBestItems());
  }

}
