import {Selector, Action, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators'

export class FetchShowItems {
    static readonly type = '[Show] Fetch Show Items'
}

export interface ShowStateModel {
    items: any[];
    loading: boolean;
}

@State<ShowStateModel>({
    name: 'show',
    defaults: {
        items: [],
        loading: false
    }
})

@Injectable()
export class JobState {
    constructor(private newsService: NewsService) { }

    @Selector()
    static items(state: ShowStateModel) {
        return state.items;
    }

    @Selector()
    static loading(state: ShowStateModel) {
        return state.loading;
    }

    @Action(FetchShowItems)
    fetchJobItems(ctx: StateContext<ShowStateModel>) {
        ctx.patchState({ loading: true });
        return this.newsService.getShowStories().pipe(
            tap((items) => {
                ctx.patchState({ items, loading: false });
            })
        )
    }
}