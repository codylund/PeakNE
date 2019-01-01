import { Component, OnInit } from '@angular/core';
import { MountainsService } from '../mountains.service';
import { Mountain, MountainUtils, MountainProperty } from '../mountain';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  // Mountains to display.
  mountains: Mountain[];

  // Set default sort options.
  selectedProperty = MountainProperty.Name;
  sortAscending = true;

  // Expose the enum to the template so they can be set
  // using a select HTML element.
  mountainPropertyEnum = MountainProperty;

  // Mountain properties to display in the table
  mountainProperties = [
    MountainProperty.Name,
    MountainProperty.State,
    MountainProperty.City,
    MountainProperty.TotalLifts,
    MountainProperty.TotalRuns
  ];

  /**
   * Map of MountainProperty to labels.
   */
  propertyToLabel = new Map<MountainProperty, string>([
    [MountainProperty.Name, "Mountain"],
    [MountainProperty.TotalRuns, "Runs"],
    [MountainProperty.TotalLifts, "Lifts"],
    [MountainProperty.City, "City"],
    [MountainProperty.State, "State"],
  ]);

  mountainValues = new Map<MountainProperty, (mountain: Mountain) => any>([
    [ MountainProperty.Name, (mountain) => mountain.name ],
    [ MountainProperty.TotalLifts, (mountain) => mountain.totalLifts ],
    [ MountainProperty.TotalRuns, (mountain) => mountain.totalRuns ],
    [ MountainProperty.City, (mountain) => mountain.city ],
    [ MountainProperty.State, (mountain) => mountain.state ] 
  ]);

  constructor(
    private mountainsService: MountainsService
  ) { }

  ngOnInit() {
    this.getMountains();
    this.sortMountains(MountainProperty.Name);
  }

  /**
   * Get the mountains.
   */
  getMountains(): void {
    this.mountains = this.mountainsService.getMountains();
  }

  /**
   * Sort the mountains using the selected sort properties.
   */
  sortMountains(mountainProperty: MountainProperty): void {
    // Toggle the sorting direction if the property is already selected.
    if (mountainProperty === this.selectedProperty)
      this.sortAscending = !this.sortAscending;

    this.setSelectedProperty(mountainProperty);

    this.mountains.sort(MountainUtils.getComparer(this.selectedProperty, this.sortAscending));
  }

  setSelectedProperty(mountainProperty: MountainProperty) {
    if (mountainProperty !== undefined)
      this.selectedProperty = mountainProperty;
  }

  /**
   * Get a label describing a MountainProperty.
   * 
   * @param mountainProperty the mountain property.
   * 
   * @return the MountainProperty's label.
   */
  getMountainPropertyLabel(mountainProperty: MountainProperty): string {
    return this.propertyToLabel.get(mountainProperty);
  }

  getMountainPropertyValue(mountain: Mountain, mountainProperty: MountainProperty): any {
    return this.mountainValues.get(mountainProperty)(mountain);
  }

  isSelected(mountainProperty: MountainProperty): boolean {
    return this.selectedProperty === mountainProperty;
  }
}

