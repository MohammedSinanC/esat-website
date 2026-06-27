import { Component } from '@angular/core';
import { RootServices } from '../../services/root-services';

@Component({
  selector: 'app-software-main',
  imports: [],
  templateUrl: './software-main.html',
  styleUrl: './software-main.css',
})
export class SoftwareMain { //image
  offset = 100;
  hwMainImage = 'assets/images/swhome.jpg';
  hwMainImage_low = 'assets/images/swhome_low.jpg'
  //image

  public queone: boolean = false;
  public quetwo: boolean = false;
  public quethree: boolean = false;

   public quefour: boolean = false;
  public quefive: boolean = false;
  public quesix: boolean = false;
   public quesaven: boolean = false;
  public slides: any = [];
modalDescription: any;
modalTitle: any;
  constructor( public $rootScope: RootServices) { }

  ngOnInit() {
   
    this.slides = [
      {
        "name": "Developing<br/><span>ERP Solutions</span>",
        "thumblink": "erp-solutions-serviceslider-1.jpg",
        "thumblink_low": "erp-solutions-serviceslider-1_low.jpg",
        "link": "swproduct"
      },
      {
        "name": "Application<br/><span>Development</span>",
        "thumblink": "gustas-brazaitis-541809-unsplash.jpg",
        "thumblink_low": "gustas-brazaitis-541809-unsplash_low.jpg",
        "link": "swservice/ser1"
      },
      {
        "name": "Software<br/><span>Development</span>",
        "thumblink": "charles-deluvio-456501-unsplash.jpg",
        "thumblink_low": "charles-deluvio-456501-unsplash_low.jpg",
        "link": "swservice/ser1"
      },
      {
        "name": "Software<br/><span>Consulting</span>",
        "thumblink": "Chart-Kopie-2-e1464803919955.jpg",
        "thumblink_low": "Chart-Kopie-2-e1464803919955_low.jpg",
        "link": "swservice/ser2"
      },
      {
        "name": "Software Support<br/><span>and Maintenance</span>",
        "thumblink": "softwaresolutions-banners.jpg",
        "thumblink_low": "softwaresolutions-banners_low.jpg",
        "link": "swservice/ser3"
      }
      
    ];
  }
  slideConfig = {
    "slidesToShow": 5, "slidesToScroll": 5, "dots": false, responsive: [
      {
        breakpoint: 1025,
        settings: {
          "slidesToShow": 3,
          "slidesToScroll": 3,
          "prevArrow": '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>',
          "nextArrow": '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>'
        }
      },
      {
        breakpoint: 768,
        settings: {
          "slidesToShow": 1,
          "slidesToScroll": 1,
          "prevArrow": '<button class="slide-arrow prev-arrow"><i class="fa fa-angle-left"></i></button>',
          "nextArrow": '<button class="slide-arrow next-arrow"><i class="fa fa-angle-right"></i></button>'
        },
        lazyLoad: 'ondemand',
      }
    ]
  };



  openModal(type: string) {

  switch (type) {


      case 'roi':
      this.modalTitle = 'ESAT ERP – One Page ROI Calculator';
      this.modalDescription = `
<h6>Annual Savings Estimated:</h6>
<ul>
<li>Material Waste Reduction: AED 1,200,000</li>
<li>Labor Optimization: AED 560,000</li>
<li>Faster Billing & Cash Flow Improvement: AED 200,000</li>
<li>Machinery Cost Optimization: AED 150,000</li>
<li>Admin Workforce Reduction: AED 300,000</li>

</ul>
<p><b>Total Estimated Annual Savings: AED 2,410,000 – 3,000,000</b></p>

<p><b>Cost of ESAT ERP (Typical)</b>: AED 250,000 / year</p>
<h6>ROI Formula:</h6>
<p>ROI = (Annual Savings – Cost) / Cost</p>
<h6>Example:</h6>
<p>(2,410,000 – 250,000) / 250,000 = <b>864% ROI</b></p>
<h6>Meaning:</h6>
<p>For every AED 1 spent on ESAT ERP ® company gains AED 8–10 in savings.</p>

      `;
      break;
  }
}

}