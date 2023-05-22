export interface CryptoDetails {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
}

export interface CryptoAssets {
  data: CryptoDetails[];
  timestamp: number;
}

export interface CryptoAsset {
  data: CryptoDetails;
  timestamp: number;
}
