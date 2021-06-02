import { Component, OnInit } from '@angular/core';
import { CardWishService } from '../card-wish.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(public wishService:CardWishService) { }

  ngOnInit(): void {
    console.log(this.wishService.wishItem);

  }

}
