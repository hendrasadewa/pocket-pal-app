import { useParams } from 'react-router-dom';
import BudgetByPeriodList from '../components/BudgetByPeriodList';

export default function BudgetByPeriodPage() {
  const { periodId } = useParams();

  return (
    <div>
      <h1>Budget By Period</h1>
      <div>
        <BudgetByPeriodList periodId={periodId} />
      </div>
    </div>
  );
}
