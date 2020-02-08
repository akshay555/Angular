import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/shared/interfaces';


@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {
 
  filteredCustomers : ICustomer[] =[];
  customersOrderTotal:number;
  currencyCode :String='INR'
  
  constructor() { }

  ngOnInit() {
  }

}
