import React from 'react';

const ErrorPage = () => {
  return (
    <div className="flex-col text-center justify-center py-40 text-3xl font-semibold">
      <p>Error 404. Page not found.</p>
      <p>
        <a href="https://slaveatanasov.com" alt="Home page">
          Go back
        </a>
      </p>
    </div>
  );
};

export default ErrorPage;
