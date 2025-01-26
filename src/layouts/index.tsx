import { Outlet, useAppData } from '@umijs/max';
import { Layout } from 'antd';

export default function index() {
  const { clientRoutes } = useAppData();
  console.log(clientRoutes);
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
