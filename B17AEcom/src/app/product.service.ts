import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getAllBooks() {
    throw new Error('Method not implemented.');
  }

  
  
 

  constructor(private http: HttpClient) { }
  
  
  productcard(){ 
    let url= "https://bookcart.azurewebsites.net/api/Book"
    return this.http.get(url)
  }
  
  getbookid(id: any){
    let url1= "https://bookcart.azurewebsites.net/api/Book/GetSimilarBooks/"+id;
    return this.http.get(url1) 
  }

  



}