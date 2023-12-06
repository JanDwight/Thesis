import { useContext, useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
  currentUser: {},
  userToken: null,
  userRole: {},
  setCurrentUser: () => {},
  setUserToken: () => {},
  setUserRole: () => {},
  userPermission: {},
  setUserPermission: null,
});

export const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [userToken, _setUserToken] = useState(
    sessionStorage.getItem("TOKEN") || ""
  );
  const [userRole, _setUserRole] = useState(
    sessionStorage.getItem("USERROLE") || ""
  );
  const [userPermission, setUserPermission] = useState();

  const setUserToken = (token) => {
    if (token) {
      sessionStorage.setItem("TOKEN", token);
    } else {
      sessionStorage.removeItem("TOKEN");
    }
    _setUserToken(token);
  };

  const setUserRole = (userrole) => {
    if (userrole) {
      sessionStorage.setItem("USERROLE", userrole);
    } else {
      sessionStorage.removeItem("USERROLE");
    }
    _setUserRole(userrole);
  };

  return (
    <StateContext.Provider
      value={{
        currentUser,
        setCurrentUser, 
        userToken,
        setUserToken,
        userPermission,
        setUserPermission,
        userRole,
        setUserRole,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
