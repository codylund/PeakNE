import { Injectable } from '@angular/core';
import { Mountain } from './mountain';
import { HttpClient } from '@angular/common/http';

const MOUNTAINS: Mountain[] = [
  { id: 1,  name: 'Sunday River',   lat: 44.471433, lng: -70.858462, city: 'Newry',               state: 'ME', totalRuns: 135, totalLifts: 15 },
  { id: 2,  name: 'Killington',     lat: 43.604634, lng: -72.820102, city: 'Killington',          state: 'VT', totalRuns: 155, totalLifts: 21 },
  { id: 3,  name: 'Loon',           lat: 44.035811, lng: -71.623060, city: 'Livermore',           state: 'NH', totalRuns: 61,  totalLifts: 11 },
  { id: 4,  name: 'Sugarbush',      lat: 44.135656, lng: -72.894242, city: 'Warren',              state: 'VT', totalRuns: 111, totalLifts: 16 },
  { id: 5,  name: 'Sugarloaf',      lat: 45.031138, lng: -70.313467, city: 'Carrabassett Valley', state: 'ME', totalRuns: 154, totalLifts: 13 },
  { id: 6,  name: 'Jay Peak',       lat: 44.924079, lng: -72.524342, city: 'Potton',              state: 'VT', totalRuns: 78,  totalLifts: 9  },
  { id: 7,  name: 'Stowe',          lat: 44.527902, lng: -72.784283, city: 'Stowe',               state: 'VT', totalRuns: 116, totalLifts: 12 },
  { id: 8,  name: 'Okemo',          lat: 43.401602, lng: -72.718958, city: 'Ludlow',              state: 'VT', totalRuns: 120, totalLifts: 20 },
  { id: 9,  name: 'Bretton Woods',  lat: 44.258409, lng: -71.461207, city: 'Carroll',             state: 'NH', totalRuns: 97,  totalLifts: 10 },
  { id: 10, name: 'Mount Snow',     lat: 42.958444, lng: -72.919830, city: 'Somerset',            state: 'VT', totalRuns: 80,  totalLifts: 20 },
];

@Injectable({
  providedIn: 'root'
})
export class MountainsService {

  constructor(
    private http: HttpClient
  ) { }

  mountains: Mountain[] = null;

  getMountains(): Mountain[] {
    // TODO maybe fetch this data from a database
    if (!this.mountains)
      this.mountains = MOUNTAINS;

    return this.mountains;
  }
}