import { Component, input } from '@angular/core';
import { Park } from '../../models/park';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-park-item',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './park-item.html',
  styleUrl: './park-item.css'
})
export class ParkItem {
  park = input.required<Park>();
}