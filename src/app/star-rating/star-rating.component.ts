import { NgModule, Component, EventEmitter, OnInit, Input, Output  } from '@angular/core';

// code from:  https://codepen.io/sreekanth2108/pen/NvWowV
@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {
  @Input() score;
	@Input() maxScore = 5;
	@Input() forDisplay = false;
	@Output() rateChanged = new EventEmitter();
  
  range = [];
  marked = -1;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i < this.maxScore; i++) {
      this.range.push(i);
    }
  }

  public mark = (index) => {
    this.marked = this.marked == index ? index - 1 : index;
    this.score = this.marked + 1;
    this.rateChanged.next(this.score);
  }

  public isMarked = (index) => {
    if (!this.forDisplay) {
      if (index <= this.marked) {
        return 'fa-star';
      }
      else {
        return 'fa-star-o';
      }
    }
    else {
      if (this.score >= index + 1) {
        return 'fa-star';
      }
      else if (this.score > index && this.score < index + 1) {
        return 'fa-star-half-o';
      }
      else {
        return 'fa-star-o';
      }
    }
  }

}

// App component shows the usage of star rating component
// @Component({
//   selector: 'my-app',
//   providers: [],
//   directives: [StarRatingComponent],
//   template: `

// <div class="container">
//   <h4>STAR RATING</h4>
//   <div class="section">
//     <div class="block">
//       <div>To Rate</div>
//       <star-rating [maxScore]="5" [forDisplay]="false" (rateChanged)="onRateChange($event)"></star-rating>
//       <div>Rating: {{score}}</div>
//     </div>
    
  
//   <div class="options">
//     <h4>Options</h4>
//     <ul>
//       <li>[score]: number :  rating value</li>
//       <li>[maxScore]: number :  Max rating scale : default to 5</li>
//       <li>[forDisplay]: boolean : to rate or to display rating</li>
//       <li>(rateChanged): event :  to capture changed value</li>
//     </ul>
//   </div>
// </div>
//   `,
// })
// class AppComponent {
//   score : number = 0;
//   displayRatingScore = 4;
//   constructor() { }

// 	ngOnInit(){
// 	}
  
  // onRateChange = (score) => {
  //   this.score = score;
  // }
// }

// bootstrap(AppComponent);




