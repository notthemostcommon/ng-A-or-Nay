import { Component, OnInit } from '@angular/core';
import { MapGeoService } from './map-geo.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  geoData: any;
  query: any;
  title: string = ''; 
  lat: number = 40.730610;
  lng: number = -73.935242;
  // lat: number;
  // lng: number;
  zoom: number = 15; 

  constructor(
    private mapService: MapGeoService
  ) { 
    this.mapService.dataString$
    .subscribe(data => {
      console.log("mapService datastring", data); 
    if(this.query !== data){
      this.query = data; 
      this.getMapData(this.query);
    }  
    })
  }

  

  ngOnInit() {
  }

  getMapData(coords){
    console.log("inside map coords", coords);
    
    this.mapService
    .geoAPIObservable(coords)
    .then(data => {
      this.lat = data.results[0].geometry.location.lat; 
      this.lng = data.results[0].geometry.location.lng; 
      this.geoData = data; 
      console.log("map return data", this.geoData);

      
      
    })
  }

}
