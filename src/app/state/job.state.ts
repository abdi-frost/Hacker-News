import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NewsService } from '../services/news.service';
import { tap } from 'rxjs/operators';

export class FetchJobItems {
    static readonly type = '[Job] Fetch Job Items';
}

export interface JobStateModel {
    items: any[];
    loading: boolean;
}

@State<JobStateModel>({
    name: 'job',
    defaults: {
        items: [],
        loading: false
    }
})

@Injectable()
export class JobState{
    constructor(private newsService: NewsService) {}

    @Selector()
    static items(state: JobStateModel){
        return state.items
    }

    @Selector()
    static loading(state: JobStateModel){
        return state.loading
    }

    @Action(FetchJobItems)
    fetchJobItems(ctx: StateContext<JobStateModel>) {
        ctx.patchState({ loading: true});
        return this.newsService.getJobStories().pipe(
            tap((items) => {
                ctx.patchState({ items, loading: false})
            })
        );
    }
}