export interface MarketCoin { id:string; name:string; symbol:string; image:string; current_price:number; price_change_percentage_24h:number|null; market_cap:number; total_volume:number; high_24h:number; low_24h:number }
export interface PricePoint { timestamp:number; price:number }
export interface StellarLedger { sequence:number; closed_at:string }
export interface StellarTransaction { hash:string; ledger:number; operation_count:number; fee_charged:string; successful:boolean; created_at:string }
export interface StellarBalance { balance:string; asset_type:string; asset_code?:string; asset_issuer?:string }
export interface StellarAccount { account_id:string; sequence:string; subentry_count:number; balances:StellarBalance[] }