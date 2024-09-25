FROM node:18-alpine
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install
RUN npm i -g serve

# Copy the environment file and rename it to .env
COPY .env .env
RUN if [ -f .env.production ]; then cp .env.production .env; fi

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port and start the application
EXPOSE 3000
CMD [ "serve", "-s", "dist" ]