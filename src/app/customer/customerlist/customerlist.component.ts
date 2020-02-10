import { Component, OnInit ,Input} from '@angular/core';
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
  
  private _customer :ICustomer[]=[];
  @Input() get customers():ICustomer[]{
    return this._customer;
  }

  set customers(value:ICustomer[])
  {
    if(value)
    {
      this.filteredCustomers = this._customer = value;
      this.calculateOrder();
    }
  }


  constructor() { }

  ngOnInit() {
   

  }

  sort(prop:string)
  {

  }
calculateOrder()
{
  this.customersOrderTotal=0;
  this.filteredCustomers.forEach((cust:ICustomer)=>{
    this.customersOrderTotal = cust.orderTotal;
  });
}


}
