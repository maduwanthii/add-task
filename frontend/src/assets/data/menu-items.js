export const MENU_ITEMS = [{
  key: 'main',
  label: 'Main Menu',
  isTitle: true
}, {
  key: 'dashboards',
  icon: 'iconoir:home-simple',
  label: 'Dashboards',
//   children: [{
//     key: 'dashboard-analytics',
//     label: 'Analytics',
//     url: '/dashboard/analytics',
//     parentKey: 'dashboards'
//   }, {
//     key: 'dashboard-ecommerce',
//     label: 'Ecommerce',
//     url: '/dashboard/ecommerce',
//     parentKey: 'dashboards'
//   }
// ]
}
// , {
//   key: 'apps',
//   icon: 'iconoir:view-grid',
//   label: 'Applications',
//   children: [{
//     key: 'apps-analytics',
//     label: 'Analytics',
//     parentKey: 'apps',
//     children: [{
//       key: 'apps-analytics-customers',
//       label: 'Customers',
//       url: '/apps/analytics/customers',
//       parentKey: 'apps-analytics'
//     }, {
//       key: 'apps-analytics-reports',
//       label: 'Reports',
//       url: '/apps/analytics/reports',
//       parentKey: 'apps-analytics'
//     }]
//   }, {
//     key: 'apps-projects',
//     label: 'Projects',
//     parentKey: 'apps',
//     children: [{
//       key: 'apps-projects-clients',
//       label: 'Clients',
//       url: '/apps/projects/clients',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-team',
//       label: 'Team',
//       url: '/apps/projects/team',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-project',
//       label: 'Project',
//       url: '/apps/projects/project',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-task',
//       label: 'Task',
//       url: '/apps/projects/task',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-kanban',
//       label: 'Kanban Board',
//       url: '/apps/projects/kanban',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-users',
//       label: 'Users',
//       url: '/apps/projects/users',
//       parentKey: 'apps-projects'
//     }, {
//       key: 'apps-projects-create',
//       label: 'Project Create',
//       url: '/apps/projects/create',
//       parentKey: 'apps-projects'
//     }]
//   }, {
//     key: 'apps-ecommerce',
//     label: 'Ecommerce',
//     parentKey: 'apps',
//     children: [{
//       key: 'apps-ecommerce-products',
//       label: 'Products',
//       url: '/apps/ecommerce/products',
//       parentKey: 'apps-ecommerce'
//     }, {
//       key: 'apps-ecommerce-customers',
//       label: 'Customers',
//       url: '/apps/ecommerce/customers',
//       parentKey: 'apps-ecommerce'
//     }, {
//       key: 'apps-ecommerce-customers-details',
//       label: 'Customers Details',
//       url: '/apps/ecommerce/customers/2001',
//       parentKey: 'apps-ecommerce'
//     }, {
//       key: 'apps-ecommerce-orders',
//       label: 'Orders',
//       url: '/apps/ecommerce/orders',
//       parentKey: 'apps-ecommerce'
//     }, {
//       key: 'apps-ecommerce-orders-details',
//       label: 'Orders Details',
//       url: '/apps/ecommerce/orders/1001',
//       parentKey: 'apps-ecommerce'
//     }, {
//       key: 'apps-ecommerce-refunds',
//       label: 'Refunds',
//       url: '/apps/ecommerce/refunds',
//       parentKey: 'apps-ecommerce'
//     }]
//   }, {
//     key: 'apps-chat',
//     label: 'Chat',
//     parentKey: 'apps',
//     url: '/apps/chat'
//   }, {
//     key: 'apps-contact-list',
//     label: 'Contact List',
//     parentKey: 'apps',
//     url: '/apps/contacts'
//   }, {
//     key: 'apps-calendar',
//     label: 'Calendar',
//     parentKey: 'apps',
//     url: '/apps/calendar'
//   }, {
//     key: 'apps-invoice',
//     label: 'Invoice',
//     parentKey: 'apps',
//     url: '/apps/invoice'
//   }]
// }
,
 {
  key: 'components',
  label: 'SETTINGS',
  isTitle: true
}, {
  key: 'base-ui',
  icon: 'iconoir:compact-disc',
  label: 'Task Management',
  children: [{
    key: 'base-ui-alerts',
    label: 'Add Task',
    url: '/add_task',
    parentKey: 'base-ui'
   }
  //, {
  //   key: 'base-ui-avatars',
  //   label: 'Add Role',
  //   url: '/add_url',
  //   parentKey: 'base-ui'
  // }, {
  //   key: 'base-ui-buttons',
  //   label: 'User List',
  //   url: '/user_list',
  //   parentKey: 'base-ui'
  // }, {
  //   key: 'base-ui-badges',
  //   label: 'Role List',
  //   url: '/role_list',
  //   parentKey: 'base-ui'
  // }  
  ]
}
// , {
//   key: 'advanced-ui',
//   icon: 'iconoir:peace-hand',
//   badge: {
//     text: 'new',
//     variant: 'info'
//   },
//   label: 'Advanced UI',
//   children: [{
//     key: 'advanced-ui-animation',
//     label: 'Animation',
//     url: '/advanced/animation',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-clipboard',
//     label: 'Clip Board',
//     url: '/advanced/clipboard',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-dragula',
//     label: 'Dragula',
//     url: '/advanced/dragula',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-file-manager',
//     label: 'File Manager',
//     url: '/advanced/file-manager',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-highlight',
//     label: 'Highlight',
//     url: '/advanced/highlight',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-range-slider',
//     label: 'Range Slider',
//     url: '/advanced/range-slider',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-ratings',
//     label: 'Ratings',
//     url: '/advanced/ratings',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-ribbons',
//     label: 'Ribbons',
//     url: '/advanced/ribbons',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-sweet-alert',
//     label: 'Sweet Alerts',
//     url: '/advanced/alerts',
//     parentKey: 'advanced-ui'
//   }, {
//     key: 'advanced-ui-toast',
//     label: 'Toasts',
//     url: '/advanced/toasts',
//     parentKey: 'advanced-ui'
//   }]
// }, {
//   key: 'forms',
//   icon: 'iconoir:journal-page',
//   label: 'Forms',
//   children: [{
//     key: 'forms-basic-elements',
//     label: 'Basic Elements',
//     url: '/forms/basic',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-advance',
//     label: 'Advance Elements',
//     url: '/forms/advance',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-validation',
//     label: 'Validation',
//     url: '/forms/validation',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-wizard',
//     label: 'Wizard',
//     url: '/forms/wizard',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-editors',
//     label: 'Editors',
//     url: '/forms/editors',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-file-uploads',
//     label: 'File Upload',
//     url: '/forms/file-uploads',
//     parentKey: 'forms'
//   }, {
//     key: 'forms-image-crop',
//     label: 'Image Crop',
//     url: '/forms/image-crop',
//     parentKey: 'forms'
//   }]
// }, {
//   key: 'charts',
//   label: 'Charts',
//   icon: 'iconoir:candlestick-chart',
//   children: [{
//     key: 'charts-apex',
//     label: 'Apex',
//     url: '/charts/apex',
//     parentKey: 'charts'
//   }, {
//     key: 'charts-justgage',
//     label: 'JustGage',
//     url: '/charts/justgage',
//     parentKey: 'charts'
//   }, {
//     key: 'charts-chartjs',
//     label: 'ChartjS',
//     url: '/charts/chartjs',
//     parentKey: 'charts'
//   }, {
//     key: 'charts-toast',
//     label: 'Toast',
//     url: '/charts/toast',
//     parentKey: 'charts'
//   }]
// }, {
//   key: 'tables',
//   icon: 'iconoir:table-rows',
//   label: 'Tables',
//   children: [{
//     key: 'tables-basic',
//     label: 'Basic Tables',
//     url: '/tables/basic',
//     parentKey: 'tables'
//   }, {
//     key: 'tables-data-tables',
//     label: 'Datatables',
//     url: '/tables/data-tables',
//     parentKey: 'tables'
//   }]
// }, {
//   key: 'icons',
//   icon: 'iconoir:trophy',
//   label: 'Icons',
//   children: [{
//     key: 'icons-font-awesome',
//     label: 'Font Awesome',
//     url: '/icons/fa',
//     parentKey: 'icons'
//   }, {
//     key: 'icons-line-awesome',
//     label: 'Line Awesome',
//     url: '/icons/la',
//     parentKey: 'icons'
//   }, {
//     key: 'icons-icofont',
//     label: 'Icofont',
//     url: '/icons/icofont',
//     parentKey: 'icons'
//   }, {
//     key: 'icons-iconoir',
//     label: 'Iconoir',
//     url: '/icons/iconoir',
//     parentKey: 'icons'
//   }]
// }, {
//   key: 'maps',
//   icon: 'iconoir:navigator-alt',
//   label: 'Maps',
//   children: [{
//     key: 'maps-google',
//     label: 'Google Maps',
//     url: '/maps/google',
//     parentKey: 'maps'
//   }, {
//     key: 'maps-leaflet',
//     label: 'Leaflet Maps',
//     url: '/maps/leaflet',
//     parentKey: 'maps'
//   }, {
//     key: 'maps-vector',
//     label: 'Vector Maps',
//     url: '/maps/vector',
//     parentKey: 'maps'
//   }]
// }, {
//   key: 'email-templates',
//   label: 'Email Templates',
//   icon: 'iconoir:send-mail',
//   children: [{
//     key: 'email-templates-basic',
//     label: 'Basic Action Email',
//     url: '/email-templates/basic',
//     parentKey: 'email-templates'
//   }, {
//     key: 'email-templates-alert',
//     label: 'Alert Email',
//     url: '/email-templates/alert',
//     parentKey: 'email-templates'
//   }, {
//     key: 'email-templates-billing',
//     label: 'Billing Email',
//     url: '/email-templates/billing',
//     parentKey: 'email-templates'
//   }]
// }, {
//   key: 'crafted',
//   label: 'CRAFTED',
//   isTitle: true
// }, {
//   key: 'pages',
//   label: 'Pages',
//   isTitle: false,
//   icon: 'iconoir:page-star',
//   children: [{
//     key: 'page-profile',
//     label: 'Profile',
//     url: '/pages/profile',
//     parentKey: 'pages'
//   }, {
//     key: 'page-notifications',
//     label: 'Notifications',
//     url: '/pages/notifications',
//     parentKey: 'pages'
//   }, {
//     key: 'page-timeline',
//     label: 'Timeline',
//     url: '/pages/timeline',
//     parentKey: 'pages'
//   }, {
//     key: 'page-tree-view',
//     label: 'Treeview',
//     url: '/pages/treeview',
//     parentKey: 'pages'
//   }, {
//     key: 'page-starter',
//     label: 'Starter Page',
//     url: '/pages/starter',
//     parentKey: 'pages'
//   }, {
//     key: 'page-pricing',
//     label: 'Pricing',
//     url: '/pages/pricing',
//     parentKey: 'pages'
//   }, {
//     key: 'page-blogs',
//     label: 'Blogs',
//     url: '/pages/blogs',
//     parentKey: 'pages'
//   }, {
//     key: 'page-faqs',
//     label: 'FAQs',
//     url: '/pages/faqs',
//     parentKey: 'pages'
//   }, {
//     key: 'page-gallery',
//     label: 'Gallery',
//     url: '/pages/gallery',
//     parentKey: 'pages'
//   }]
// }, {
//   key: 'page-authentication',
//   label: 'Authentication',
//   isTitle: false,
//   icon: 'iconoir:fingerprint-lock-circle',
//   children: [{
//     key: 'log-in',
//     label: 'Log In',
//     url: '/auth/login',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'register',
//     label: 'Register',
//     url: '/auth/register',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'reset-pass',
//     label: 'Re-Password',
//     url: '/auth/reset-pass',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'lock-screen',
//     label: 'Lock Screen',
//     url: '/auth/lock-screen',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'maintenance',
//     label: 'Maintenance',
//     url: '/maintenance',
//     target: '_blank',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'error-404',
//     label: 'Error 404',
//     url: '/not-found',
//     parentKey: 'page-authentication'
//   }, {
//     key: 'error-500',
//     label: 'Error 500',
//     url: '/error-500',
//     parentKey: 'page-authentication'
//   }]
// }

];