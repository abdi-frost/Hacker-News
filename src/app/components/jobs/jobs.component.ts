import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store'
import { Observable } from 'rxjs';
import { JobState, FetchJobItems } from 'src/app/state/job.state';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
  p: number = 1;

  @Select(JobState.items) items$!: Observable<any[]>;
  @Select(JobState.loading) loading$!: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(new FetchJobItems());
  }

}
