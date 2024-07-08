import { Component } from '@angular/core';

@Component({
  selector: 'app-data-input',
  templateUrl: './data-input.component.html',
  styleUrls: ['./data-input.component.css']
})
export class DataInputComponent {
  heartRate: number = 0;
  temperature: number = 0;

  onSubmit() {
    // Add data submission logic here
    console.log('Data submitted:', this.heartRate, this.temperature);
  }
}
