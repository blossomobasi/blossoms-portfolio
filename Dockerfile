FROM node:22.20-alpine AS builder

WORKDIR /app

# Set npm configuration for better network handling
RUN npm config set fetch-retry-maxtimeout 6000000
RUN npm config set fetch-retry-mintimeout 100000
RUN npm config set fetch-timeout 6000000

COPY package*.json ./

# Use a cache mount to speed up npm installs
RUN --mount=type=cache,target=/root/.npm \
    npm install

COPY . .

# Set environment variable to handle font fetching timeouts
ENV NEXT_FONT_GOOGLE_TIMEOUT=3000000

RUN npm run build

FROM node:22.20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/next-env.d.ts /app/next-env.d.ts
COPY --from=builder /app/next.config.mjs /app/next.config.mjs
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY --from=builder /app/public /app/public
COPY --from=builder /app/tailwind.config.ts /app/tailwind.config.ts

RUN npm ci --omit=dev

EXPOSE 3000

CMD [ "npm", "run", "start" ]