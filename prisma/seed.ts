import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    { name: 'PlayStation 5', description: 'La mejor consola', stock: 100, price: 499.99 },
    { name: 'Xbox Series X', description: 'Potente consola de Microsoft', stock: 50, price: 499.99 },
    { name: 'Nintendo Switch', description: 'Consola híbrida', stock: 200, price: 299.99 },
    { name: 'PlayStation 4', description: 'Consola de generación anterior', stock: 150, price: 299.99 },
    { name: 'Xbox One', description: 'Consola de generación anterior de Microsoft', stock: 75, price: 299.99 }
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product
    });
  }

  console.log('Seed data has been created successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
