import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { Article } from '../article';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

  private post: Article;
  private id: number;

  constructor(private route: ActivatedRoute, private routing: RoutingService) {
    route.params.subscribe(params=>this.id=params['id']);
    route.queryParams.subscribe(
      (queryParam: any) => {
        this.post = queryParam;
      }
    )
  }

  ngOnInit() {
  }
}
