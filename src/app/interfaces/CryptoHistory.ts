export interface CryptoPrice {
  priceUsd: string;
  time: any;
  circulatingSupply: string;
  date: Date;
}

export interface CryptoHistory {
  data: CryptoPrice[];
  timestamp: number;
}
