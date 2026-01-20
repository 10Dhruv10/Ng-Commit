import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})

export class AppComponent {
/*
  private destroyComponent = inject(DestroyRef);

  //When Component is initialized
  //interval is an observable here that runs after every 1000ms
  //next function takes value once it comes and does the next step: console.log
  ngOnInit(): void{
    const subscription = interval(1000).pipe(          //pipe is used with operator 'map' for modifying observable
      map((val) => val*2)).subscribe(
      {
        next: (val) => console.log(val)
      }
    );

    //when component is destroyed(eg. switching routes) -> unsubscribe
    this.destroyComponent.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  clickCount = signal(0);
  onClick(){
    this.clickCount.update(prevCount => prevCount + 1)
  }

  constructor(){
    effect(() => {
      console.log(`Clicked button ${this.clickCount()} times`)
    });
    //effect register a func that rerun everytime the signal its reading changes

    //effect cant be within the class directly as tha wont work
    //so it is put inside constructor so angular will know which component owns it and when to destroy it
  }
*/


  //WITHOUT USING any SIGNAL
  private destroyComponent = inject(DestroyRef);

  clickCount = signal(0)
  clickCount$ = toObservable(this.clickCount)

  ngOnInit(): void{
    const subscription = this.clickCount$.subscribe({
      next: (val) => console.log(val)
      })

    this.destroyComponent.onDestroy(() => {
      subscription.unsubscribe();
      })
  }
  onClick(){
    this.clickCount.update(prevCount => prevCount + 1)
  }
}
