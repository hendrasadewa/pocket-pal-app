import { ArrowLeft } from 'iconoir-react';
import { useLocation } from 'react-router-dom';

interface Props {
  title?: string;
}

export default function TopNavigation({ title }: Props) {
  const location = useLocation();
  const pathLevel = location.pathname.split('/').length;

  const handleBackClicked = () => {
    window.history.back();
  };

  return (
    <header className="grid grid-cols-top-nav p-4">
      {pathLevel > 2 ? (
        <button onClick={handleBackClicked}>
          <ArrowLeft />
        </button>
      ) : null}
      <h1 className="text-center font-bold col-start-2 col-end-3 capitalize">
        {title}
      </h1>
    </header>
  );
}
