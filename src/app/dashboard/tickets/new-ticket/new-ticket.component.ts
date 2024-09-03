import { AfterContentInit, afterNextRender, afterRender, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, AfterContentInit{
//@ViewChild('form') private form!:ElementRef<HTMLFormElement>;
private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
//tempelete variables
//@ContentChild("input") control?:ElementRef<HTMLInputElement | HTMLInputElement>;
//v17
//private controll = contentChild<ElementRef<HTMLInputElement | HTMLInputElement>>('input')
  //@Output() add = new EventEmitter();
  add = output<{title:string, text:string}>()

  titleInput!:string;
  textInput!:string;
constructor(){
    // afterRender(()=>{
    //   //take callback func as argument
    // //with any changes anywhere in all application
    //   console.log('after render');
      
    // });
    // afterNextRender(()=>{
    // //call one time
    //   console.log('after next render');
      
    // });
  }

  ngAfterViewInit():void{
    //use viewChild not in ngOnInit
  }
  ngAfterContentInit():void{
    //use contentChild not in ngOnInit
  }


  onSubmit(){
    this.add.emit({title: this.titleInput,text: this.textInput} )
    //this.form()?.nativeElement.reset();
    this.titleInput = '';
    this.textInput = '';
  }

  


}
