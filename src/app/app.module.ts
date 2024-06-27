import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/layout/header/header.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { NgZorroAntdModule } from './modules/ng-zorro-antd/ng-zorro-antd.module';
import { JobsComponent } from './components/jobs/jobs.component';
import { ShowComponent } from './components/show/show.component';
import { NewComponent } from './components/new/new.component';
import { AskComponent } from './components/ask/ask.component';

import { AskState } from './state/ask.state';
import { NewState } from './state/new.state';
import { JobState } from './state/job.state';
import { BestState } from './state/best.state';
import { TopState } from './state/top.state';
import { StoryDetailComponent } from './components/story-detail/story-detail.component'

import { NgxPaginationModule } from 'ngx-pagination';
import { ItemComponent } from './components/item/item.component';
import { BestComponent } from './components/best/best.component';
import { TopComponent } from './components/top/top.component'
registerLocaleData(en);
// import { HackerNewsService } from './services/hacker-news.service';
// import { StoryState } from './state/story.state';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    JobsComponent,
    ShowComponent,
    NewComponent,
    AskComponent,
    StoryDetailComponent,
    ItemComponent,
    BestComponent,
    TopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([NewState, AskState, JobState, BestState, TopState],  { developmentMode: true }), // Register your state modules here
    NgxsReduxDevtoolsPluginModule.forRoot(), // Optional
    NgxsLoggerPluginModule.forRoot(),
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NgxPaginationModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
