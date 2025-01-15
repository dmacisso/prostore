This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Notes:

npx create-next-app@latest
npx shadcn@latest init
 created a components.json
npx shadcn@latest add button
  took the "use --legacy-peer-deps" option
  creates a component folder and ui subfolder
npm i lucide-react
  install icons
npm i next-themes
  install themes
npx shadcn@latest add dropdown-menu
npx shadcn@latest add sheet
npx shadcn@latest add card

Vercel Storage (Neon)
Prisma ORM
npm i -D prisma @prisma/client



Next steps:
1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying 
your database.
5. Tip: Explore how you can extend the ORM with scalable connection pooling, global caching, and real-time database events. Read: https://pris.ly/cli/beyond-orm    

More information in our documentation:
https://pris.ly/d/getting-started

Initial prisma and create a schema file.
npx prisma init

After creating and updating schema/models run the following to create a prisma client
npx prisma generate

Migrate the data to create tables in the database and name the migration init
npx prisma migrate dev --name init


See db in browser
npx prisma studio

To run the typescript file, run the following
npx tsx ./db/seed

Note:
you may be prompted to install tsx@4.19.2 to proceed.

$ npm i zod
  Validator works in conjunction with typescript

Neon serverless driver setup
https://neon.tech/docs/serverless/serverless-driver
npm install @neondatabase/serverless @prisma/adapter-neon ws
npm i -D @types/ws bufferutil


npx shadcn@latest add badge

https://authjs.dev/getting-started/adapters/prisma