import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from 'src/app/shared/my.validators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {


  form!: FormGroup

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      phoneName: new FormControl(null, [Validators.required]),
      memory: new FormControl(null, [Validators.required]),
      phoneColor: new FormControl(null, [Validators.required]),
      phonePriceUsd: new FormControl(null, [Validators.required, MyValidators.ifInt]),
      pictureUrl: new FormControl(null, [Validators.required])
    })
  }

  submit() {

  }

}
