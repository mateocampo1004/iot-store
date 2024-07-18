// src/prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const productsData = [
    {
      name: 'Product 1',
      description: 'Description for Product 1',
      price: 19.99,
      stock: 100,
    },
    {
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 29.99,
      stock: 50,
    },
    {
      name: 'Product 3',
      description: 'Description for Product 3',
      price: 39.99,
      stock: 200,
    },
  ];

  for (const product of productsData) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Database seeding completed.');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
