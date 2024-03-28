import { createContext, useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./siteRouter";
import "./layouts/mainLayoutStyle.css";

export const AppContext = createContext(null);

function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("Token:", token, "User:", user);
  }, [token, user]);

  return (
    <>
      <AppContext.Provider
        value={{
          token,
          setToken,
          user,
          setUser,
          
        }}
      >
      
        <RouterProvider router={router} />
      </AppContext.Provider>
    </>
  );
}

export default App;
