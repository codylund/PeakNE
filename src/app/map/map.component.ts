import { Component, ElementRef, OnInit, ViewChild, AfterContentInit } from '@angular/core';
import { Mountain } from '../mountain';
import { MountainsService } from '../mountains.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterContentInit {

  // Mountains to display.
  mountains: Mountain[];
  centerLat: number;
  centerLng: number;

  // Height of map; set this to match the component element's
  // height once content/view is initialized so that the entire 
  // screen is filled.
  height = 0;

  constructor(
    private mountainsService: MountainsService,
    private el:ElementRef
  ) { 
  }

  ngOnInit() {
    this.mountains = this.mountainsService.getMountains();

    // Find coords to center map on by finding midpoints between min/max lats and lngs.
    var mid = (vals: number[]) => (Math.min(...vals) + Math.max(...vals))/2;
    this.centerLat = mid(this.mountains.map((mountain) => mountain.lat));
    this.centerLng = mid(this.mountains.map((mountain) => mountain.lng));
  }

  ngAfterContentInit() {
    // Set the height of the map element. Typically, we could use relative heights, but
    // Google Maps only behaves properly if an absolute height is set.
    this.height = this.el.nativeElement.offsetHeight;
  }

}
