import { Injectable, NgModule } from '@angular/core';

import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class AppRoutingService {
  private url = 'assets/data.json';

  constructor(
    private http: Http,
    private router: Router
  ) { }

  getRoutes() {
    const routerConfig = this.router.config;
    this.http.get(this.url).subscribe((items) => {
      const routes = items.json();
      routes.forEach(route => {
        routerConfig.push(route);
      });
      console.log('getRoutes', routerConfig);
      this.router.resetConfig(routerConfig);
    });
  }
}