import { useNavigate } from '@umijs/max';
import { Button } from 'antd';

export default function CustomerList() {
  const navigate = useNavigate();
  return (
    <div>
      客户列表：
      <ul>
        <li>
          <Button
            type="link"
            onClick={() => {
              navigate('/customer-manage/customer/edit/1');
              console.log('按钮');
            }}
          >
            客户1
          </Button>
        </li>

        <li>客户2</li>
        <li>客户3</li>
      </ul>
    </div>
  );
}
