import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators'


export class FetchAskItems {
    static readonly type = '[Ask] Fetch Items';
}

export interface AskStateModel {
    items: any[];
    loading: boolean;
}

@State<AskStateModel>({
    name: 'ask',
    defaults: {
        items: [],
        loading: false
    }
})

@Injectable()
export class AskState {
    constructor(private newsService: NewsService) { }

    @Selector()
    static items(state: AskStateModel) {
        return state.items;
    }

    @Selector()
    static loading(state: AskStateModel) {
        return state.loading;
    }

    @Action(FetchAskItems)
    fetchNewItems(ctx: StateContext<AskStateModel>) {
        ctx.patchState({ loading: true });
        return this.newsService.getAskStories().pipe(
            tap((items) => {
                ctx.patchState({ items, loading: false });
            })
        );
    }
}