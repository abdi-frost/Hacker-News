import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store'
import { AskState, FetchAskItems } from 'src/app/state/ask.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.scss']
})
export class AskComponent implements OnInit {
  p: number = 1;

  @Select(AskState.items) items$!: Observable<any[]>;
  @Select(AskState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}
  
  ngOnInit(): void {
    this.store.dispatch(new FetchAskItems);
  }

}
