# tp-angular

A small Angular 19 lab project covering the basics — standalone components, routing, services, and HTTP calls to a REST API. Inside this app products can be listed and managed.

---

## What it does

- **`/home`** — home page
- **`/products`** — product table with ID, name, price, and selection status. Products can be deleted any product (with a confirmation prompt), and the list refreshes automatically.

The project was built up in three step:
1. Static product list hardcoded in the component
2. Logic moved into a `ProductService`
3. Service wired up to a real REST API via `HttpClient`

---

## Project structure (main files and folder only)

```
src/
├── app/
│   ├── home/                  # Home component
│   ├── products/              # Product list component
│   ├── services/
│   │   └── product.service.ts # GET & DELETE calls
│   ├── app.config.ts          # Router + HttpClient setup
│   └── app.routes.ts          # Route definitions
├── types/
│   └── models/
│       └── product.ts         # Product interface
└── main.ts
```

**Product model**

```typescript
export interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}
```

---

## Backend API

The app expects a local backend running at `http://localhost:8080`.

| Method   | Endpoint          | Description        |
|----------|-------------------|--------------------|
| `GET`    | `/products`       | Fetch all products |
| `DELETE` | `/products/:id`   | Delete a product   |

---

## Stack

| | Version |
|---|---|
| Angular | 19.2.x |
| TypeScript | ~5.7.2 |
| Bootstrap | ^5.3.8 |
| RxJS | ~7.8.0 |

---

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server
ng serve
```

Then open [http://localhost:4200](http://localhost:4200). The app reloads automatically on file changes.

**Prerequisites:** Node.js 18+ and Angular CLI (`npm install -g @angular/cli`)

---

## Other commands

```bash
ng test    # Run unit tests (Karma + Jasmine)
ng build   # Production build → dist/
```