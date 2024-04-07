import jwt from 'jsonwebtoken';
 
export const isAuthenticated = () => {
  const token = localStorage.getItem('authorization');
 
  if (!token) {
    // No token found, user is not authenticated
    return false;
  }
 
  try {
    const decodedToken = jwt.decode(token);
    const currentTimeInSeconds = Math.floor(Date.now() / 1000); // Convert milliseconds to seconds
 
    if (decodedToken.exp < currentTimeInSeconds) {
      // Token expired, user is not authenticated
      return false;
    }
 
    // Token is valid, user is authenticated
    return true;
  } catch (error) {
    // Error decoding token, user is not authenticated
    return false;
  }
};