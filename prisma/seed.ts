import prisma from "./prisma";

// const main = async () => {
//   try {
//     // Clear existing data
//     await prisma.product.deleteMany();
//     await prisma.cartItem.deleteMany();
//     await prisma.cart.deleteMany();

//     console.log("Existing data cleared!");

// Seed products
// const products = await prisma.product.createMany({
//   data: [
//     {
//       title: "Laptop",
//       description: "High performance laptop",
//       price: 1200.99,
//       photo:
//         "https://images.unsplash.com/photo-1484788984921-03950022c9ef?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Smartphone",
//       description: "Latest model smartphone",
//       price: 699.99,
//       photo:
//         "https://images.unsplash.com/photo-1598965402089-897ce52e8355?q=80&w=3136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     },
//     {
//       title: "Headphones",
//       description: "Noise-cancelling headphones",
//       price: 199.99,
//       photo:
//         "https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
//     },
//     {
//       title: "Smartwatch",
//       description: "Feature-rich smartwatch",
//       price: 249.99,
//       photo:
//         "https://images.unsplash.com/photo-1722153297252-8fb1645f5bfb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFNtYXJ0d2F0Y2h8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       title: "Tablet",
//       description: "Lightweight and portable tablet",
//       price: 399.99,
//       photo:
//         "https://plus.unsplash.com/premium_photo-1680371834119-bc9d0057ddec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fFRhYmxldHxlbnwwfHwwfHx8MA%3D%3D",
//     },
//   ],
// });

// console.log(`${products.count} products created!`);

// Seed a cart
// const cart = await prisma.cart.create({
//   data: {
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// });

// console.log(`Cart created with ID: ${cart.id}`);
//   } catch (error) {
//     console.log(error);
//     process.exit();
//   } finally {
//     prisma.$disconnect();
//   }
// };

// main();

async function main() {
  console.log("Seeding database...");

  await prisma.cake.deleteMany();
  await prisma.module.deleteMany();

  // Create Modules with Cakes
  await prisma.module.createMany({
    data: [
      {
        title: "Basic Speech Course",
        description:
          "Master the fundamentals of effective speech for everyday conversations.",
      },
      {
        title: "Basic Grammar Course",
        description:
          "Learn the building blocks of grammar to enhance communication skills.",
      },
      {
        title: "Advanced Sentence Formation Course",
        description: "Craft complex sentences with confidence and clarity.",
      },
    ],
  });

  const modules = await prisma.module.findMany();

  await prisma.cake.createMany({
    data: [
      // Cakes for Basic Speech Course
      {
        content: "Practice introducing yourself in different scenarios.",
        contentType: "text",
        instruction: "Write a short introduction about yourself.",
        moduleId: modules[0].id,
      },
      {
        content:
          "https://images.unsplash.com/photo-1534361960057-19889db9621e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        contentType: "image",
        instruction: "Look at the image and describe what you see.",
        moduleId: modules[0].id,
      },
      {
        content: "What is your favorite food and why?",
        contentType: "text",
        instruction: "Describe your favorite dish in 2-3 sentences.",
        moduleId: modules[0].id,
      },
      // Cakes for Basic Grammar Course
      {
        content: "Write a short paragraph describing your daily routine.",
        contentType: "text",
        instruction: "Type your response in a text field.",
        moduleId: modules[1].id,
      },
      {
        content:
          "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
        contentType: "image",
        instruction: "Study the chart and write down your observations.",
        moduleId: modules[1].id,
      },
      // Cakes for Advanced Sentence Formation Course
      {
        content: "Combine the given sentences into a single complex sentence.",
        contentType: "text",
        instruction: 'Use conjunctions like "although" and "because".',
        moduleId: modules[2].id,
      },
      {
        content:
          "Turn this sentence into an indirect question: 'Where is the nearest coffee shop?'",
        contentType: "text",
        instruction: "Rewrite it as a question embedded within a sentence.",
        moduleId: modules[2].id,
      },
    ],
  });

  console.log("Database seeding completed.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
