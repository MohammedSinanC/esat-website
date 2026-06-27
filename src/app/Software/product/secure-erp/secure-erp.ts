import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import 'aos/dist/aos.css';

@Component({
  selector: 'app-secure-erp',
  standalone: true,
  templateUrl: './secure-erp.html',
  styleUrls: ['./secure-erp.css']
})
export class SecureErp  {



  videoUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}



  setVideo(url: string): void {

    const autoplayUrl =
      `${url}?autoplay=1&mute=1&rel=0&enablejsapi=1`;

    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(autoplayUrl);
  }

  clearVideo(): void {
    this.videoUrl = null;
  }
}