import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { LocalStorageService } from './services/local-storage.service';



@NgModule({
  declarations: [ 
    HeaderComponent, 
    SideNavComponent, 
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    SideNavComponent,
    TableComponent
  ],
  providers: [
    LocalStorageService
  ]
})
export class SharedModule { }
