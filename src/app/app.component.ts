import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, Router, ActivatedRoute } from '@angular/router';
import { RouteStatesComponent } from "./route-states/route-states.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLinkWithHref, RouteStatesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '014-routing';


  
  //route-Navigation, when any function here is triggered, redirect to these links in ''
  //use:case - user clicks a button and they get redirected to somewhere
  private router = inject(Router)
  routeNavigation(){
    this.router.navigate(['/lazyuser'])
  }
  routeNavigation2(userId: number){
    this.router.navigate(['user', userId])    // "/user/:userId"
  }
  //similarly we can also pass Search query Parameters and Matrix Parameter 

  


  //relativeTo: from where should path be calculated, by default: root ('/')
  private route = inject(ActivatedRoute)      //current-route
  routeNavigation3(){
    this.router.navigate(['..'], {relativeTo: this.route})
  }



  //when we have full deep URL links we can use navigateByUrl(), as in .navigate() its clunky
  routeNavigation4(){
    this.router.navigateByUrl("/lazyuser")
  }


}
