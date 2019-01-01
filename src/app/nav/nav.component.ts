import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(
    private el:ElementRef
  ) { }

  ngOnInit() {
  }

  getHeight(): number {
    return this.el.nativeElement.offsetHeight;
  }
}
