import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerlistComponent } from './customerlist/customerlist.component';

import { CustomerComponent }  from './customer.component';
import { CustomerFilterComponent }  from './filter.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ CustomerComponent ,CustomerlistComponent,CustomerFilterComponent],
  exports: [ CustomerComponent ]
})
export class CustomerModule { }