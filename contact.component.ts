import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [FormsModule]  // Ensure FormsModule is imported
})
export class ContactComponent {
  name: string = '';
  email: string = '';

  // Define the onSubmit method
  onSubmit() {
    console.log('Form submitted:', this.name, this.email);
  }
}

