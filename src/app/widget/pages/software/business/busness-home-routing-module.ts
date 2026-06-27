import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusnessHome } from './busness-home';
import { FacilityService } from './facility-service/facility-service';
import { FixedAsset } from './fixed-asset/fixed-asset';

const routes: Routes = [
  { path: '', component: BusnessHome },
  { path: 'asset', component: FixedAsset },
  { path: 'facility', component: FacilityService },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusnessHomeRoutingModule {}
