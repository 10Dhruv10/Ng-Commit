import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterOutlet],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export default class UserComponent {

}
