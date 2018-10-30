import {AbstractControl, Validators,  FormGroup,   FormBuilder} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm: FormGroup;
  public apellido: AbstractControl;
  public newsCheck: AbstractControl;
  
   constructor(private fb: FormBuilder) {
       this.myForm = fb.group({
         'nombre': ['', Validators.required ],  // valor por defecto
         'apellido': ['', Validators.required],
        //  'email':['', [Validators.required, Validators.email]]
        'email':[{value:'', disabled: true}, Validators.email],
        'newsCheck':['']
       });
       this.apellido = this.myForm.controls['apellido'];
       this.newsCheck = this.myForm.controls['newsCheck'];

       this.newsCheck.valueChanges.subscribe( (value: boolean) =>{
        if(value){
          this.email.enable();
        }else{
          this.email.disable();
        }
      })
     }
  
  ngOnInit() {
  }

  
  // Otra forma, con getter
  get nombre(){ 
    return this.myForm.get('nombre');
  }

  get email(){
    return this.myForm.get('email');
  }

}
