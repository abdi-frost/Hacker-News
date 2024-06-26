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

import { AskState } from './state/ask.state'
import { NewState } from './state/new.state'
import { JobState } from './state/job.state'

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule.forRoot([NewState, AskState, JobState],  { developmentMode: true }), // Register your state modules here
    NgxsReduxDevtoolsPluginModule.forRoot(), // Optional
    NgxsLoggerPluginModule.forRoot(),
    FormsModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    NgZorroAntdModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
