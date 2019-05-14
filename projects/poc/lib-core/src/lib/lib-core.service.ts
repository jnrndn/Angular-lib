import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibCoreService {

  constructor() { }

  showConsoleOutput() {
    console.log('this message comes from the lib');
  }
}
