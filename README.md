<h1 align="center">URL Shortener</h1>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=nest,angular,ts,nodejs,mongo&perline=20" />
  </a>
</p>

## Start up

```bash

# Clone repository
$ git clone https://github.com/ShitCoderz/url-shortener.git
$ cd url-shortener

# Install dependencies
$ npm install

# Start Docker containers
$  docker compose up -d

# Run project
$  npm run start:all
# or
$  nx run-many --target=serve --all --parallel=10
```

## Ports
```bash
# Angular Web App
http://localhost:4200/

# NestJS API App Endpoints
http://localhost:3333/api

# Swagger Docs API
http://localhost:3333/api-docs

# MongoDB
http://localhost:27017/

# Mongo Express
http://localhost:8081/
```
