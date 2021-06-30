import { Component, OnInit } from '@angular/core';
import { CartFavoritesService } from '../../service/cart-favorites.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  constructor(public cartFavoriteService: CartFavoritesService) { }

  ngOnInit() {
  }

}
