import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sw-common',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './sw-common.html',
  styleUrl: './sw-common.css',
})
export class SwCommon {}
