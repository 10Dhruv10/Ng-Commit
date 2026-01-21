import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-route-states',
  imports: [],
  templateUrl: './route-states.component.html',
  styleUrl: './route-states.component.css'
})
export class RouteStatesComponent {
  private router = inject(Router)
  readUrl(userId: number){
    this.router.navigate(['user', userId])
  }


  // ActivatedRoute: Provides info associated with current route
  private currentRoute = inject(ActivatedRoute)
  ngOnInit(){

    //snapshot (one-time): at that current moment what is ?id = 
    console.log(this.currentRoute.snapshot.paramMap.get('id'))

    //observables (reactive): to check for updated values of params, queryparams, url
    this.currentRoute.params.subscribe(p => {
      console.log(p)
    })
    this.currentRoute.queryParams.subscribe(qp => {
      console.log(qp)
    })
    this.currentRoute.url.subscribe(u => {
      console.log(u)
    })
  }



}
