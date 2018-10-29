import {Validators, FormGroup,  FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  
   constructor(private fb: FormBuilder) {
       this.myForm = fb.group({
         'nombre': ['', Validators.required ],  // valor por defecto
         'apellido': [''],
         'email':['']
       });
     }
  
  ngOnInit() {
  }

}
