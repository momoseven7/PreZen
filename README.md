# PreZen - タスク管理システム

チームのタスク管理を効率化するために開発された Web アプリケーションです。

## 主な機能

- **タスク管理**: タスクの作成、編集、ステータス管理
- **プロジェクト管理**: 複数プロジェクトの並行管理
- **チーム協働**: メンバー間でのタスク割り当てとコミュニケーション
- **進捗分析**: データ分析による生産性の可視化
- **カスタマイズ可能**: チームのワークフローに合わせた柔軟な設定

## 技術スタック

### フロントエンド

- **React** - モダンな UI フレームワーク
- **TypeScript**

### バックエンド

- **Node.js + Express**
- **TypeScript**

### データベース

- **MySQL**

### 分析エンジン

- **Python + FastAPI**

### インフラ

- **Docker**
- **Docker Compose**

## プロジェクト構成

```
PreZen/
├── frontend/          # Reactフロントエンド
├── backend/           # Node.js + Express API
├── analytics/         # Python分析サービス
├── database/          # データベーススキーマとマイグレーション
└── docker-compose.yml # Docker構成
```

## セットアップ

### 前提条件

- Docker & Docker Compose
- Node.js 18+
- Python 3.11+

### インストール手順

```bash
# リポジトリをクローン
git clone https://github.com/momoseven7/PreZen.git
cd PreZen

# Dockerコンテナを起動
docker-compose up -d

# フロントエンドにアクセス
# http://localhost:3000
```

## 学習目的

このプロジェクトは以下の技術習得を目的としています：

- React を使ったモダンなフロントエンド開発
- TypeScript による型安全な開発
- マイクロサービスアーキテクチャの設計
- Docker を使ったコンテナ化
- チーム開発のベストプラクティス
