import { createContext } from 'react';

const StoreContext = createContext({
    token: null,
    setToken: () => {},
    nameUser: null,
    setNameUser: () => {},
    emailUser: null,
    setEmailUser: () => {},
    ageUser: null,
    setAgeUser: () => {},
});

export default StoreContext;
