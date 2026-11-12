
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ParkService } from '../../services/parkservice';
import {  ErrorComponent } from '../error/error';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-park-list',
  standalone: true,
  imports: [RouterLink,DatePipe,ErrorComponent],
  templateUrl: './park-list.html',
  styleUrl: './park-list.css'
})
export class ParkList implements OnInit {

  private readonly parkService = inject(ParkService);

  parks = this.parkService.parks;
  errorMessage = '';

  ngOnInit(): void {
    this.parkService.getParks().subscribe({
      next: () => {
        this.errorMessage = '';
      },
      error: () => {
        this.errorMessage = 'Impossible de charger les parcs.';
      }
    });
  }

  deletePark(id: string): void {
    this.parkService.deletePark(id).subscribe({
      error: () => {
        this.errorMessage = 'Erreur lors de la suppression.';
      }
    });
  }
}
