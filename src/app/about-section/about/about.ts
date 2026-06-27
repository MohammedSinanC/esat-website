import { Component } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterOutlet,RouterLink],
   standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {


  constructor(private router: Router) {
   
  }
}