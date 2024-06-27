import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators';

export class FetchBestItems {
    static readonly type = '[Best] Fetch Best Items';
}

export interface BestStateModel {
    items: any[];
    loading: boolean;
}

@State<BestStateModel>({
    name: 'best',
    defaults: {
        items: [],
        loading: false
    }
})

@Injectable()
export class BestState{
    constructor(private newsService: NewsService) {}

    @Selector()
    static items(state: BestStateModel){
        return state.items
    }

    @Selector()
    static loading(state: BestStateModel){
        return state.loading
    }

    @Action(FetchBestItems)
    fetchBestItems(ctx: StateContext<BestStateModel>) {
        ctx.patchState({ loading: true});
        return this.newsService.getBestStories().pipe(
            tap((items) => {
                ctx.patchState({ items, loading: false})
            })
        );
    }
}