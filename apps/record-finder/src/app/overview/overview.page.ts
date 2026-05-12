import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule, NgClass } from '@angular/common';
import { Observable } from 'rxjs';
import { Record } from '../state/records/record.model';
import { 
  getRecordList, 
  searchRecords, 
  filterRecords, 
  sortRecords 
} from '../state/records/record.actions';
import { selectFilteredRecords } from '../state/records/record.reducer';
import { HeroBoxComponent } from '../components/hero-box/hero-box.component';

@Component({
  standalone: true,
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
  imports: [AsyncPipe, NgClass, CommonModule, HeroBoxComponent],
})
export class OverviewPageComponent implements OnInit {

  filteredRecords$!: Observable<Record[]>;

  temperamentOptions: string[] = [
    'Iconic',
    'Colourful',
    'Experimental',
    'Memorable',
    'Classic',
    'Polished',
    'Timeless',
    'Reflective',
    'Famous',
    'Simple',
    'Enduring',
    'Sharp',
    'Clean',
    'Confident',
    'Analog',
    'Atmospheric',
    'Progressive',
    'Heavy',
    'Bold',
    'Smooth',
    'Dramatic',
    'Sparse',
    'Conceptual'
  ];
  selectedTemperaments: string[] = [];
  sortDirection: 'asc' | 'desc' = 'asc';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getRecordList());
    this.filteredRecords$ = this.store.select(selectFilteredRecords);
  }


  // Handles the search input
  onSearch(query: string): void {
    this.store.dispatch(searchRecords({ query }));
  }

  // Temprement selection 
  selectTemperament(temp: string): void {
    if (this.selectedTemperaments.includes(temp)) {
      this.selectedTemperaments = this.selectedTemperaments.filter(t => t !== temp);
    } else {
      this.selectedTemperaments = [...this.selectedTemperaments, temp];
    }

    this.store.dispatch(filterRecords({ temperaments: this.selectedTemperaments }));
  }

  trackByName(index: number, record: Record) {
    return record.name;
    
  }

  // Toggles sorting direction
  toggleSort(): void {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.store.dispatch(sortRecords({ direction: this.sortDirection }));
  }
}
