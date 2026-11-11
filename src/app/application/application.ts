import { Component } from '@angular/core';
import { ProductList } from './components/product-list/product-list';

@Component({
  imports: [ProductList],
  selector: 'app-application',
  styleUrl: './application.css',
  templateUrl: './application.html',
})
export class Application {
}
