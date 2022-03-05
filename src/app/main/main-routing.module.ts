import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { ClientsComponent } from './clients/clients.component';
import { MainComponent } from './main.component';
import { NewsComponent } from './news/news.component';




const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'news',
        component: NewsComponent,
        canActivate: [AuthGuard],
      },
      { path: 'clients',
        component: ClientsComponent,
        canActivate: [AuthGuard],
      },
      { path: '**',
        redirectTo: 'main',
        pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
