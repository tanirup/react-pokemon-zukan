# Reactポケモン図鑑

## 概要

**Reactポケモン図鑑**は、ReactとTypeScriptを使用して開発されたポケモン図鑑アプリケーションです。本アプリは[PokeAPI](https://pokeapi.co/docs/v2)を利用してポケモンのデータを取得し、ユーザーがポケモンを一覧表示、詳細閲覧ができる機能を提供します。レスポンシブデザインを採用し、モバイルファーストで設計されています。

## 目次

- [Reactポケモン図鑑](#reactポケモン図鑑)
  - [概要](#概要)
  - [目次](#目次)
  - [特徴](#特徴)
  - [技術スタック](#技術スタック)
  - [デモ](#デモ)
  - [インストール方法](#インストール方法)
    - [前提条件](#前提条件)
    - [手順](#手順)
  - [使用方法](#使用方法)
  - [プロジェクト構成](#プロジェクト構成)
  - [開発環境](#開発環境)
  - [貢献方法](#貢献方法)
  - [ライセンス](#ライセンス)
  - [お問い合わせ](#お問い合わせ)

## 特徴

- **ポケモン一覧表示**: ポケモンの図鑑番号、名前、タイプ、特性などの基本情報を一覧で表示。
- **詳細画面**: 選択したポケモンの詳細情報（種族値、説明文など）を閲覧可能。
- **レスポンシブデザイン**: モバイルデバイスからデスクトップまで、様々な画面サイズに対応。
- **パフォーマンス最適化**: Tanstack Queryを使用した効率的なデータフェッチングとキャッシング。

## 技術スタック

- **フロントエンド**:
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Vite](https://vitejs.dev/)
  - [React Router](https://reactrouter.com/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [shadcn/ui](https://ui.shadcn.com/)
  - [Tanstack Query](https://tanstack.com/query/latest)
  - [query-key-factory](https://github.com/lukemorales/query-key-factory)

- **API**:
  - [PokeAPI](https://pokeapi.co/docs/v2)

## デモ

[ポケモン図鑑デモサイト](https://)

<img width="301" alt="スクリーンショット 2024-10-05 1 18 37" src="https://github.com/user-attachments/assets/4325c964-2a5c-439e-8fdf-4352fafc1e1c">
<img width="301" alt="スクリーンショット 2024-10-05 1 19 10" src="https://github.com/user-attachments/assets/e882772f-31a0-41bf-bd31-c8339efe1b88">


## インストール方法

### 前提条件

- **Node.js**: バージョン20以上
- **Git**: バージョン2以上

### 手順

1. **リポジトリのクローン**

   ```bash
   git clone https://github.com/your-username/react-pokemon-zukan.git
   cd react-pokemon-zukan
   ```

2. **依存関係のインストール**

   ```bash
   npm install
   ```

3. **開発サーバーの起動**

   ```bash
   npm run dev
   ```

4. **ブラウザで確認**

   ブラウザで `http://localhost:5173` にアクセスし、アプリケーションが動作していることを確認します。

## 使用方法

1. **ポケモン一覧の閲覧**

   アプリケーションを開くと、ポケモンの一覧が表示されます。各ポケモンカードには図鑑番号、名前、タイプが表示されています。

2. **詳細情報の確認**

   任意のポケモンカードをクリックすると、そのポケモンの詳細情報ページに移動します。詳細ページでは種族値や説明文など、より詳しい情報が確認できます。

3. **検索機能の利用**

   上部の検索バーにポケモンの名前や図鑑番号を入力することで、該当するポケモンを素早く検索できます。

4. **フィルタリング**

   タイプや特性のフィルタリングオプションを使用して、特定の条件に合ったポケモンを絞り込むことができます。

5. **ソート**

   ソートオプションを使用して、図鑑番号や種族値に基づいてポケモンを並べ替えることができます。

## プロジェクト構成

```
react-pokemon-zukan/
├── public/
│   ├── pokemon-zukan.png
│   └── demo-screenshot.png
├── src/
│   ├── api/
│   │   ├── pokemon.ts
│   │   ├── pokemonSpecies.ts
│   │   └── pokemonWithJapaneseName.ts
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── PokemonCard.tsx
│   ├── hooks/
│   │   └── usePokemon.ts
│   ├── pages/
│   │   ├── PokemonList.tsx
│   │   └── PokemonDetail.tsx
│   ├── queryKeys.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 開発環境

- **OS**: macOS
- **ユーザー名**: ktc
- **プロジェクトディレクトリ**: `/Users/ktc/12345678/react-pokemon-zukan`

## 貢献方法

1. **フォークする**

   リポジトリをフォークしてください。

2. **ブランチを作成する**

   ```bash
   git checkout -b feature/新機能
   ```

3. **変更をコミットする**

   ```bash
   git commit -m "新機能の追加"
   ```

4. **プッシュする**

   ```bash
   git push origin feature/新機能
   ```

5. **プルリクエストを作成する**

   GitHub上でプルリクエストを作成してください。

## ライセンス

このプロジェクトはMITライセンスのもとで公開されています。詳細については、[LICENSE](./LICENSE)ファイルをご覧ください。

## お問い合わせ

質問やフィードバックがございましたら、[issues](https://github.com/your-username/react-pokemon-zukan/issues)にてご連絡ください。
