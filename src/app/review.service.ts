import { Injectable } from '@angular/core';
import { Review } from './review-add/review.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from "@angular/common/http";


@Injectable()
export class ReviewService {
  reviewUrl = "http://localhost:8080/reviews"; 

  constructor(
    private http: HttpClient
  ) { }

  getAllReviews(): Observable<Review[]> {
      return this.http.get(this.reviewUrl)
        .map(res=> <Review[]> res)
        .catch((err) => this.handleError(err));

    }
    //Create article
    createReview(review: Review):Observable<string> {
      // const headers = new HttpHeaders ();  
        return this.http.post(this.reviewUrl, review, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Access': '*'}
        })
               .map(success => success)
               .catch(this.handleError);
    }
    //Fetch article by id
    getReviewById(reviewId: string): Observable<Review> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	// let options = new RequestOptions({ headers: cpHeaders });
	console.log(this.reviewUrl +"/"+ reviewId);
	    return this.http.get(this.reviewUrl +"/"+ reviewId)
        .map(res=> <Review[]> res)
        .catch(this.handleError);
    }	
    //Update article
    updateReview(review: Review):Observable<string> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.reviewUrl +"/"+ review.id, review)
               .map(success => success)
               .catch(this.handleError);
    }
    //Delete article	
    deleteArticleById(reviewId: string): Observable<string> {
	let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
	// let options = new RequestOptions({ headers: cpHeaders });
	return this.http.delete(this.reviewUrl +"/"+ reviewId)
	       .map(success => success)
               .catch(this.handleError);
    }	
    // private extractData(res: Response) { 
	  //     let body = res.json();
    //     return body;
    // }
    
    private handleError (error: Response | any) {
	console.error(error.message || error);
	return Observable.throw(error.status);
    }
} 