import React from "react";

// const UserContext = React.createContext('Codevolution'); // it will work when there is no matching provider
const UserContext = React.createContext();

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}