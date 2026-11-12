
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.html',
  styleUrl: './error.css'
})
export class ErrorComponent {
  message = input<string>('Une erreur est survenue.');
}
