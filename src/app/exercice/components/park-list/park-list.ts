import { Component, inject, OnInit } from '@angular/core';
import { ParkService } from '../../services/parkservice';
import { ErrorComponent } from '../error/error';
import { ParkItem } from '../park-item/park-item';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-park-list',
  standalone: true,
  imports: [ParkItem, ErrorComponent,DatePipe,RouterLink],
  templateUrl: './park-list.html',
  styleUrl: './park-list.css'
})
export class ParkList implements OnInit {

  private parkService = inject(ParkService);

  parks = this.parkService.parks;
  errorMessage = '';

  ngOnInit(): void {
    this.parkService.getParks().subscribe(
      data => {
        console.log(data);
      },
      error => {
        this.errorMessage = 'Impossible de charger les parcs.';
      }
    );
  }

  deletePark(id: string): void {
    this.parkService.deletePark(id).subscribe(
      () => {
        console.log('Parc supprimé');
      },
      error => {
        this.errorMessage = 'Erreur lors de la suppression.';
      }
    );
  }
}