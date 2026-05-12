# TechTest

A minimal record application

## Starting the app

Install nx globally
```
npm add --global nx
```

### Frontend
Serve the application
```
nx serve record-finder
```

### Backend
Serve the application
```
nx serve backend
```

## Stack

This app is a monorepo that uses NX. It is made up of a frontend named 'record-finder' that is built using Angular with NgRx for state management, and a backend named 'backend' that is built using NestJS.

### Frontend
- [Angular](https://angular.io/)
- [NgRx](https://ngrx.io/)
  - State management
- [Bootstrap](https://getbootstrap.com/)
  - Responsive UI

### Backend
- [NestJS](https://nestjs.com/)
