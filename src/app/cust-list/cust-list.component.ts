import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {Cust} from './cust';
import { ViewEncapsulation } from '@angular/compiler';

@Component({
  selector: 'app-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent {
  selectedCustomer:string='';
  checkWichBtn:string='';
  cliked: boolean=true;
  customer: Cust[]=[
    {cutomerNo:1, name:'Mark Vough', address:'', city:'London', country:'UK'},
    {cutomerNo:2, name:'John Smith', address:'', city:'NewYork', country:'USA'},
    {cutomerNo:3, name:'Mery Ann', address:'', city:'Berlin', country:'Germany'},
    {cutomerNo:4, name:'Mohab Adel', address:'', city:'Cairo', country:'Egypt'},
    {cutomerNo:5, name:'Rahul Rag', address:'', city:'Delhi', country:'India'}
  ]

  goBtn(num: number, btnElement:HTMLButtonElement, list:Cust){
    this.selectedCustomer=list.name;
    this.checkWichBtn = num.toString(); //for diff class names
      if (this.cliked==true){
        btnElement.className='col-s-8 col-xl-8 btnclick'+this.checkWichBtn;
        this.cliked=false;
      }
      setTimeout(()=>{
        if (this.cliked==false){
          btnElement.className='col-s-8 col-xl-8 btnn'+this.checkWichBtn;
          this.cliked=true;
        } 
      },350);  
    //console.log(list.name) ;
  }    
     
  



}
