import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators';

export class FetchTopItems {
    static readonly type = '[Tob] Fetch Top Items';
}

export interface TopStateModel {
    items: any[];
    loading: boolean;
}

@State<TopStateModel>({
    name: 'top',
    defaults: {
        items: [],
        loading: false
    }
})

@Injectable()
export class TopState{
    constructor(private newsService: NewsService) {}

    @Selector()
    static items(state: TopStateModel){
        return state.items
    }

    @Selector()
    static loading(state: TopStateModel){
        return state.loading
    }

    @Action(FetchTopItems)
    fetchTopItems(ctx: StateContext<TopStateModel>) {
        ctx.patchState({ loading: true});
        return this.newsService.getTopStories().pipe(
            tap((items) => {
                ctx.patchState({ items, loading: false})
            })
        );
    }
}