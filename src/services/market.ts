import type { MarketCoin, PricePoint } from "../types";
const API="https://api.coingecko.com/api/v3";
async function getJson<T>(url:string):Promise<T>{const r=await fetch(url,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Market API returned ${r.status}`);return r.json() as Promise<T>}
export function getMarket(){return getJson<MarketCoin[]>(`${API}/coins/markets?vs_currency=usd&ids=stellar,bitcoin,ethereum&price_change_percentage=24h`)}
export async function getPriceHistory(days:number):Promise<PricePoint[]>{const r=await getJson<{prices:[number,number][]}>(`${API}/coins/stellar/market_chart?vs_currency=usd&days=${days}`);return r.prices.map(([timestamp,price])=>({timestamp,price}))}