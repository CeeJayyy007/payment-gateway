# syntax=docker/dockerfile:1

# docker build -t payment-gateway-frontend .
# docker build --no-cache --progress=plain -t payment-gateway-frontend .


# Use the official Node runtime as a parent image
FROM node:18.17.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy dependencies lock to container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy source files into container
COPY . .

# Build Next.js app
RUN npm run build

ENV PORT 3000

EXPOSE $PORT

# Run compiled project
CMD npm run start
