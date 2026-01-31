# Ng-Commit

This repository contains various Angular projects created for learning and exploring different Angular concepts and features.

## 📚 Projects Overview

### 01-starting-project
**Task Management Application - Angular Fundamentals**

A comprehensive task management app exploring core Angular concepts:
- **Standalone components** and modern Angular architecture
- **Component communication** using @Input and @Output decorators
- **Services and dependency injection** for shared state management (TasksService)
- **Two-way data binding** with FormsModule
- **Event handling** and user interactions
- **Dynamic rendering** with structural directives
- **Component composition** and content projection with `<ng-content>`
- **LocalStorage integration** for data persistence

---

### 02-modules
**Module-Based Architecture**

The same task management app restructured using NgModules instead of standalone components:
- **NgModule architecture** (AppModule, TasksModule, SharedModule)
- **Module declarations, imports, and exports**
- **Lazy loading** capabilities - main advantage of modules over standalone components
- **Shared modules** for reusable components across the application
- **Module-based bootstrapping** using `bootstrapModule` instead of `bootstrapApplication`
- Understanding the transition from standalone to module-based architecture

---

### 04-services-deep-dive
**Advanced Service Patterns**

Deep dive into Angular services and dependency injection:
- **Injectable services** with `providedIn: 'root'`
- **Service injection** using `inject()` function
- **Signals** for reactive state management (`signal()`, `computed()`)
- **Signal updates** with `.update()` and `.set()`
- **Read-only signals** with `.asReadonly()`
- **Service composition** - services depending on other services (LoggingService)
- **Constructor-based** and **inject()-based** dependency injection patterns
- Task status management with TypeScript types

---

### 07-directives
**Custom Directives**

Creating and using both attribute and structural directives:
- **Attribute directives** - modifying element appearance and behavior
- **HostListener** for responding to DOM events (mouseenter, mouseleave)
- **@Input decorators** for passing data to directives
- **ElementRef** for direct DOM manipulation
- **Structural directives** with `*` syntax
- **TemplateRef** and **ViewContainerRef** for dynamic view manipulation
- Custom structural directive implementation (`*appStructural`)
- **ngNonBindable** directive usage
- Comparison of modern `@if` vs older `*ngIf` approaches

---

### 011-rxjs
**RxJS and Observables**

Working with reactive programming and streams of data:
- **Observables** and the `.subscribe()` pattern
- **RxJS operators** - `pipe()`, `map()`, `interval()`
- **Observable subscriptions** and memory management
- **Unsubscribing** with DestroyRef to prevent memory leaks
- **Signals with observables** - `toObservable()` for converting signals
- **Effects** for reacting to signal changes
- Understanding streams of data and asynchronous operations
- Lifecycle hooks with observables (ngOnInit, ngOnDestroy)

---

### 012-http
**HTTP Client and API Communication**

A "PlacePicker" application demonstrating HTTP operations:
- **HttpClient** service for making HTTP requests
- **provideHttpClient()** configuration in bootstrap
- **GET, PUT, DELETE** requests to a backend API
- **Observable-based HTTP** with `.subscribe()`
- **Loading states** with signals (`isFetching`)
- **Error handling** for HTTP requests
- **Response observation** with `{ observe: 'response' }` for headers/status
- **DestroyRef** for cleaning up subscriptions

- **Backend integration** - Node.js/Express backend included   (not implemented by me, taken from the course)
- **CORS configuration** for cross-origin requests             (not implemented by me, taken from the course)

---

### 013-forms (013-reactive-form)
**Reactive Forms**

Comprehensive reactive forms implementation:
- **FormControl** for individual form fields
- **FormGroup** for grouping related controls
- **FormArray** for dynamic lists of controls
- **FormBuilder** service for cleaner form creation
- **Validators** - `Validators.required`, `Validators.minLength()`
- **Form validation states** - valid, invalid, dirty, pristine, touched
- **Nested FormGroups** (address group within profile form)
- **Dynamic form controls** - adding/removing aliases
- **Partial updates** with `patchValue()`
- **Form submission** handling
- **ReactiveFormsModule** usage

---

### 014-routing
**Angular Router**

Complete routing implementation with advanced patterns:
- **Router configuration** in `app.routes.ts`
- **Route parameters** (`:id`) and path variables
- **RouterLink** and **RouterLinkActive** directives
- **Programmatic navigation** with Router service (`.navigate()`, `.navigateByUrl()`)
- **ActivatedRoute** for reading route parameters
- **Query parameters** and **matrix parameters**
- **Route guards** - `canActivate`, `canActivateChild`, `canMatch`, `canDeactivate`
- **Lazy loading** with `loadComponent()`
- **Route resolvers** for pre-fetching data
- **Redirects** with `redirectTo`
- **Wildcard routes** (`**`) for 404 pages
- **Named router outlets** for secondary routes
- **Relative navigation** with `relativeTo`
- **Observable route parameters** with `.params.subscribe()`
- **Snapshot vs Observable** route parameter access

---

## 🚀 Getting Started

Each project can be run independently:

```bash
cd [project-folder]
npm install
ng serve
