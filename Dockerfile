# Use official Node.js latest image as build environment
FROM node:22-alpine AS build

# Set working directory
WORKDIR /mittal_soham_final_site

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app
RUN npm run build

# Production image to serve the build with nginx
FROM nginx:stable-alpine

# Copy built files from build stage
COPY --from=build /mittal_soham_final_site/build /usr/share/nginx/html

# Create custom nginx config to listen on port 5575
RUN echo 'server { \
    listen 5575; \
    location / { \
        root /usr/share/nginx/html; \
        index index.html index.htm; \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# Expose port 5575
EXPOSE 5575

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
