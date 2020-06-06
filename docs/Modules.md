# Modules

## Framework

- `electron` : Desktop App フレームワーク
  - `electron-devtools-installer` : 開発用拡張機能のインストーラー
  - `devtron` : デバッグツール
- `react` : Front-end フレームワーク
  - `react-dom` : React の描画用ライブラリ
  - `redux` : 状態管理ライブラリ
  - `react-redux` : Redux の React バインディング
  - `@reduxjs/toolkit` : Redux のツールキット

## Styling

- `styled-components`

## Linter & Formatter

- `eslint` : JavaScript/TypeScriptリンター
  - `eslint-config-prettier`
  - `eslint-plugin-prettier`
  - `eslint-plugin-react`
  - `@typescript-eslint/eslint-plugin`
  - `@typescript-eslint/parser`
- `prettier` : コードフォーマッター
- `stylelint` : CSSリンター
  - `stylelint-prettier`
  - `stylelint-config-prettier`
  - `stylelint-config-recommended`
  - `stylelint-order`
  - `stylelint-config-recess-order`

## Type Checker

型チェックだけを TypeScritp で行い、トランスパイルは Babel を使う。

- `typescript` : 静的型付き言語 TypeScript
  - `@types/react`
  - `@types/react-dom`
  - `@types/react-redux`
  - `@types/styled-components`
  - `@types/marked`
  - `@types/fs-extra`

## Bandler

- `webpack` : モジュールバンドラー
  - `webpack-cli` : Webpack の CLI
  - `webpack-dev-server` : Webpack 開発サーバー
  - `css-loader` : CSS ローダー
  - `style-loader` : CSS のスタイルローダー
  - ~~`ts-loader` : TypeScript ローダー~~（`babel-loader`を代わりに使う）
  - `babel-loader` : Babel ローダー
  - `write-file-webpack-plugin`
  - `copy-webpack-plugin`

## Buisness Logic

- `codemirror`
  - `react-codemirror2`
- `marked`

## Utility

- `ress`
- `react-icons`
- `fs-react`
