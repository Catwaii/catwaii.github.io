import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? // note that error is type `ErrorResponse`
              error.data?.message || error.statusText
            : "Unknown error message"}
        </i>
      </p>
    </div>
  );
}
