'use client';
export default function AuthLayout({
  children, // will be a page or nested layout
}) {
  
  return (
    <>
    
      {/* This is the layout for auth pages  */}
      {children}
    </>
  );
}
