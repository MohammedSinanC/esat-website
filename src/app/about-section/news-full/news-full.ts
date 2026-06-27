import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RootServices } from '../../services/root-services';


@Component({
  selector: 'app-news-full',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-full.html',
  styleUrl: './news-full.css',
})
export class NewsFull implements OnInit {

  news: any = null;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public rootService: RootServices
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.http
        .get<any>(`${this.rootService.apiUrl}/wp-json/wp/v2/posts/${id}`)
        .subscribe({
          next: (response) => {
            this.news = response;
          },
          error: (error) => {
            console.error(error);
          },
        });
    }
  }
}