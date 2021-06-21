import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartFavoritesService, } from '../cart-favorites.service';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products: any[] = [];
  product!: any;
  error = '';


  constructor(
    private route: ActivatedRoute,
    public cartFavoriteService: CartFavoritesService,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoService.addTodos().subscribe((todos) => {
      this.route.params.subscribe((params: Params) => {
        this.product = todos.find((p) => p.id === +params.id);
      }, (error) => { console.log('error', error); });
    });
  }
}
