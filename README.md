# Ennovate Frontend

## Running the Project

### Using npm scripts

To run the project using npm scripts, you can use the following commands:

- **Development**: `npm run dev`
- **Production**: `npm run build` and then `serve -s dist`

### Using Docker

You can run the project using Docker for both development and production environments.

#### Development

To run the development environment:

```sh
docker-compose --env-file .env.development up --build
```

Note : if there is no .env.development file, it will use the .env file.

#### Production

To run the production environment:

```sh
docker-compose --env-file .env.production up --build
```

## How to Run

You need to create environment variable files from the example files provided. Run the following commands to create the actual .env files from the example files:

```sh
cp .env.example .env.development
cp .env.example .env.production
```

### Step 2: Run the Project

#### Using npm scripts

- **Development**:

  ```sh
  npm run dev
  ```

- **Production**:
  ```sh
  npm run build
  serve -s dist
  ```

#### Using Docker

##### Development

Run the development environment using Docker:

```sh
docker-compose --env-file .env.development up --build
```

##### Production

Run the production environment using Docker:

```sh
docker-compose --env-file .env.production up --build
```
