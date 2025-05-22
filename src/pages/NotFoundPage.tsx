import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-6xl font-bold text-slate-dark mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-slate-dark mb-6">Page Not Found</h2>
        <p className="text-steel-gray mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center">
          <Home className="mr-2 h-5 w-5" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;