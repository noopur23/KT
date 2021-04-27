import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CommentComponent } from './comment/comment.component';

import { StoreModule } from '@ngrx/store';
import { commentReducer } from './store/comment.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './store/comment.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      comment : commentReducer
    }),
    EffectsModule.forRoot([RootEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 // Retains last 25 states
    })
  ],
  //exports: [StoreModule, EffectsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
