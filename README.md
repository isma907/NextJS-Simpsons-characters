# NextJs - Simpsons Characters App

# 📦 Project Setup

## 1. Install dependencies

Make sure you have the following installed:

- Node.js
- MongoDB

---

## 2. Configure database

Make sure you have a MongoDB instance running locally or use a remote database.

Then, set/check PORT for the `MONGODB_URI` environment variable in your `.env.local` file:

```bash
MONGODB_URI=mongodb://localhost:27017/simpsons
```

---

## 3. Seed the database

Run the following command to populate initial data:

```bash
npm run seeds
```

## 4. Run Project

```bash
npm start
```
