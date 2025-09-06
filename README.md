# 自己理解コーチ

DifyとAirtableを連携したAIチャットアプリケーション

## 概要

このアプリケーションは、ユーザーの自己理解を深めるためのAIコーチングチャットシステムです。DifyのAIワークフローを活用して、ユーザーの「Want to（本当にやりたいこと）」を特定し、Airtableに保存・管理します。

## 主な機能

- **AIチャット**: Dify APIを使用した自己理解コーチングセッション
- **ユーザー認証**: シンプルなログイン機能
- **Want to管理**: ユーザーごとのWant toをAirtableに保存・更新
- **チャット履歴**: 過去のセッションを確認可能
- **レスポンシブデザイン**: モバイル・タブレット・PC対応

## 技術スタック

- **フロントエンド**: HTML, CSS (Tailwind CSS), JavaScript
- **AI**: Dify API
- **データベース**: Airtable
- **デプロイ**: Netlify
- **バージョン管理**: GitHub

## セットアップ手順

### 1. Airtableの設定

1. [Airtable](https://airtable.com)でアカウントを作成
2. 新しいベース「自己理解コーチDB」を作成
3. 以下のテーブルを作成：

#### Usersテーブル
- `user_id` (Single line text) - Primary field
- `password` (Single line text)
- `created_at` (Created time)
- `last_login` (Last modified time)

#### WantToテーブル
- `id` (Autonumber) - Primary field
- `user_id` (Single line text)
- `want_to_content` (Long text)
- `session_id` (Single line text)
- `confidence_level` (Number - 0-10の範囲)
- `created_at` (Created time)
- `updated_at` (Last modified time)

4. [Personal Access Token](https://airtable.com/create/tokens)を作成
5. Base IDを[API documentation](https://airtable.com/api)から取得

### 2. Difyの設定

1. [Dify](https://dify.ai)でアカウントを作成
2. 提供されたワークフロー設定をインポート
3. APIキーを取得
4. App IDを確認

### 3. アプリケーションの設定

`chat.html`ファイル内の以下の設定を更新：

```javascript
const AIRTABLE_CONFIG = {
    apiKey: 'YOUR_AIRTABLE_API_TOKEN', // Airtable APIトークン
    baseId: 'YOUR_BASE_ID', // Airtable Base ID
    usersTable: 'Users',
    wantToTable: 'WantTo'
};

const DIFY_CONFIG = {
    apiKey: 'YOUR_DIFY_API_KEY', // Dify APIキー
    baseUrl: 'https://api.dify.ai/v1',
    appId: 'YOUR_DIFY_APP_ID' // Dify App ID
};

// 開発モード設定
const USE_SIMULATION = false; // 本番環境ではfalseに設定
```

### 4. デプロイ

#### Netlifyでのデプロイ

1. [Netlify](https://netlify.com)でアカウント作成
2. GitHubリポジトリと連携
3. 自動デプロイを設定

## ファイル構成

```
├── README.md           # このファイル
├── chat.html          # メインのチャットアプリケーション
└── index.html         # ランディングページ（おみくじサービス）
```

## 使用方法

1. アプリケーションにアクセス
2. ユーザーIDとパスワードでログイン（初回は自動でアカウント作成）
3. AIコーチとのチャットを開始
4. 自己理解セッションを進める
5. 特定されたWant toが自動的に保存される

## 開発モード

開発・テスト時は`USE_SIMULATION = true`に設定することで、実際のDify APIを呼び出さずにシミュレーションモードで動作させることができます。

## ライセンス

MIT License

## 作成者

- プロジェクト作成: 2024年
- AI支援: Claude (Anthropic)