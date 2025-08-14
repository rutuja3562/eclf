# 🚀 Fullstack App – Next.js + NestJS + Prisma + PostgreSQL

This repository contains:

1. **Frontend** – `eclf-skeleton` built with **Next.js 15**, **React 19**, **Zustand**, and **React Query**.
2. **Backend** – `nest-jwt` built with **NestJS 11**, **JWT Authentication**, and **Prisma ORM**.
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

### 1️⃣ Create `.env` file in the **`nest-jwt`** folder

```env
DATABASE_URL="postgresql://postgres:1234@localhost:5432/nestjs"
JWT_SECRET="super-secret-key"
```

## 🛠 Backend (NestJS) Setup

Navigate to the `server` directory and install dependencies:

yarn install

Run the NestJS server:

yarn start:dev

## 🛠 Frontend (Next.js) Setup

Navigate to the `eclf-skeleton` directory and install dependencies:

```
yarn install
```

Run the Next.js development server:

```
yarn dev
```

yarn dev

## 🛠 Database (Prisma) Setup

Navigate to the `server` directory and run the following commands:

```
npx prisma migrate dev --create-only
npx prisma db push

```
