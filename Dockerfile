# Use an official Node.js runtime as the base image
FROM node:20.8.0 as builder

# Set the working directory in the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml to the working directory
COPY package*.json pnpm-lock.yaml ./

# Install pnpm and the application dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Next.js application
RUN pnpm run build

# Start a new stage from node 20
FROM node:20.8.0

WORKDIR /usr/src/app

# Copy over the built Next.js application, public folder, and package.json from the previous stage
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/package*.json ./

# Install pnpm and only production dependencies
RUN npm install -g pnpm
RUN pnpm i --prod

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD [ "pnpm", "start" ]