# Essentials

This is the existing Angular CLI content.

---

## What I Learned - NgModule Architecture

### **app.module.ts** - Root Module
- **@NgModule decorator** - defining module metadata
- **declarations** - registering `AppComponent`, `HeaderComponent`, `UserComponent`
- **imports** - bringing in `BrowserModule`, `SharedModule`, `TasksModule`
- **bootstrap** - specifying `AppComponent` as the root component
- **Module-based bootstrapping** - using `platformBrowserDynamic().bootstrapModule(AppModule)`

### **tasks/tasks.module.ts** - Feature Module
- **Feature module creation** - organizing task-related components
- **declarations** - `TaskComponent`, `TasksComponent`, `NewTaskComponent`
- **imports** - `FormsModule`, `BrowserModule`, `SharedModule`
- **exports** - making `TasksComponent` available to other modules
- Understanding imports vs exports in modules

### **shared/shared.module.ts** - Shared Module
- **Shared module pattern** - reusable components across features
- **CardComponent** declaration and export
- Module reusability

### **Converting from Standalone to Modules**
- Changing `standalone: true` to `standalone: false`
- Moving component imports to module declarations
- Updating `main.ts` from `bootstrapApplication()` to `bootstrapModule()`

### Key Concepts
- **Lazy loading preparation** - main advantage of modules over standalone
- **Module encapsulation** - organizing code by feature
- **Dependency management** - controlling what's visible between modules

---

## Development server
