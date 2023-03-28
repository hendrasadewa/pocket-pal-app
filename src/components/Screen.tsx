import { ReactNode } from 'react';

import BottomNavigation from './BottomNavigation';
import TopNavigation from './TopNavigation';

interface Props {
  children: ReactNode;
  title?: string;
}

export default function Screen({ children, title = 'PocketPal' }: Props) {
  return (
    <div className="grid grid-cols-screen grid-rows-screen min-h-screen">
      <header className="col-start-1 col-end-7 row-start-1 row-end-2">
        <TopNavigation title={title} />
      </header>
      <main className="col-start-1 col-end-7 px-4">{children}</main>
      <footer className="col-start-1 col-end-7 row-start-3 row-end-4  bg-primary-content">
        <BottomNavigation />
      </footer>
    </div>
  );
}
