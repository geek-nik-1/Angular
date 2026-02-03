import { CommonModule } from '@angular/common';
import { Component, HostBinding, HostListener, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host:{
    class:'control',
    // '(click)' : 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control'
  // @HostListener('click') onClick(){
  //   console.log("hey there");
  // }
  @Input({required:true}) label!:string;

  // onClick(){
  //   console.log("hey there");
    
  // }
}
