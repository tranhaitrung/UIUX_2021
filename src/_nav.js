export default [
  {
    component: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },
  {
    component: 'CNavGroup',
    name: 'KPI đơn vị',
    to: '/kpi-unit',
    icon: 'cil-puzzle',
    items: [
      {
        component: 'CNavItem',
        name: 'Dashboard KPI đơn vị',
        to: '/kpi-unit/dashboard-unit',
      },
      {
        component: 'CNavItem',
        name: 'Khởi tạo KPI đơn vị',
        to: '/kpi-unit/create',
      },
      {
        component: 'CNavItem',
        name: 'Quản lý KPI đơn vị',
        to: '/kpi-unit/manage',
      },
      {
        component: 'CNavItem',
        name: 'Phân tích tính hợp lý trong thiết lập KPI đơn vị',
        to: '/kpi-unit/analyst',
      },
      {
        component: 'CNavItem',
        name: 'Dashboard KPI nhân viên',
        to: '/kpi-unit/dashboard-member',
      },
      {
        component: 'CNavItem',
        name: 'Đánh giá KPI nhân viên',
        to: '/kpi-unit/evaluate',
      },
    ],
  },
  {
    component: 'CNavGroup',
    name: 'KPI cá nhân',
    to: '/kpi-personals',
    icon: 'cil-speedometer',
    items: [
      {
        component: 'CNavItem',
        name: 'Dashboard KPI cá nhân',
        icon: 'cil-circle',
        to: '/kpi-personals/dashboard',
      },
      {
        component: 'CNavItem',
        name: 'Khởi tạo KPI cá nhân',
        to: '/kpi-personals/create',
        icon: 'cil-circle',
      },
      {
        component: 'CNavItem',
        name: 'Quản lý KPI cá nhân',
        to: '/kpi-personals/manager',
        icon: 'cil-circle',
      },
    ],
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
