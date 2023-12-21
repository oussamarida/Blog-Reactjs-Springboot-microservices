import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

// Define PropTypes for the ContextProvider component
ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: {},
    setUserToken: () => {},
});

// Define the ContextProvider component
export function ContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("currentUser");
        return storedUser ? JSON.parse(storedUser) : {};
    });
  
    const [userToken, setUserToken] = useState(
        localStorage.getItem("TOKEN") || ""
    );

    const setUserTokenAndLocalStorage = (token) => {
        if (token) {
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN");
        }
        setUserToken(token);
    };
  
    useEffect(() => {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }, [currentUser]);


    const [size, setSize] = useState(null);
    const [listcommante, setlistcommante] = useState(null);

    const handleOpen = (value) => {setSize(value.size);setlistcommante(value.commentaire);};

    return (
        <StateContext.Provider
        value={{
          currentUser:{
            name:"oussama",
            image: "https://media.licdn.com/dms/image/D4E03AQHz0YlNqxAY7Q/profile-displayphoto-shrink_100_100/0/1685212301579?e=1708560000&v=beta&t=MqbXno94KQcXOH7dn7quNSrhQBMUbL6RLe9DWP4zWE0",
            email:'aussamarida51@gmail.com'
        },
          userToken,
          setUserToken: setUserTokenAndLocalStorage,
          size,handleOpen,listcommante
        }}
        >
            {children}
        </StateContext.Provider>
    );
}

// Define the useStateContext hook
export function useStateContext() {
  return useContext(StateContext);
}