import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-public-profile',
  templateUrl: './public-profile.component.html',
  styleUrls: ['./public-profile.component.scss']
})
export class PublicProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params
      .subscribe( params => console.log(params) );
   }

  ngOnInit() {
  }

}
