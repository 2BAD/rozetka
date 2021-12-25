# Rozetka API Client

Node.js client for unpublished Rozetka API

[![NPM Version](https://img.shields.io/npm/v/@2bad/rozetka)](https://www.npmjs.com/package/@2bad/rozetka)
[![GitHub Build Status](https://github.com/2bad/rozetka/workflows/build/badge.svg)](https://github.com/2BAD/rozetka/actions)
[![Code coverage](https://img.shields.io/codecov/c/github/2BAD/rozetka)](https://codecov.io/gh/2BAD/rozetka)
[![License](https://img.shields.io/npm/l/@2bad/rozetka)](https://www.npmjs.com/package/@2bad/rozetka)
[![Written in TypeScript](https://img.shields.io/github/languages/top/2BAD/rozetka)](https://github.com/2BAD/rozetka/search?l=typescript)

## Features

- 🔥 No bullshit
- ✨ Expressive API
- 💪 Strongly typed methods and requests results with TypeScript
- 🚀 Handles records batching and rate limiting for you
- ❤️ Promise-based

## Getting Started

```console
npm install @2bad/rozetka
```

## Usage

```typescript
import { product } from '@2bad/rozetka'

// Get product details
const data = await product.details(6802844)

// Get product description
const data = await product.description(6802844)

// Get current prices for multiple products
const data = await product.price([6802844, 9906369])
```

### Tests

Running tests requires `--experimental-vm-modules` flag
example: `NODE_OPTIONS=--experimental-vm-modules npm run test`

### Note

Sometimes catalog categories may have wrong `category_id` and `top_category_id` (e.g. 80025), first is mitigated by extracting correct `category_id` from the link, second one should not be relied upon and replaced with warning message `NOT_RELIABLE_SEE_README`.

## License

This project is licensed under the [MIT License](https://github.com/2BAD/rozetka/blob/main/LICENSE)

## Get Help

Open an [issue on GitHub](https://github.com/2bad/rozetka/issues/new)
