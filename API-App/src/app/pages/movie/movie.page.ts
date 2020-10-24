import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieService, SearchType } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
results: Observable<any>
searchTerm = '';
type: SearchType = SearchType.all;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  searchChange(){

   
    this.results = this.movieService.searchData(this.searchTerm, this.type);
     // console.log(searchTerm)
   
  }

}
