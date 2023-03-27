import Screen from '@/components/Screen';
import { Outlet } from 'react-router-dom';

function RootPage() {
  return (
    <Screen>
      <Outlet />
    </Screen>
  );
}

export default RootPage;
