export default [
  {
    component: 'CNavItem',
    name: 'Trang chủ',
    to: '/',
    icon: 'cil-home',
  },
  {
    component: 'CNavGroup',
    name: 'KPI đơn vị',
    to: '/kpi-unit',
    icon: 'cil-speedometer',
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
  {
    component: 'CNavItem',
    name: 'Hướng dẫn sử dụng',
    to: '/helps',
    icon: 'cil-document',
  },

  // {
  //   component: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
