import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

 information= null;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    let id=this.route.snapshot.paramMap.get('id')

    console.log(id)

    this.movieService.getDetails(id).subscribe(result =>{
 console.log('details'+ result);

    // tslint:disable-next-line: align
    this.information = result;


   });
  }

  openWebsite(){

    window.open(this.information.Website, ' _blank');
      }



}
