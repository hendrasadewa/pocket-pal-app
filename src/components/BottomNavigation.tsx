import {
  CandlestickChart,
  DataTransferBoth,
  Settings,
  Wallet,
} from 'iconoir-react';
import { Link } from 'react-router-dom';

export default function BottomNavigation() {
  return (
    <div className="grid grid-cols-bottom-nav h-full px-4">
      <Link to="/" className="flex items-center justify-center" replace>
        <Wallet />
      </Link>
      <Link
        to="/transactions"
        className="flex items-center justify-center"
        replace
      >
        <DataTransferBoth />
      </Link>
      <Link
        to="/analytics"
        className="flex items-center justify-center"
        replace
      >
        <CandlestickChart />
      </Link>
      <Link to="/manage" className="flex items-center justify-center" replace>
        <Settings />
      </Link>
    </div>
  );
}