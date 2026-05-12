# Virgin Active Tech Test - Record Explorer!

A full-stack monorepo built with Nx that demonstrates a very simple record browsing application that RB would have enjoyed back in 1971.

There's an Angular frontend that retrieves and displays records from a NestJS backend API. (State management on the frontend is handled using NgRx).

## Overview

This project is structured as a monorepo using Nx, containing two independent applications:

- **Frontend (`record-finder`)**
  - Angular single-page application
  - Uses NgRx for state management
  - Provides a UI to browse and view records

- **Backend (`backend`)**
  - NestJS REST API
  - Serves record data to the frontend
  - Organised using controllers, services, and repositories

The frontend communicates with the backend via HTTP to retrieve record data.

## Architecture

Angular Frontend (record-finder)
→ HTTP Requests (NgRx Effects)
→ NestJS Backend API (backend)
→ JSON-based record data source

## Getting Started

Install Nx globally:
- npm install -g nx

Install dependencies:
- npm install

## Running the applications

Frontend:
- nx serve record-finder

Backend:
- nx serve backend

## Tech Stack

Frontend:
- Angular
- NgRx (state management)
- RxJS
- Bootstrap

Backend:
- NestJS
- REST API architecture
- JSON data repository pattern

Workspace:
- Nx monorepo
