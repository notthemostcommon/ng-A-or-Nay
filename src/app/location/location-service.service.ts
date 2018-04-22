import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocationServiceService {
  sharingData: string; 
  private dataStringSource = new Subject<string>(); 

  dataString$ = this.dataStringSource.asObservable(); 

  constructor(
    private http: Http
  ) { }
 
  getLocationData(results){
    console.log("location service results passed in", results);
    
    return this.http.get('https://data.cityofnewyork.us/resource/9w7m-hzhe.json?$q=' + results)
    .toPromise()
    .then(response => response.json())
    .catch(this.handleError); 
  }

  public saveData(value) {
    console.log("save data", value);
    
    this.sharingData = value; 
    this.dataStringSource.next(this.sharingData)
  }

  

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
