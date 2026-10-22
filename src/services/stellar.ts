import type { StellarAccount,StellarLedger,StellarTransaction } from "../types";
const API="https://horizon.stellar.org";
async function getJson<T>(url:string):Promise<T>{const r=await fetch(url,{headers:{Accept:"application/json"}});if(!r.ok)throw new Error(`Horizon returned ${r.status}`);return r.json() as Promise<T>}
interface Embedded<T>{_embedded:{records:T[]}}
export async function getLatestLedger(){const r=await getJson<Embedded<StellarLedger>>(`${API}/ledgers?order=desc&limit=1`);return r._embedded.records[0]??null}
export async function getRecentTransactions(){const r=await getJson<Embedded<StellarTransaction>>(`${API}/transactions?order=desc&limit=8`);return r._embedded.records}
export function getAccount(key:string){return getJson<StellarAccount>(`${API}/accounts/${encodeURIComponent(key)}`)}
export function isValidPublicKey(key:string){return /^G[A-Z2-7]{55}$/.test(key)}