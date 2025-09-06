// 設定例ファイル
// このファイルをconfig.jsにコピーして、実際の値を設定してください

const AIRTABLE_CONFIG = {
    apiKey: 'pat1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Airtable Personal Access Token
    baseId: 'appXXXXXXXXXXXXXX', // Airtable Base ID
    usersTable: 'Users',
    wantToTable: 'WantTo'
};

const DIFY_CONFIG = {
    apiKey: 'app-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx', // Dify API Key
    baseUrl: 'https://api.dify.ai/v1',
    appId: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' // Dify App ID
};

// 開発モード設定
const USE_SIMULATION = true; // 本番環境ではfalseに設定