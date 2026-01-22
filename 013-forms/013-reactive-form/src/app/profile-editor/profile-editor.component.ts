import { Component, inject } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css'],
  imports: [ReactiveFormsModule],
})
export class ProfileEditorComponent {
  //Default way using FormGroup, Later using service of FORMBUILDER
  // profileFormm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl('')
  // })

  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({

    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: [''],                                                       //this [''] is shortcut for formcontrols (only for groups)

    address: this.formBuilder.group({
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
    }),

    aliases: this.formBuilder.array([this.formBuilder.control('')]),     //Formarray containing 1 form control
  });


  onSubmit() {
    console.warn(this.profileForm.value);
  }

  updateProfile() {
    this.profileForm.patchValue({      //for updating a portion
      firstName: 'Nancy',
      address: {
        street: 'ottervile',
      },
    });
  }


  //FormArray
  get allAliases(){
    return this.profileForm.get('aliases') as FormArray;
  }

  addAlias(){
    this.allAliases.push(this.formBuilder.control(''));
  }

  //tracking value and status updates ; also conditions like dirty/pristine and touched/untouched
  constructor(){
    this.profileForm.valueChanges.subscribe(value => {
    console.log('Value:', value);
    console.log('Dirty:', this.profileForm.dirty);
  });

    this.profileForm.statusChanges.subscribe((status: any) => {
      console.log('Touched:', this.profileForm.touched); 
      console.log(status)                      //valid/invalid
  });
  }
  



}
