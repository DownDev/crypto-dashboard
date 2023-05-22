import { SearchBarService } from './../searchbar.service';
import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from '../api.service';
import { CryptoDetails } from '../interfaces/CryptoAssets';

@Component({
  selector: 'app-cryptotable',
  templateUrl: './cryptotable.component.html',
  styleUrls: ['./cryptotable.component.css'],
})
export class CryptotableComponent {
  data$: Observable<CryptoDetails[]> | null = null;
  config = {
    currentPage: 1,
    itemsPerPage: 10,
  };
  constructor(
    private apiService: ApiService,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    console.log('a');

    this.data$ = combineLatest([
      this.apiService.getTableData(),
      this.searchBarService.term$,
    ]).pipe(
      map(([data, term]) => {
        return data.filter((item) => {
          const nameMatch = item.name
            .toLowerCase()
            .includes(term.toLowerCase());
          const symbolMatch = item.symbol
            .toLowerCase()
            .includes(term.toLowerCase());

          return nameMatch || symbolMatch;
        });
      })
    );
  }

  onPageChange(event: number) {
    this.config.currentPage = event;
  }
}
