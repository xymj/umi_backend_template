import { PageContainer } from '@ant-design/pro-components';
import { Access, useAccess } from '@umijs/max';
import { Button } from 'antd';

export default function CustomerAccess() {
  const access = useAccess();
  return (
    <PageContainer
      ghost
      header={{
        title: '权限Customer示例',
      }}
    >
      <Access accessible={!access.canSeeAdmin}>
        <Button>只有 Customer 可以看到这个按钮</Button>
      </Access>
    </PageContainer>
  );
}
