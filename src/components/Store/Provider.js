import React from 'react';
import Context from './Context';
import useStorage from '../../utils/useStorage';

const StoreProvider = ({ children }) => {
    const [token, setToken] = useStorage('token');
    const [nameUser, setNameUser] = useStorage('nameUser');
    const [emailUser, setEmailUser] = useStorage('emailUser');
    const [ageUser, setAgeUser] = useStorage('ageUser');
    return (
        <Context.Provider
            value={{
                token,
                setToken,
                nameUser,
                setNameUser,
                emailUser,
                setEmailUser,
                ageUser,
                setAgeUser,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default StoreProvider;
