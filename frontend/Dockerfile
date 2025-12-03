# ========================================
# Development Stage
# ========================================
FROM node:20-alpine AS development

# 作業ディレクトリを設定
WORKDIR /app

# package.jsonとpackage-lock.jsonをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# Viteの開発サーバーポートを公開
EXPOSE 5173

# 開発モードで起動 (ホストを0.0.0.0に設定してDockerから外部アクセス可能に)
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]


# ========================================
# Build Stage (本番用)
# ========================================
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# 依存関係をインストール
RUN npm ci

COPY . .

# Reactアプリケーションをビルド
RUN npm run build


# ========================================
# Production Stage
# ========================================
FROM nginx:alpine AS production

# ビルド済みのアプリケーションをNginxの公開ディレクトリにコピー
COPY --from=build /app/dist /usr/share/nginx/html

# Nginxの設定ファイルをコピー (SPAルーティング対応)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# ポート80を公開
EXPOSE 80

# Nginxを起動
CMD ["nginx", "-g", "daemon off;"]
