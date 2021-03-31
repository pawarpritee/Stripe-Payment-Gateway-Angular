import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'payment';
  constructor(){}
  handler:any=null;
  ngOnInit(){
    this.loadStripe();
  }
  pay(amount:any){
    var handler=(<any>window).StripeCheckout.configure({
      key:'pk_test_51Ib2xLSIGSumSxIdgYmL7PZKH9Uq4qT9naCQO5DcQRpQqd2w356ldf8XYSy0NBwzVdE8dTNlos1xSj9vFJrTtHjh00HDi5P0pk',
      locale:'auto',
      token:function(token:any){
        console.log(token);
        alert('Payment Success !!');
      }

    });
    handler.open({
      name:'CropIT',
      description:'Stubble Aggrigation and Disposle',
      amount:amount*100
    });
  }
  loadStripe(){
    if(!window.document.getElementById('stripe-script')){
      var s=window.document.createElement("script");
      s.id="stripe-script";
      s.type="text/javascript";
      s.src="https://checkout.stripe.com/checkout.js";
      s.onload=()=>{
        this.handler=(<any>window).StripeCheckout.configure({
          key:'pk_test_51Ib2xLSIGSumSxIdgYmL7PZKH9Uq4qT9naCQO5DcQRpQqd2w356ldf8XYSy0NBwzVdE8dTNlos1xSj9vFJrTtHjh00HDi5P0pk',
          local:'auto',
          token:function(token:any){
            console.log(token);
            alert('Payment Success !!');

          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
}
