import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productservice.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {

  pageTitle: string = 'Update Author';
  productItem= {
    title :'',
    country:'',
    field:'',
    image:''
    }
 
  constructor(private router:Router,private productService:ProductService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getAuthor(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.productService.editAuthor(this.productItem);   
    alert("Success");
    this.router.navigate(['/authors']);
  }

}
