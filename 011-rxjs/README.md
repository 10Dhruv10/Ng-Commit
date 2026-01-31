

## What I Learned - RxJS & Observables

### **app.component.ts** - Reactive Programming Patterns

#### **Part 1: Observables with interval()**
- **Creating observables** - `interval(1000)` for time-based emissions
- **RxJS operators** - `pipe()` with `map((val) => val*2)` to transform values
- **Subscribing** - `.subscribe({ next: (val) => console.log(val) })`
- **Memory management** - unsubscribing with `DestroyRef.onDestroy()`
- Preventing memory leaks by cleaning up subscriptions

#### **Part 2: Signals with Effects**
- **Signals** - `signal(0)` for reactive state
- **Signal updates** - `.update(prevCount => prevCount + 1)`
- **Effects** - `effect()` in constructor to react to signal changes
- Why effects must be in constructor (component ownership)

#### **Part 3: Converting Signals to Observables**
- **toObservable()** - converting signals to observable streams
- **Signal observables** - `clickCount$ = toObservable(this.clickCount)`
- **Subscribing to signal changes** - `.subscribe({ next: (val) => console.log(val) })`
- Understanding when to use signals vs observables

### Key Concepts
- **Observables** - streams of data over time
- **Operators** - transforming observable data with `pipe()` and `map()``
- **Subscriptions** - listening to observable emissions
- **Memory leaks** - why unsubscribing matters
- **Signals vs Observables** - choosing the right reactive pattern

---

## Development server

