export interface ICustomer
{
id:number;
name:string;
city:string;
orderTotal:number;
customerSince:any;
}

export interface IOrder
{
    customerId : number;
    orderItems:IOrderItems[];   
}

export interface IOrderItems{
    id:number;
    productName:string;
    itemCost:number;
}