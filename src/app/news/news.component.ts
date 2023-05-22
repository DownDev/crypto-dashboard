import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/NewsData';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent {
  news$: Observable<Result[]> | null = null;
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.news$ = this.apiService.getNewsData();
  }
}
