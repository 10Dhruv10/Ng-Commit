import { Component, signal, inject, DestroyRef } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);

  private httpClient = inject(HttpClient);
  private destroyref = inject(DestroyRef);
  //both of these are services in angular so we use inject

  isFetching = signal(false);             //for showing a test for the time period until our images load
  error =  signal('');                    //for http errors      

  ngOnInit(){
    this.isFetching.set(true);

    const subscription = this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places').subscribe({
      next: (resData) => this.places.set(resData.places),
      error: (error) => {
        this.error.set('Failed to fetch values')
        console.log(error.message)
      },
      complete: () => this.isFetching.set(false)
    });

    this.destroyref.onDestroy(  () => {
      subscription.unsubscribe();
    });
  }  
  //get gives observable so we use subcribe() to read, 
  //as i want to get places key of resData object, i cant directly use restData.places i need to declare type of places first (i.e. in .get())



  //----------------------------------------------------------------------------------------------------------------------------------------------
  // ngOnInit(){
    
  //   const subscription = this.httpClient.get<{ places: Place[] }>('http://localhost:3000/places', { observe: 'response' }).subscribe({
  //     next: (resData) => {
  //       console.log(resData.body?.places);
  //       console.log(resData);
  //   }});

  //   this.destroyref.onDestroy(  () => {
  //     subscription.unsubscribe();
  //   });

  //if i want to see header and status along with data, i can use observer: response
  //----------------------------------------------------------------------------------------------------------------------------------------------
  

  onSelectPlace(selectedPlace: Place){
    this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: selectedPlace.id,
      })
      .subscribe({
        next: (resData) => console.log(resData),
      });
  }

}