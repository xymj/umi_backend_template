import { layout } from "@/app";

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    // component: './Access',
    routes: [{
      name: '访问 Admin',
      path: '/access/admin',
      component: './Access',
    },{
      name: '访问 Customer',
      path: '/access/customer',
      component: './Access/CustomerAccess',
    },{
      name: '访问 Default',
      path: '/access/default',
      component: './Access/DefaultAccess',
    }],
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: '客户管理',
    path: '/customer-manage',
    component: './CustomerManage',
    routes: [
      {
        name: ' 客户列表',
        icon: 'TeamOutlined',
        path: '/customer-manage/customer-list',
        component: './CustomerManage/CustomerList',
      },
      {
        name: ' 客户编辑',
        icon: 'TeamOutlined',
        path: '/customer-manage/customer/edit/:id',
        component: './CustomerManage/Customer/Edit',
        menu: {
          // 设置为 false 使菜单中不显示此项
          hideInMenu: true,
        },
        // layout: false 
      },
      {
        name: ' 客户认证',
        icon: 'FileProtectOutlined',
        path: '/customer-manage/authentication',
        component: './CustomerManage/ClientAuthentication',
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: './Login',
    layout: false,
  },
];
export default routes;
