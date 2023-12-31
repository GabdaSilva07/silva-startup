 # Silva Startup

 This is a [Next.js](https://nextjs.org/) project for Silva Startup, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

 ## Getting Started

 To get the application running in a development environment, follow these steps:

 1. Clone the repository to your local machine.
 2. Navigate to the project directory.
 3. Install the project dependencies by running `pnpm install`. If you don't have pnpm installed, you can install it by running `npm install -g pnpm`.
 4. Start the development server by running `pnpm run dev`.

 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

 This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

 ## Docker Build and Run

 To build the Docker image and run it, follow these steps:

 1. Build the Docker image by executing `docker build -t silva-startup .`.
 2. Run the Docker image by executing `docker run -p 3000:3000 silva-startup`.

 Alternatively, you can use Docker Compose to build and run the application:

 1. Build and run the Docker image using Docker Compose by executing `docker-compose up --build`.

 Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

 ## Learn More

 To learn more about Next.js, take a look at the following resources:

 - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
 - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

 You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

 ## Deploy on Vercel

 The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

 Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
