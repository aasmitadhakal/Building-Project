// const { NextResponse } = require("next/server");
 
// export default function middleware(req) {
//   // Check if the code is running on the client-side
//   if (typeof window !== "undefined") {
//     const verify = localStorage.getItem("token");
//     const url = req.url;
 
//     // If there's no token and the user is trying to access the dashboard, redirect to the home route
//     if (!verify && url.includes("/dashboard")) {
//       return NextResponse.redirect("/");
//     }
 
//     // If there's a token and the user is trying to access the home route, redirect to the dashboard
//     if (verify && url === "/") {
//       return NextResponse.redirect("/dashboard");
//     }
//   }
 
//   // If there's no redirection needed or if the code is running on the server-side, let the request proceed
//   return NextResponse.next();
// }