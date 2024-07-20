import { Component, inject } from '@angular/core';
import { NgFor, NgClass, NgIf, AsyncPipe } from '@angular/common';
import { EMPTY, catchError } from 'rxjs';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'sw-vehicle-list',
  standalone: true,
  imports: [AsyncPipe, NgClass, NgFor, NgIf],
  templateUrl: './vehicle-list.component.html'
})
export class VehicleListComponent {
  pageTitle = 'Vehicles';
  errorMessage = '';
  vehicleService = inject(VehicleService);

  // Vehicles
  vehicles = this.vehicleService.vehicles;

  selectedVehicle = this.vehicleService.selectedVehicle

  // When a vehicle is selected, emit the selected vehicle name
  onSelected(vehicleName: string): void {
    this.vehicleService.vehicleSelected(vehicleName);
  }

}
