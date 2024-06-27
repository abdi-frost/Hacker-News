import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store'
import { TopState, FetchTopItems } from '../../state/top.state';


@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent {
  p: number = 1;

  @Select(TopState.items) items$!: Observable<any[]>;
  @Select(TopState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchTopItems());
  }
}
