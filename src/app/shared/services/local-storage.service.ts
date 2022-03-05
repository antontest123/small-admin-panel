import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  getItem(key: string): any {
    return JSON.parse(localStorage.getItem(key)!);
  }
}
