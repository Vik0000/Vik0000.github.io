import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import hobbies from '../hobbies.json';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public hobbiesList:any ;
  email = new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]);
  name = new FormControl(null,Validators.required);
  surName = new FormControl(null,Validators.required);
  check = new FormControl(null,Validators.required);

  constructor(private http: HttpClient) {


   }

  ngOnInit(): void {
    this.fetchHobbies();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
     
      return 'Трябва да попълните полето!';
    }
    
    return this.email.hasError('pattern') ? 'Невалиден имейл!' : '';
  }

  nameError() {
    if (this.name.hasError('required')) {
      return 'Трябва да попълните полето!';
    }
  }

  surNameError() {
    if (this.surName.hasError('required')) {
      return 'Трябва да попълните полето!';
    }
  }

  checkError() {
    if (this.check.hasError('required')) {
      return 'Трябва да приемете условията!';
    }
  }

  submit(login){
    console.log(`${this.name.value} ${this.surName.value} 
    
    имейл: ${this.email.value}`)
  }

  private fetchHobbies() {
    this.http
    .get('https://form-a71cc-default-rtdb.firebaseio.com/hobbies.json')
    .subscribe(hobbies => {
      this.hobbiesList = hobbies;
    })
  }

}

