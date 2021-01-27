import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

import * as S from './styles';

const Dashboard: React.FC = () => {
  return (
    <S.Container>
      <S.Title>Dashboard</S.Title>
      <Form>
        <Input />
        <Button>
          Add
        </Button>
      </Form>
    </S.Container>
  )
}

export default Dashboard;