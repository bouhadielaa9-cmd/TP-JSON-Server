import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ParkService } from '../../services/parkservice';
import { ErrorComponent } from '../error/error';
import { Park } from '../../models/park';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-park-selected',
  standalone: true,
  imports: [ErrorComponent, RouterLink, DatePipe],
  templateUrl: './park-selected.html',
  styleUrl: './park-selected.css'
})
export class ParkSelected implements OnInit {

  private readonly route = inject(ActivatedRoute);
  private readonly parkService = inject(ParkService);

  park?: Park;
  errorMessage = '';

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.parkService.getParkById(id).subscribe({
        next: data => {
          console.log(data);
          this.park = data;
        },
        error: () => {
          this.errorMessage = 'Parc introuvable.';
        }
      });
    } else {
      this.errorMessage = 'Identifiant du parc introuvable.';
    }
  }
}