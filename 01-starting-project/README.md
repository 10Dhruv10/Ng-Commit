# 01-starting-project - Task Management App

A task management application exploring Angular fundamentals with standalone components.

## What I Learned

### **app.component.ts** - Root Component
- **Component composition** - importing `HeaderComponent`, `UserComponent`, `TasksComponent`
- **State management** - `selectedUserId` for tracking active user
- **Event handling** - `onSelectUser(id: string)` method
- **Computed properties** - `get selectedUser()` to find user by ID
- Data source - `DUMMY_USERS` array

### **user/user.component.ts** - User Selection
- **@Input()** - receiving `user` object and `selected` boolean from parent
- **@Output()** - emitting `select` event with user ID to parent
- **Computed property** - `get ImagePath()` for dynamic image paths
- Event binding - `onSelectUser()` click handler

### **tasks/tasks.service.ts** - State Management Service
- **Dependency injection** - `@Injectable({providedIn: 'root'})`
- **LocalStorage integration** - `saveTasks()` and constructor loading
- **CRUD operations** - `addTask()`, `removeTask()`, `getUserTasks()`
- **Data persistence** - `localStorage.setItem()` and `localStorage.getItem()`
- **JSON serialization** - converting between objects and strings

### **tasks/tasks.component.ts** - Task List Container
- **Service injection** - `inject(TasksService)`
- **@Input()** - receiving `userId` and `name` from parent
- **Computed property** - `get selectedUserTasks()` filtering tasks by user
- **Modal state** - `isAddingTask` boolean for showing/hiding new task form

### **tasks/task/task.component.ts** - Individual Task Item
- **@Input()** - receiving `task` object from parent
- **@Output()** - emitting `complete` event with task ID
- **Service injection** - calling `tasksService.removeTask()`
- Event binding - `onCompleteTask()` click handler

### **tasks/new-task/new-task.component.ts** - Task Creation Form
- **FormsModule** - two-way binding with `[(ngModel)]`
- **Template-driven form** - `enteredTitle`, `enteredSummary`, `enteredDate`
- **@Input()** - receiving `userId` from parent
- **@Output()** - emitting `close` event to parent
- **Service injection** - calling `tasksService.addTask()`
- Form handling - `onSubmit()` and `onCancel()` methods

### **tasks/task/task.model.ts** - Type Definitions
- **Interface** - `Task` with `id`, `userId`, `title`, `summary`, `dueDate`
- **Type alias** - `NewTaskData` for task creation (without `id` and `userId`)

### **shared/card/card.component.ts** - Reusable UI Component
- **Content projection** - `<ng-content>` for flexible content
- Standalone component for styling wrapper

### **header/header.component.ts** - Static Header
- Simple presentational component
- No logic, just template display

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
