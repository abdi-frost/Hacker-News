import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component'
import { AskComponent } from './components/ask/ask.component'
import { ShowComponent} from './components/show/show.component'
import { JobsComponent } from './components/jobs/jobs.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: NewComponent },
  { path: 'ask', component: AskComponent },
  { path: 'show', component: ShowComponent },
  { path: 'jobs', component: JobsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
