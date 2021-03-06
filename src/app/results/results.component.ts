import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SearchService } from '../search/search.service';
import * as _ from 'underscore'; 

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  results: Array<any>;
  query: any; 
  selected: any; 
  @Output() locationSelected = new EventEmitter<string>(); 

  constructor(
    private searchService: SearchService, 
  ) { 

  this.searchService.dataString$
  .subscribe( data => {
    console.log("results comp", data);
    
      if(this.query !== data){
        this.query = data; 
        this.getSearchData(this.query); 

      }
    })
  }

  ngOnInit() {
  }

  onSelected(result: any){
    this.locationSelected.emit(result); 
  }

  getSearchData(query){
    this.searchService
    .createAPIObservable(query)
    .then(data => {
      this.results = _.uniq( data, false, (location => {
        console.log("uniq data", data);
        
        return location.camis
            }))
            
          })
        }
      }
