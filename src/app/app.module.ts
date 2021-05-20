import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {UsersFlowerModule} from './components/user-page/users-flower.module';
import {OwnerFlowerModule} from './components/owner-page/owner-flower.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersFlowerModule,
    OwnerFlowerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
