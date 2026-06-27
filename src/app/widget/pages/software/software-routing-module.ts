import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoftwareHome } from './software-home/software-home';
import { SecureErp } from './secure-erp/secure-erp';
import { ErpFeature } from './erp-feature/erp-feature';
import { EsatBenefits } from './esat-benefits/esat-benefits';

const routes: Routes = [
  { path: '', component: SoftwareHome },
  { path: 'erp-software-solutions-uae', component: SecureErp },
  { path: 'erp-feature', component: ErpFeature },
  { path: 'erp-benifites', component: EsatBenefits },
  {
    path: 'solution-business',
    loadChildren: () => import('./business/busness-home-module').then((m) => m.BusnessHomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SoftwareRoutingModule {}
