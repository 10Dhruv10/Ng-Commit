import { Component, signal, computed, input, output, Input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})


// STATE MANAGEMENT - ZONE Vs SIGNALS
// export class UserComponent {

//   /*
//   ------------------------------------------------------------------------------------------------
//   USING DEFAULT STATE MANAGEMENT (zone.js), slower
  
//   // if i were to declare randomIndex here i would need to pass this.randomIndex as key 
//   // because during selectedUser initialization I cant refer to an instance of class (randomIndex)
//   selectedUser = DUMMY_USERS[randomIndex]

//   //i can also use without get, for that i call using [src] = "ImagePath(), with get use ImagePath"
//   get ImagePath(){
//      return 'assets/users/' + this.selectedUser.avatar
//   }

//   onSelectUser(){
//     const newRandom = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[newRandom];
//   }
  
//   ------------------------------------------------------------------------------------------------
//   */
  


//   // USING SIGNALS STATE MANAGEMENT, faster

//   // make class variables as signals and not methods, as method variables are only inside the fucntion
//   // we access signals by adding () to their names like functions

//   selectedUser = signal(DUMMY_USERS[randomIndex]);

//   ImagePath = computed(() => { return 'assets/users/' + this.selectedUser().avatar });

//   onSelectUser(){
//     const newIndex = Math.floor(Math.random() * DUMMY_USERS.length)
//     const newUser = DUMMY_USERS[newIndex];

//     this.selectedUser.set(newUser);  //changes value of signal to newUser
//   }

//   /*
//   Why Using computed() is better:

//     1. Lets say I was calling UserComponent(selector) mutliple times for some reason, using the 
//         zone.js (get) way the ImagePath would be recalculated everytime even when selectedUser is same
//         whereas with computed it will only get calculcated if selectedUser() signal has been changed.

//     2. Computed is also a signal.
//   */

// }


export class UserComponent{
  /*
    @Input( { required:true } ) avatar !: string;
    @Input( { required:true } ) name !: string;

    I changed input to:
  */
  // @Input({ required:true }) user !: {
  //   avatar : string;
  //   name : string;
  //   id: string;
  // };

  @Input ({required:true}) user !: User; 
  // @Input means its a child component and will receive data from parent, i.e. AppComponent here
  // Typescript wont let me create avatar, name without giving it an initial value, so i promise to it that i will pass a value in future and use '!:'
  
  

  get ImagePath(){
    return 'assets/users/' + this.user.avatar;
  }


  /*
  USING SIGNALS (input() which is a read-only signal so i cant use .set())
  avatar = input.required<string>();
  name = input.required<string>();
  select = output<string>();

  ImagePath = computed(() => { return 'assets/users/' + this.avatar() });
  */

  //@Input( { required: true } ) id !: string;
  @Output() select = new EventEmitter<string>();


  onSelectUser(){
    this.select.emit(this.user.id);
  }

  /*
    @OUTPUT() means a child is sending data to parent

    in (select) = "onSelectUser($event)", Parent waits for an "select" eventlistener(e.g. click), 
    Here:
      • 'select' → is the EventEmitter created in the child using @Output().
      • 'onSelectUser' → is a method in the Parent that will run when the $event is sent by child.
      • '$event' → carries the value sent by the child (in this case, the user's id).

    Note: In my current example I have 2 onSelectUser(), one is parent and other in child

  */

  
  @Input({required : true}) selected!:boolean;  //become true when user is selected
  /* with css i cant make a button stay colored after a click,
  so we use [class.active] = "selected" and [selected] = "u.id === selectedUserId" */

}