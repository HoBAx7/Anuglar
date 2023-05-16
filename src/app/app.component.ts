import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //encapsulation: ViewEncapsulation.None //,Emulated, shadowDOM
})
export class AppComponent {
  title = 'demo';
  style:string='ss';
  style2:string='ss';
  @ViewChild('dateInput') dateInput:ElementRef<HTMLInputElement>= {} as ElementRef;
  @ViewChild('ageInput', {static:true}) ageInput:ElementRef<HTMLInputElement>= {} as ElementRef;
  @ViewChild(DemoComponent, {static:true}) demoComp:DemoComponent = new DemoComponent;

  getFocused(num:number){
    if(num==1){
      this.style='wow'
    }else{
      this.style2='wow'
    }
  }

  blured(num:number){
    if(num==1){
      this.style='ss'
    }else{
      this.style2='ss'
    }
    let dateInputYear = new Date(this.dateInput.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear-dateInputYear;
    if (age.toString() == 'NaN' ){
      this.ageInput.nativeElement.value='Enter Birthday';
    }else{
      this.ageInput.nativeElement.value = age.toString();
    }
    console.log(age);
  }
}
