# Stellar DeFi

A modular React + TypeScript dashboard for Stellar network intelligence and XLM market monitoring.

## Stack
- React 18 + strict TypeScript
- Vite development server and production bundler
- Recharts and Lucide React
- Stellar Horizon public API and CoinGecko market API

## Features
- XLM price, daily change, market capitalization, volume, and price history
- 24-hour, 7-day, and 30-day chart ranges
- XLM, BTC, and ETH market watch
- Latest Stellar ledger and transactions
- Public account lookup and asset balances
- Responsive dark terminal interface, loading and error states

## Run locally
Requires Node.js 20 or newer.

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Structure
```
src/
  components/MetricCard.tsx
  components/PriceChart.tsx
  services/market.ts
  services/stellar.ts
  App.tsx
  main.tsx
  styles.css
  types.ts
```

## Data sources
- https://horizon.stellar.org
- https://api.coingecko.com/api/v3
- https://stellar.expert/explorer/public
- https://developers.stellar.org/

Public APIs may rate-limit or experience downtime; unavailable data is not fabricated.

## Security
This is an independent informational dashboard, not an official Stellar product, financial adviser, wallet, or audited DeFi protocol. Account lookup reads public account data only. Never enter secret keys or recovery phrases. No private keys are requested or stored. Swaps, lending, custody, and transaction signing are not implemented; these require separate reviewed integrations and security testing before real funds are involved.