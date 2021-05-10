import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {OwnerFlowerModule} from './owner-flower/owner-flower.module';
import { AppComponent } from './app.component';
import {UsersFlowerModule} from './users-flower/users-flower.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OwnerFlowerModule,
    UsersFlowerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
