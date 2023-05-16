import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  text:string='Enter Email'; 
  style='ss';
  style2='ss'; 
  btnStyle='btnn';
  cliked: boolean=true;
  validate:RegExp=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  valid:string='';

  setText(data:Event){
    if ((<HTMLInputElement>data.target).value=='')
      this.text='Enter Email';
    else  
      this.text =(<HTMLInputElement>data.target).value;  
    if(this.text.match(this.validate))
      this.valid='VALID';
    else
      this.valid='NOT VALID';   
  }

  focusd(num:number){
    if(num==1)
      this.style='wow';
    else 
      this.style2='wow';   
  }

  focuseOut(num:number){
    if(num==1)
      this.style='ss';
    else  
      this.style2='ss';  
  }

  goBtn(input:HTMLInputElement){
    if (this.cliked==true){
      this.btnStyle='btnclick';
      this.cliked=false;
    }
    setTimeout(()=>{
      if (this.cliked==false){
        this.btnStyle='btnn';
        this.cliked=true;
      } 
    },350);
  }
  fromDemoToAPP(){
    console.log('element ref from child to app component');
  } 
  
}
