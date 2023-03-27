import Screen from '@/components/Screen';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  let message = 'Unhandled Error!';

  if (isRouteErrorResponse(error)) {
    message = error.statusText;
  }

  if (error instanceof Error) {
    message = error.message;
  }
  return (
    <Screen>
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{message}</i>
        </p>
      </div>
    </Screen>
  );
}

export default ErrorPage;
