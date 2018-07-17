import { Component, OnInit } from '@angular/core';
import { ApiService } from "../api.service";
import { Article } from "../article";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  allNews: Article[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllNews().subscribe(allNews => {
      this.allNews = allNews;
      console.log('this.allNews: ', this.allNews);
    });
  }

}
