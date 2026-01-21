import { Component, input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  //id coming from 'user/:id'
  id = input<string>()
  

  //for displaying data with a route, here data : {roles: ['guest']}
  route = inject(ActivatedRoute);
  ngOnInit() {
    const roleType = this.route.snapshot.data['roles'];
    console.log(roleType);
}

}
