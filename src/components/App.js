import AppRouter from "components/Router";
import React, { useState } from "react";
import { authService } from "fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser); //유저의 로그인 여부를 판별
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Jwitter</footer>
    </>
  );
}

export default App;
