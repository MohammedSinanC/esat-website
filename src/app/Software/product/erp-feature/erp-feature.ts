import { Component } from '@angular/core';

@Component({
  selector: 'app-erp-feature',
  imports: [],
  templateUrl: './erp-feature.html',
  styleUrl: './erp-feature.css',
})
export class ErpFeature {


   openPDF() {
  window.open('/assets/first-quality.pdf', '_blank');
}
}
