import { Component, OnInit } from '@angular/core';
import { CartFavoritesService, Product } from '../cart-favorites.service';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],

})
export class ProductsComponent implements OnInit {
  minPrice: number = 0
  maxPrice: number = 1000

  products: Product[] = []//products
  nameCheck: Product[] = []
  memoryCheck: Product[] = []
  colorCheck: Product[] = []

  error: string = ""
  constructor(
    public cartFavoritesService: CartFavoritesService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.addTodos().subscribe((todos) => { return this.products = todos }, (error) => { this.error = error.message })
  }

}
