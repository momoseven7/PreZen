# ========================================
# Development Stage
# ========================================
FROM node:22-alpine AS development

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# 開発モードで起動
CMD ["npm", "run", "start:dev"]


# ========================================
# Build Stage (本番用)
# ========================================
FROM node:22-alpine AS build

WORKDIR /app

COPY package*.json ./

# 本番用の依存関係のみインストール
RUN npm ci --only=production

COPY . .

# TypeScriptをビルド
RUN npm run build


# ========================================
# Production Stage
# ========================================
FROM node:22-alpine AS production

WORKDIR /app

# 本番用の依存関係をコピー
COPY --from=build /app/node_modules ./node_modules

# ビルド済みのアプリケーションをコピー
COPY --from=build /app/dist ./dist

# package.jsonをコピー
COPY package*.json ./

# ポート3000を公開
EXPOSE 3000

# 本番モードで起動
CMD ["node", "dist/main"]
