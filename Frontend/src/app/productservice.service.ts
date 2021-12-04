import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    title :'',
    author:'',
    genre:'',
    image:''
    }
    
  constructor( private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get("https://libbackend.herokuapp.com/"+id);
  }
  getAuthor(id:any){
    return this.http.get("https://libbackend.herokuapp.com/author/"+id);
  }
  getProducts(){
    return this.http.get("https://libbackend.herokuapp.com/products");
  }
  
  getAuthors(){
    return this.http.get("https://libbackend.herokuapp.com/authors");
  }
  newProduct(item:any)
  {   
    return this.http.post("https://libbackend.herokuapp.com/insert",{"product":item})
    .subscribe((data: any) =>{console.log(data)})
  }
  newAuthor(item:any)
  {   
    return this.http.post("https://libbackend.herokuapp.com/author/insert",{"product":item})
    .subscribe((data: any) =>{console.log(data)})
  }
  deleteProduct(id:any)
  {

    return this.http.delete("https://libbackend.herokuapp.com/remove/"+id)

  }
  deleteAuthor(id:any)
  {

    return this.http.delete("https://libbackend.herokuapp.com/author/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("https://libbackend.herokuapp.com/update",product)
    .subscribe((data: any) =>{console.log(data)})
  }
  editAuthor(product:any)
  {
    console.log('client update')
    return this.http.put("https://libbackend.herokuapp.com/author/update",product)
    .subscribe((data: any) =>{console.log(data)})
  }
}
