import { Routes } from '@angular/router';
import { SoftwareMain } from '../../software-main/software-main';

export const Software_ROUTES: Routes = [

 {
  path: '',
  loadComponent: () =>
    import('../sw-common/sw-common').then(m => m.SwCommon),

  children: [

    {
      path: '',
      component: SoftwareMain
    },

    {
      path: 'erp-software-solutions-uae',
      loadComponent: () =>
        import('../secure-erp/secure-erp').then(m => m.SecureErp)
    },

    {
      path: 'erp-feature',
      loadComponent: () =>
        import('../erp-feature/erp-feature').then(m => m.ErpFeature)
    },

    {
      path: 'erp-benifites',
      loadComponent: () =>
        import('../../../Software/product/esat-benefits/esat-benefits')
          .then(m => m.EsatBenefits)
    },

    {
      path: 'solution-business',
      loadChildren: () =>
        import('../business/business-line-main/solution-line-nav.routes')
          .then(r => r.BUSINESS_ROUTES)
    },

    {
      path: 'solution-industry',
      loadComponent: () =>
        import('../../../Software/product/business-industry/business-industry')
          .then(m => m.BusinessIndustry)
    },

    {
      path: 'package',
      loadComponent: () =>
        import('../../../Software/product/package-list/package-list')
          .then(m => m.PackageList)
    },

    {
      path: 'training',
      loadComponent: () =>
        import('../../../Software/product/erp-training/erp-training')
          .then(m => m.ErpTraining)
    }

  ]
}
]

