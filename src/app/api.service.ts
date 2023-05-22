import { CryptoHistory, CryptoPrice } from './interfaces/CryptoHistory';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  CryptoAsset,
  CryptoAssets,
  CryptoDetails,
} from './interfaces/CryptoAssets';
import { News, Result } from './interfaces/NewsData';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTableData(limit: number = 50): Observable<CryptoDetails[]> {
    return this.http
      .get<CryptoAssets>(`https://api.coincap.io/v2/assets?limit=${limit}`)
      .pipe(map((response) => response.data));
  }

  getHistoryData(id: string): Observable<CryptoPrice[]> {
    return this.http
      .get<CryptoHistory>(
        `https://api.coincap.io/v2/assets/${id}/history?interval=d1`
      )
      .pipe(map((response) => response.data));
  }

  getAssetById(id: string): Observable<CryptoDetails> {
    return this.http
      .get<CryptoAsset>(`https://api.coincap.io/v2/assets/${id}`)
      .pipe(map((response) => response.data));
  }

  getNewsData(): Observable<Result[]> {
    return this.http
      .get<News>(
        'https://newsdata.io/api/1/news?apikey=pub_183905a322fff00caadd3e6acebb7cec2c803&language=pl,en&q=bitcoin'
      )
      .pipe(map((response) => response.results));
  }
}
