# Netflix Clone

## Overview

Welcome to the Netflix Clone, a project developed using Next.js 15, Tailwind CSS, and TypeScript. This application replicates an small part of the original website. Just a practice.

## Screenshots

<img src="./public/github/screenshot-1.jpg"/>
<img src="./public/github/screenshot-2.jpg"/>

## Tech Stack

![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)![shadcn/ui](https://img.shields.io/static/v1?style=for-the-badge&message=shadcn%2Fui&color=000000&logo=shadcn%2Fui&logoColor=FFFFFF&label=)![Drizzle](https://img.shields.io/static/v1?style=for-the-badge&message=Drizzle&color=C5F74F&logo=Drizzle&logoColor=000000&label=)![Neon](https://img.shields.io/static/v1?style=for-the-badge&message=Neon&color=000000&logo=Neon&logoColor=FFFFFF&label=)

## Getting Started

First, clone the repo and move into it:

```bash
git clone https://github.com/frshaad/netflix-clone.git
cd netflix-clone
```

Then, install dependencies:

```bash
npm i
# or
pnpm i
# or
yarn install
```

Set up your environment variables:

```bash
cp .env.example .env
```

Initialize and sync the database:

```bash
npm run db:generate
npm run db:push
npm run db:seed
```

And run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
