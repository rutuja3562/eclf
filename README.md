# 🚀 Fullstack App – Next.js + NestJS + Prisma + PostgreSQL

## 📦 Prerequisites

git clone

`https://github.com/rutuja3562/eclf.git`

```
cd eclf
```

This repository contains:

1. **Frontend** – `website` built with **Next.js 15**, **React 19**, **Zustand**, and **React Query**.
2. **Backend** – `server` built with **NestJS 11**, **JWT Authentication**, and **Prisma ORM**.
3. **Database** – **PostgreSQL** for persistent storage.

---

## 📦 Prerequisites

Before starting, make sure you have:

- [Node.js](https://nodejs.org/) **>= 18**
- [npm](https://www.npmjs.com/) **>= 9**
- [PostgreSQL](https://www.postgresql.org/download/) installed and running locally
- [Prisma CLI](https://www.prisma.io/docs) (installed automatically with dependencies)

---

## ⚙️ Environment Setup

### 1️⃣ Create `.env` file in the **`server`** folder

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/eclf"
```

## 🛠 Frontend (Next.js) Setup

Navigate to the `eclf` directory and install dependencies:

```
yarn install
```

Run the Next.js development server:

```
yarn dev
```

yarn dev

## 🛠 Backend (NestJS) Setup

Navigate to the `server` directory and install dependencies:

```
yarn install
```

## Generate Prisma Client and Database (Prisma) Setup

```
npx prisma generate
npx prisma migrate dev --create-only
npx prisma db push
```

Run the NestJS server:

```
yarn start:dev
```

## Database Meny insert Query:

```
INSERT INTO "Menu" (id, name, slug, layout)
VALUES
  (
    gen_random_uuid(),
    'About Us',
    'about',
    'aboutLayout'
  ),
  (
    gen_random_uuid(),
    'Our Services',
    'services',
    'serviceLayout'
  );

```
