import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { NewsComponent } from './news/news.component';
import { MainRoutingModule } from './main-routing.module';
import { AuthGuard } from '../shared/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main.component';


@NgModule({
  declarations: [
    ClientsComponent,
    NewsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    AuthGuard
  ],
})
export class MainModule { }
