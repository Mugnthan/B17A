import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.scss']
})
export class NextpageComponent implements OnInit {

 
  url="https://bookcart.azurewebsites.net/Upload/"
  getbookid: any;
  bookDetail:any;
  constructor(private listservice:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.params.subscribe(params=>{
  debugger;
  this.listservice.productcard()
  .subscribe((data:any) => {
    if(data&&data.length){
this.bookDetail=data.find((it: { bookId: any; })=>it.bookId==params['id'])
    }
  });
  this.listservice.getbookid(params['id'])
    .subscribe((data:any) => {
      
      this.getbookid=data;
      
     
    });
  })
  
  }

  
}

