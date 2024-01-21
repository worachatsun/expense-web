
FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm i -g pnpm
RUN pnpm install
COPY . .

EXPOSE 5173

# Start dev server
CMD ["pnpm", "run", "dev"]
