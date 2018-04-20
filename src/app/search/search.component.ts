import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject'; 
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from './search.service';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'], 
})
export class SearchComponent implements OnInit {

  results: any; //add the public property here
  searchSubject = new Subject(); 

  constructor(
      private searchService: SearchService, private router: Router
  ) { }

  getSearchResults($event){
    console.log("get search results", $event);
    
      this.searchSubject.next($event); 
      
    }

    ngOnInit() {
      this.searchSubject
      .debounceTime(1000) 
      .distinctUntilChanged()
      .subscribe(results => {
        console.log("searchSubject", results);
        
        this.searchService.saveData(results)
        this.router.navigate(['results']); 
        // .subscribe(response => {
          
        // console.log("this is api results", this.results);
        // this.results = response.json()});
        
      })
    }

}
