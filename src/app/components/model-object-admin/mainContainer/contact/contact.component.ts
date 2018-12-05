import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  submitForm(form: NgForm) {
    //интерфейс NgForm нужно импортировать из @angular/forms
    console.log('Submited!', form);
 }  

 answers = [{
   type: 'yes',
   text: 'Да'
 }, {
   type: 'no',
   text: 'Нет'
 }];
 // объект answers будем использовать для радио кнопок
}
