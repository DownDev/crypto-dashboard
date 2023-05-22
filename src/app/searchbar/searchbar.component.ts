import { Component } from '@angular/core';
import { SearchBarService } from '../searchbar.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent {
  searchTerm = '';

  constructor(private searchBarService: SearchBarService) {}

  search() {
    this.searchBarService.setSearchTerm(this.searchTerm);
  }
}
