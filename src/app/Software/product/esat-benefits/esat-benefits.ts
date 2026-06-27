import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RootServices } from '../../../services/root-services';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-esat-benefits',
  imports: [CommonModule],
  templateUrl: './esat-benefits.html',
  styleUrl: './esat-benefits.css',
})
export class EsatBenefits {

  public dataValue: any;
  public showExtra: boolean = false;

  constructor(
    private http: HttpClient,
   
    public $rootScope: RootServices
  ) {}

  ngOnInit() {
   

    if (this.$rootScope.webData.length !== 0 && this.$rootScope.webData['267'] !== undefined) {
      this.dataValue = this.$rootScope.webData['267'];
    } else {
      this.http.get(this.$rootScope.httpLink + '267').subscribe(data => {
        this.dataValue = data;
      });
    }
  }

  slideConfig = {
    initialSlide: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    draggable: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000
  };
}