import { Routes } from '@angular/router';

export const BUSINESS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../busness-home/busness-home')
        .then(m => m.BusnessHome),

    children: [

      // ❌ REMOVE redirect

      {
        path: 'asset',
        loadComponent: () =>
          import('./fixed-asset/fixed-asset')
            .then(m => m.FixedAsset)
      },

      {
        path: 'crm',
        loadComponent: () =>
          import('./crm/crm')
            .then(m => m.Crm)
      },

      {
        path: 'facility',
        loadComponent: () =>
          import('./facility-service/facility-service')
            .then(m => m.FacilityService)
      },

      {
        path: 'finance',
        loadComponent: () =>
          import('./finance-accounts/finance-accounts')
            .then(m => m.FinanceAccounts)
      },

      {
        path: 'hrm',
        loadComponent: () =>
          import('./hrm/hrm')
            .then(m => m.Hrm)
      },

      {
        path: 'hcm',
        loadComponent: () =>
          import('./hcm/hcm')
            .then(m => m.Hcm)
      },

      {
        path: 'payroll',
        loadComponent: () =>
          import('./payroll/payroll')
            .then(m => m.Payroll)
      },

      {
        path: 'contract',
        loadComponent: () =>
          import('./contract/contract')
            .then(m => m.Contract)
      },

      {
        path: 'inventory',
        loadComponent: () =>
          import('./inventory/inventory')
            .then(m => m.Inventory)
      },

      {
        path: 'procurement',
        loadComponent: () =>
          import('./procurement/procurement')
            .then(m => m.Procurement)
      },

      {
        path: 'sales',
        loadComponent: () =>
          import('./sales/sales')
            .then(m => m.Sales)
      },

      {
        path: 'budget',
        loadComponent: () =>
          import('./budget-project/budget-project')
            .then(m => m.BudgetProject)
      },

      {
        path: 'real-estate',
        loadComponent: () =>
          import('./real-estate/real-estate')
            .then(m => m.RealEstate)
      },

      {
        path: 'manufacturing',
        loadComponent: () =>
          import('./manufacturing/manufacturing')
            .then(m => m.Manufacturing)
      },

      {
        path: 'organization',
        loadComponent: () =>
          import('./organization/organization')
            .then(m => m.Organization)
      },

      {
        path: 'retail',
        loadComponent: () =>
          import('./retail-pos/retail-pos')
            .then(m => m.RetailPOS)
      },

      {
        path: 'warehouse',
        loadComponent: () =>
          import('./warehouse/warehouse')
            .then(m => m.Warehouse)
      },

      {
        path: 'fleet',
        loadComponent: () =>
          import('./fleet/fleet')
            .then(m => m.Fleet)
      },

      {
        path: 'cmms',
        loadComponent: () =>
          import('./cmms/cmms')
            .then(m => m.CMMS)
      },

      {
        path: 'shipment',
        loadComponent: () =>
          import('./shipment/shipment')
            .then(m => m.Shipment)
      },

      {
        path: 'quality',
        loadComponent: () =>
          import('./quality/quality')
            .then(m => m.Quality)
      }

    ]
  }
];