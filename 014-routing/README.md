# 014-routing

## What I Learned

### **app.routes.ts** - Route Configuration
- Basic routes with `path` and `component`
- Route parameters - `user/:id` for dynamic segments
- Redirects - `redirectTo: ''` with `pathMatch: 'full'`
- **Lazy loading** - `loadComponent()` for on-demand loading
- **Guards** - `canMatch` for conditional route access based on `userService.isPremium`
- Wildcard route - `**` for 404 handling
- **Named outlets** - secondary routing with `outlet: 'secondary'`
- **Route resolvers** - `ResolveFn<string>` for pre-fetching query params as page titles

### **app.component.ts** - Programmatic Navigation
- **Router.navigate()** - array-based navigation (`['/lazyuser']`, `['user', userId]`)
- **Relative navigation** - `relativeTo: this.route` for relative paths
- **navigateByUrl()** - string-based navigation for full URLs
- Passing query params and matrix parameters

### **app.component.html** - Template Navigation
- **RouterLink** directive for declarative navigation
- `<router-outlet>` for rendering routed components
- Multiple outlets for named routing

### **route-states/route-states.component.ts** - ActivatedRoute
- **Snapshot** - one-time access with `this.currentRoute.snapshot.paramMap.get('id')`
- **Observables** - reactive updates with `params.subscribe()`, `queryParams.subscribe()`, `url.subscribe()`
- Difference between snapshot (static) vs observables (reactive)

### **app.config.ts** - Router Configuration
- **withComponentInputBinding()** - enables route params as component `@Input()` properties
- **provideRouter()** setup with additional features

### **user.services.ts** - Guard Logic
- Service state (`isPremium: boolean`) used in `canMatch` guard
- Demonstrates conditional routing based on service state

### **lazyloaduser.component.ts** - Lazy Loading
- Component loaded on-demand (not at app startup)
- Reduces initial bundle size

## How to Use

**Part 1:** Basics + RouteLinks/Navigation + Guards
- `app.routes.ts`
- `app.component.html`
- `app.component.ts`
- Rest of the components support `app.routes.ts`

**Part 2:** ActivatedRoute
- `route-states` folder

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
