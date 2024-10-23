import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticketstatus',
  templateUrl: './ticketstatus.component.html',
  styleUrl: './ticketstatus.component.scss'
})
export class TicketstatusComponent {
  currentStatus: number = 1; 

  nextStep() {
    if (this.currentStatus < 3) {
      this.currentStatus++;
    }
  }

  // Method to move to the previous step
  previousStep() {
    if (this.currentStatus > 1) {
      this.currentStatus--;
    }
  }
}
