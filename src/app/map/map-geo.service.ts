import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'; 
import { Subject } from 'rxjs/Subject';


@Injectable()
export class MapGeoService {

  sharingData = {name: " "}; 


  private dataStringSource = new Subject<string>(); 

  dataString$ = this.dataStringSource.asObservable(); 

  constructor(
    private http: Http
  ) { }
 
  geoAPIObservable(results){
    console.log("service results passed in", `${results.building} ${results.street}, New York, NY`);
    
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+`${results.building} ${results.street}, New York, NY`+"&key=AIzaSyDJtlO1r8TrvZFcOXgnjb35DSQ0cS_Ljkw")
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
