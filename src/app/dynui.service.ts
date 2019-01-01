import { Injectable, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DynUiService {

  constructor() { }

  getComponentHeight(): number {
    return 0;
  }
}
