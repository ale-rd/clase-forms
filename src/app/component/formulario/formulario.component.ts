import {FormBuilder, FormGroup} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formDisabled: boolean;
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.myForm = fb.group({
    //   'name'
    // })
   }

  ngOnInit() {

  }

}
