import { useParams } from 'react-router-dom';
import BudgetByPeriodList from '../components/BudgetByPeriodList';
import TotalBudgetByPeriod from '../components/TotalBudgetByPeriod';

export default function BudgetByPeriodPage() {
  const { periodId } = useParams();

  return (
    <div>
      <TotalBudgetByPeriod periodId={periodId} />
      <BudgetByPeriodList periodId={periodId} />
    </div>
  );
}
