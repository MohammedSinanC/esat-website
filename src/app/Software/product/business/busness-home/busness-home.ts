import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busness-home',
  standalone:true,
 imports: [RouterLink, RouterOutlet],
  templateUrl: './busness-home.html',
  styleUrl: './busness-home.css',
})
export class BusnessHome {


// UI helper
  get rows() {
    const size = 7;
    const result: any[] = [];

    for (let i = 0; i < this.solutions.length; i += size) {
      result.push(this.solutions.slice(i, i + size));
    }

    return result;
  }

  solutions = [
    { title: 'Fixed Asset Management', image: 'assets/images/assert.jpg', route: 'asset' },
    { title: 'Customer Relationship Management', image: 'assets/images/crmimg.jpg', route: 'crm' },
    { title: 'Facility & Service Management', image: 'assets/images/facility.jpg', route: 'facility' },
    { title: 'Finance & Accounts Management', image: 'assets/images/finance.jpg', route: 'finance' },
    { title: 'Human Capital Management', image: 'assets/images/hcm.jpg', route: 'hcm' },
    { title: 'Human Resource Management', image: 'assets/images/hrm.jpg', route: 'hrm' },
    { title: 'Contract Management', image: 'assets/images/contract.jpg', route: 'contract' },
    { title: 'Inventory Management', image: 'assets/images/inventory.jpg', route: 'inventory' },
    { title: 'Procurement Management', image: 'assets/images/procurement.jpg', route: 'procurement' },
    { title: 'Budget & Project Management', image: 'assets/images/budget.jpg', route: 'budget' },
    { title: 'Real Estate Management', image: 'assets/images/real-estate.jpg', route: 'real-estate' },
    { title: 'Sales Management', image: 'assets/images/sales.jpg', route: 'sales' },
    { title: 'Payroll Management', image: 'assets/images/payroll.png', route: 'payroll' },
    { title: 'Manufacturing Management', image: 'assets/images/manufacturing.jpg', route: 'manufacturing' },
    { title: 'Organization Development', image: 'assets/images/od.jpg', route: 'organization' },
    { title: 'Retail & POS Management', image: 'assets/images/retail.jpg', route: 'retail' },
    { title: 'Warehouse Management', image: 'assets/images/warehouse.jpg', route: 'warehouse' },
    { title: 'Fleet Management', image: 'assets/images/fleet.jpg', route: 'fleet' },
    { title: 'CMMS Management', image: 'assets/images/cmms.jpg', route: 'cmms' },
    { title: 'Shipment Management', image: 'assets/images/shipment.jpg', route: 'shipment' },
    { title: 'Quality Management', image: 'assets/images/quality.jpg', route: 'quality' }
  ];
}