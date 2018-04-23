import { Component, OnInit } from '@angular/core';
import { Review } from './review.model';
import { Location } from '@angular/common'; 
import { LocationServiceService } from '../location/location-service.service';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReviewService } from '../review.service';


@Component({
  selector: 'app-review-add',
  templateUrl: './review-add.component.html',
  styleUrls: ['./review-add.component.css']
})
export class ReviewAddComponent implements OnInit {
  selected = 0;
  hovered = 0;
  readonly = false;
  score : number = 0;
  displayRatingScore = 4;
  review: string; 
  submitted: boolean = false; 
  searchSubject = new Subject(); 
  locationInfo: any; 
  private id; 
  private sub; 
  reviewForm: FormGroup; 
  statusCode: string; 
  camis: string; 
  dba: string; 
  bldg: string; 
  street: string; 
  boro: string; 
  zip: string; 
  grade: string; 
  category: string; 
  disabled: boolean = true; 
  user_id: number = 1; 

  constructor(
    private location: Location, 
    private locationService: LocationServiceService, 
    private route: ActivatedRoute, 
    private _fb: FormBuilder, 
    private reviewService: ReviewService
  ) {
    this.locationService.dataString$
      .subscribe( data => {
        console.log("locationService data", data, "1");
        this.getSearchData(data); 
    })
    this.reviewForm = this._fb.group({
      camis: this.camis, 
      dba: this.dba, 
      bldg: this.bldg, 
      street: this.street, 
      boro: this.boro, 
      zip: this.zip, 
      review: this.review, 
      rating: this.score, 
      grade: this.grade, 
      category: this.category, 
    })
   } 

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.locationService.saveData(this.id); 
      
    })
  }

  getSearchData(query){   
     
    this.locationService
    .getLocationData(query)
    .then(data => {      
      this.locationInfo = data; 
      this.camis = data[0].camis; 
      this.dba = data[0].dba; 
      this.bldg = data[0].building; 
      this.street = data[0].street; 
      this.boro = data[0].boro; 
      this.zip = data[0].zipcode; 
      this.grade = data[0].grade; 
      this.category = data[0].cuisine_description; 
      console.log("location info" , data);
      })
    }

    private ngOnDestroy(){
      console.log("ngOnDestroy");
      this.sub.unsubscribe(); 
    }

  onRateChange = (score) => {
    this.score = score;
    console.log("score", this.score);
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }

  onSubmit(value) {
    console.log("onsubmit value", value);
	  this.submitted = true;   
    this.reviewService.createReview(value)
      .subscribe(successCode => {
          this.statusCode = successCode;
          console.log(this.statusCode);
          this.cancel(); 
          
        },
        errorCode => this.statusCode = errorCode

        )
	  }
   


}
