import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInputService } from './user-input.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment = '';
  enteredAnnualInvestment = '';
  enteredExpectedReturn = '';
  enteredDuration = '';
  
  isSubmit : boolean = false;
  submitSignal = output<boolean>();

  constructor(private userinputService: UserInputService){
  }

  onSubmit(){
    this.isSubmit = true;
    this.submitSignal.emit(this.isSubmit);

    this.userinputService.setUserData({
      initial: this.enteredInitialInvestment,
      annual: this.enteredAnnualInvestment,
      expected: this.enteredExpectedReturn,
      duration: this.enteredDuration
    })
  }

  //Later try using zone.js output and check its time vs signal time in developer tool to check if its really helping or not


  

}
