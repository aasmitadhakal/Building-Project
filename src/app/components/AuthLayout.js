import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '../utils/auth';

const AuthLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      // If not authenticated and trying to access the dashboard, redirect to login page
      router.push('/login');
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthLayout;
