import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Select, Store } from '@ngxs/store'
import { NewState, FetchNewItems } from '../../state/new.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit{

  @Select(NewState.items) items$!: Observable<any[]>;
  @Select(NewState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchNewItems());
  }
}
