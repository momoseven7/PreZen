import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

// ミドルウェア設定
app.use(express.json());

// ヘルスチェックAPI
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', message: 'Backend is running!' });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
});
