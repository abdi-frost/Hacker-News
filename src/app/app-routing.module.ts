import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component'
import { AskComponent } from './components/ask/ask.component'
import { ShowComponent} from './components/show/show.component'
import { JobsComponent } from './components/jobs/jobs.component'
import { BestComponent } from './components/best/best.component'
import { TopComponent } from './components/top/top.component'
import { StoryDetailComponent } from './components/story-detail/story-detail.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'ask', component: AskComponent },
  { path: 'show', component: ShowComponent },
  { path: 'best', component: BestComponent },
  { path: 'top', component: TopComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'story/:id', component: StoryDetailComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
