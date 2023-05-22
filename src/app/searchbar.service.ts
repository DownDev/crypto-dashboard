import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchBarService {
  private searchTerm = new BehaviorSubject<string>('');
  term$ = this.searchTerm.asObservable();

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
  constructor() {}
}
