import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { RootServices } from '../../../../../services/root-services';

@Component({
  selector: 'app-fixed-asset',
  standalone: true,
   imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './fixed-asset.html',
  styleUrl: './fixed-asset.css',
})
export class FixedAsset implements OnInit, AfterViewInit {

  public module: any;
  public next: any;
  public dataValue: any;
  public featureandbenifit = true;
  public component = true;
  public var = 0;
  public _albums: any[] = [];
  private _lightbox: any;

  constructor(
    private http: HttpClient,
    public $rootScope: RootServices,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

    this.module = this.$rootScope.allmoduleList[this.var];
    this.next = this.$rootScope.allmoduleList[this.var + 1];

    if (
      this.$rootScope.webData.length !== 0 &&
      this.$rootScope.webData[this.module.pagelink] !== undefined
    ) {
      this.dataValue = this.$rootScope.webData[this.module.pagelink];
    } else {
      this.http
        .get(this.$rootScope.httpLink + this.module.pagelink)
        .subscribe(data => {
          this.dataValue = data;
        });
    }

    this._albums.push({
      src: `assets/images/dashboard/ERP Asset.png?v=${this.$rootScope.version}`,
      caption: 'Asset depreciation - Department wise',
      thumb: 'assets/images/dashboard/ERP Asset.png'
    });
  }

  async ngAfterViewInit(): Promise<void> {

    if (isPlatformBrowser(this.platformId)) {

      const AOS = (await import('aos')).default;

      AOS.init({
        duration: 800,
        once: true,
        offset: 100
      });

    }
  }

  openLightbox(index: number): void {
    this._lightbox?.open(this._albums, index);
  }

}