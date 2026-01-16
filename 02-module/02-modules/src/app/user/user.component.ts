import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


export class UserComponent{
  @Input ({required:true}) user !: User; 

  get ImagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  @Output() select = new EventEmitter<string>();

  onSelectUser(){
    this.select.emit(this.user.id);
  }

  @Input({required : true}) selected!:boolean; 

}