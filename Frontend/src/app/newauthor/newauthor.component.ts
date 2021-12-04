import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productmodel';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../productservice.service'
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,public _auth:AuthService){  } 
  pageTitle: string = 'Add new Author';
  name= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z.-/ ]*$/)]);
  title= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z0-9-/. ]*$/)]);
  number= new FormControl("", [Validators.required,Validators.pattern(/^[0-9 -.]*$/)]);
  productItem= {
     title :'',
     country:'',
     field:'',
     image:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddAuthor()
  {    
    this.productService.newAuthor(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/authors']);
  }


logoutUser()
{
  localStorage.removeItem('token')
  this.router.navigate(['/products'])
}
loggedUser()
{
this.router.navigate(['/add'])
}
}


