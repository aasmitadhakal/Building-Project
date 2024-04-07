// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { isAuthenticated } from '../utils/auth';

// const AuthLayout = ({ children }) => {
//   const router = useRouter();

//   useEffect(() => {
//     // Check if user is authenticated
//     const token = localStorage.getItem('authorizations')
//     if (!isAuthenticated || !token) {
//       // If not authenticated and trying to access the dashboard, redirect to login page
//       router.push('/login');
//     }
//   }, []);

//   return <div>{children}</div>;
// };

// export default AuthLayout;
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { isAuthenticated } from "../utils/auth";

const AuthLayout = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is authenticated
    const token = Cookies.get("authorization");
    if (!isAuthenticated || !token) {
      // If not authenticated and trying to access the dashboard, redirect to login page
      router.push("/login");
    }
  }, []);

  return <div>{children}</div>;
};

export default AuthLayout;
