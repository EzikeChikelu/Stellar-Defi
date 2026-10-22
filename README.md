# Stellar DeFi

A responsive, live-data dashboard for exploring the Stellar network and XLM markets.

## Features

- Live XLM price, 24-hour change, trading volume, and market capitalization.
- Interactive XLM historical price chart with 1-day, 7-day, and 30-day ranges.
- Market watch for Stellar (XLM), Bitcoin (BTC), and Ethereum (ETH).
- Latest ledger and recent transaction activity from the public Stellar Horizon API.
- Public Stellar account lookup, including sequence number and asset balances.
- Links to Stellar's official developer documentation and Stellar Expert explorer.
- Responsive layout for desktop and mobile.
- No private keys, wallet secrets, or seed phrases are requested or stored.

## Run locally

This is a static website; no build step is required.

1. Clone the repository.
2. Open `index.html` in your browser, or serve the folder with a local static server.
3. For example, if Python is installed, run `python -m http.server 8000` and open `http://localhost:8000`.

## Deploy with GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/(root)` folder, then save.
4. Wait for GitHub Pages to publish the site.

## Data sources

- Stellar Horizon public mainnet API: https://horizon.stellar.org
- CoinGecko public market API: https://api.coingecko.com/api/v3
- Stellar Expert explorer: https://stellar.expert/explorer/public
- Stellar developer docs: https://developers.stellar.org/

External API availability, rate limits, and browser/network conditions may affect live data. The dashboard shows unavailable states instead of inventing data.

## Important

This is an informational dashboard, not a financial adviser or an audited DeFi protocol. Account lookup uses public account IDs only. Never enter a Stellar secret key or recovery phrase into this site. Market values are informational and may be delayed.
