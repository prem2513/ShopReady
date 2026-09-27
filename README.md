# ShopReady

A full-stack e-commerce storefront built with **React**, **Tailwind CSS**, and **Firebase**.

- Product catalog with category, price, and search filters, plus sorting by price/rating
- "Add to cart" with quantity controls in a slide-over cart panel
- Firebase Authentication (email/password + Google sign-in)
- Firestore-backed cart that syncs in real time across tabs/devices for signed-in users; falls back to `localStorage` for guests

## 1. Install dependencies

```bash
npm install
```

## 2. Set up Firebase

1. Go to the [Firebase console](https://console.firebase.google.com) and create a project.
2. Under **Build > Authentication > Sign-in method**, enable **Email/Password** and **Google**.
3. Under **Build > Firestore Database**, click **Create database** (start in test mode for local dev).
4. Under **Project settings > General > Your apps**, add a Web app and copy the config values.
5. Create a `.env` file in the project root:

```bash
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_STORAGE_BUCKET=...
VITE_FIREBASE_SENDER_ID=...
VITE_FIREBASE_APP_ID=...
```

(Or just paste the values directly into `src/firebase.js`.)

### Firestore security rules

Each signed-in user should only read/write their own cart document:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /carts/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 3. Run it

```bash
npm run dev
```

## Project structure

```
src/
  firebase.js              Firebase app/auth/Firestore initialization
  context/
    AuthContext.jsx         Sign up, sign in, Google auth, sign out
    CartContext.jsx         Cart state; real-time Firestore sync for logged-in users
  data/
    products.js             Sample product catalog
  components/
    Navbar.jsx               Search, cart button, auth control
    Filters.jsx              Category, price, sort controls
    ProductList.jsx          Grid + empty state
    ProductCard.jsx          Single product tile with "Add to cart"
    Cart.jsx                 Slide-over cart with quantity controls
    Login.jsx                Sign in / sign up modal
  App.jsx                    Filtering/sorting logic, page layout
```

## Swapping in real products

Replace the contents of `src/data/products.js` with data from your own source
(a CMS, a REST API, or a `products` collection in Firestore — the shapes are
identical either way, so `ProductList`/`ProductCard` don't need to change).
