import { useParams } from '@umijs/max';

export default function CustomerEdit() {
  const { id } = useParams<{ id: string }>();
  return <div>客户编辑: {id}</div>;
}
