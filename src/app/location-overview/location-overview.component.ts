import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-location-overview',
  templateUrl: './location-overview.component.html',
  styleUrls: ['./location-overview.component.css']
})
export class LocationOverviewComponent implements OnInit {
  @Input() currentChoice: any; 

  constructor() { }

  ngOnInit() {
    
  }


}
