import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppRoutingService } from './app-routing.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AppRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (private routeService: AppRoutingService) {
    routeService.getRoutes();
  }
}
