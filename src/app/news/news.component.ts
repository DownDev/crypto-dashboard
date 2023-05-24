import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable,combineLatest } from 'rxjs';
import { Result } from '../interfaces/NewsData';
import { SearchBarService } from '../searchbar.service';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  news$: Observable<Result[]> | null = null;

  constructor(private apiService: ApiService,private searchBarService: SearchBarService) {}

  ngOnInit(): void {
    console.log('a');

    this.news$ = combineLatest([
      this.apiService.getNewsData(),
      this.searchBarService.term$,
    ]).pipe(
      map(([data, term]) => {
        return data.filter((item) => {
          const titleMatch = item.title
            .toLowerCase()
            .includes(term.toLowerCase());
          const contentMatch = item.content
            .toLowerCase()
            .includes(term.toLowerCase());

          return titleMatch || contentMatch;
        });
      })
    );
  }


  toggleExpansion(news: Result) {
    news.expanded = !news.expanded;
  }
}
