import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/interfaces';
import { CartFavoritesService } from '../shared/service/cart-favorites.service';
import { TodoService } from '../shared/service/todo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  minPrice = 0;
  maxPrice = 1000;

  products: Product[] = [];
  nameCheck: Product[] = [];
  memoryCheck: Product[] = [];
  colorCheck: Product[] = [];

  error = '';
  constructor(
    public cartFavoritesService: CartFavoritesService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.addTodos().subscribe((todos) => this.products = todos, (error) => { this.error = error.message; });
  }

}
