# Http

## What I Learned

HTTP communication (PlacePicker):

- **HttpClient** with GET/PUT/DELETE requests
- **Typed responses** `<{ places: Place[] }>`
- **Error handling** & loading states with signals
- **Observable patterns** and subscription management
- **Response observation** with `{ observe: 'response' }` for headers/status codes
- **Express backend** with CORS setup

## How to Use

### 1. Start the Backend Server
```bash
cd backend
npm install
node app.js
# Server runs on http://localhost:3000
```

### 2. Start the Angular App
```bash
# In the project root (012-http folder)
npm install
ng serve
# Navigate to http://localhost:4200/
```

### 3. Key Files to Explore

- **`src/app/places/available-places/available-places.component.ts`**
  - GET requests with typed responses
  - Error handling with signals
  - Loading states (`isFetching` signal)
  - Subscription cleanup with `DestroyRef`

- **`src/app/places/user-places/user-places.component.ts`**
  - PUT requests to update user places
  - DELETE requests to remove places

- **`src/main.ts`**
  - `provideHttpClient()` setup

- **`backend/app.js`**
  - Express server with REST endpoints
  - CORS configuration
  - GET `/places` - fetch all places
  - GET `/user-places` - fetch user's places
  - PUT `/user-places` - add place to user's collection
  - DELETE `/user-places/:id` - remove place from collection

### What to Look For

- **Observable subscriptions** - how `.subscribe()` handles async HTTP responses
- **Typed responses** - `HttpClient.get<{ places: Place[] }>()`
- **Error handling** - `error: (error) => { ... }` in subscribe
- **Loading states** - using signals to track request progress
- **Memory management** - unsubscribing with `DestroyRef.onDestroy()`
- **CORS setup** - `Access-Control-Allow-Origin` headers in backend

---

