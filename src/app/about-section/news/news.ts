import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RootServices } from '../../services/root-services';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.html',
  imports: [CommonModule],
  styleUrl: './news.css',
})
export class News implements OnInit {
  public news: any;
  constructor(private http: HttpClient, public $rootScope: RootServices, public router: Router) { }

  ngOnInit() {
   
    //this.http.get(this.$rootScope.httpLink+'posts').subscribe( data => {
    if (this.$rootScope.webData.length !== 0 && this.$rootScope.webData['news'] !== undefined) {
      this.news = this.$rootScope.webData['news']
    }
    else {
      this.http.get('https://esat.ae/index1.php/wp-json/wp/v2/posts').subscribe(res => {
        this.news = res;
      });
    }
  }

  goToProductDetails(id: number) {
    this.router.navigate(['../news-full/news-full', id]);
  }

}