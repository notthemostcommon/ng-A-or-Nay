import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 


@Injectable()
export class SearchService {

  sharingData = {name: " "}; 
  private dataStringSource = new BehaviorSubject<string>('0'); 

  dataString$ = this.dataStringSource.asObservable(); 

  constructor(
    private http: Http
  ) { }
 
  createAPIObservable(results){
    console.log("service results passed in", results);
    
    return this.http.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=' + results)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError); 
  }

  public saveData(value) {
    console.log("save data ", value + this.sharingData.name);
    this.sharingData.name = value; 
    this.dataStringSource.next(this.sharingData.name); 
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
