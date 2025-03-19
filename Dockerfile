# Step 1: Use the official Node.js image
FROM node:18 AS builder

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) for npm or yarn
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the Next.js app code into the container
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Create the production image from the build
FROM node:18 AS runner

WORKDIR /app

# Step 8: Install only production dependencies
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --production

# Step 9: Copy the build output from the builder stage
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/public /app/public

# Step 10: Expose the port Next.js will run on
EXPOSE 3000

# Step 11: Start the Next.js app in production mode
CMD ["npm", "start"]
