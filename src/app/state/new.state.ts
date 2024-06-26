import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators'

export class FetchNewItems {
  static readonly type = '[New] Fetch Items';
}

export interface NewStateModel {
  items: any[];
  loading: boolean;
}

@State<NewStateModel>({
  name: 'new',
  defaults: {
    items: [],
    loading: false
  }
})

@Injectable()
export class NewState {
  constructor(private newsService: NewsService) {}

  @Selector()
  static items(state: NewStateModel) {
    return state.items;
  }

  @Selector()
  static loading(state: NewStateModel) {
    return state.loading;
  }

  @Action(FetchNewItems)
  fetchNewItems(ctx: StateContext<NewStateModel>) {
    ctx.patchState({ loading: true });
    return this.newsService.getNewStories().pipe(
      tap((items) => {
        ctx.patchState({ items, loading: false });
      })
    );
  }
}
