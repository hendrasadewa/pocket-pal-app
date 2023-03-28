import {
  CandlestickChart,
  DataTransferBoth,
  Settings,
  Wallet,
} from 'iconoir-react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomNavigation() {
  const location = useLocation();
  return (
    <div className="btm-nav">
      <button className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/" className="flex items-center justify-center">
          <Wallet />
        </Link>
      </button>
      <button className={location.pathname === '/transactions' ? 'active' : ''}>
        <Link to="/transactions" className="flex items-center justify-center">
          <DataTransferBoth />
        </Link>
      </button>
      <button className={location.pathname === '/analytics' ? 'active' : ''}>
        <Link to="/analytics" className="flex items-center justify-center">
          <CandlestickChart />
        </Link>
      </button>
      <button className={location.pathname === '/manage' ? 'active' : ''}>
        <Link to="/manage" className="flex items-center justify-center">
          <Settings />
        </Link>
      </button>
    </div>
  );
}
