import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
export enum SearchType{

  all= '',
  movie= 'movie',

  series= 'series',
  episode= 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
url = 'http://www.omdbapi.com/';

apiKey = '645604c8';//645604c8
  constructor(private http: HttpClient) { }
// http://www.omdbapi.com/?i=tt3896198&apikey=645604c8

// movie.service.ts:26 http://www.omdbapi.com/?s=&type=&apiKey=645604c8
  searchData(title: string,type: SearchType):Observable<any>{
   console.log(title+":"+type);
   
  //   console.log(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`)

   return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apiKey=${this.apiKey}`).pipe(
   map(result => {

  console.log('RAW:', result['jj']);

  return result['Search'];
}));


  }

getDetails(id){



  return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);

};

}
