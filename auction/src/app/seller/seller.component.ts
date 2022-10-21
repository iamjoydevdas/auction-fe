import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OnInit {
  seller={
    id:null
  }
  res:any
  constructor(public http:HttpClient) { }


  ngOnInit(): void {
  }

  singIn():void {
    this.http.get('http://localhost:9091/api/v1/seller/'+this.seller.id)
    .subscribe(res => {
      console.log(res)
      this.res = res
    })
  }
}
