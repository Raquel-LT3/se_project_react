//src/components/ProtectedRoute/ProtectedRoute.jsx

import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, isLoggedIn }) {
  // If the user is NOT logged in, we redirect them to the home page
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  // If they ARE logged in, we let them see the Profile
  return children;
}

export default ProtectedRoute;
