import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(
    private router: Router,
    private lsService: LocalStorageService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.lsService.getItem('token')){
      return true
    } else {
      return false
    }
  }
}

