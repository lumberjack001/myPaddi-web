import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAsideComponent } from './components/user-aside/user-aside.component';
import { MainComponent } from './components/main/main.component';
import { GetAppComponent } from './components/get-app/get-app.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAsideComponent,
    MainComponent,
    GetAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
