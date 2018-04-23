import { Component, OnInit, Input, Output } from '@angular/core';
import { Review } from '../review-add/review.model';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-reviews-by-location',
  templateUrl: './reviews-by-location.component.html',
  styleUrls: ['./reviews-by-location.component.css'], 
})
export class ReviewsByLocationComponent implements OnInit {

  reviews: any;
  @Input() locationInfo: any; 
  @Output() averageRating: number; 

  constructor(private reviewService: ReviewService) { }

  ngOnInit() {    
    this.getLocationReviews(); 
  }

  getLocationReviews(){    
    this.reviewService.getReviewByLocationId(this.locationInfo[0].camis)
    .subscribe(
      data => this.reviews = data, 
    )
  }

}
