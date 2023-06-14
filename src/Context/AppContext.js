import { createContext, useContext, useState, useMemo } from 'react';

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const [isModalAddErrorVisible, setIsModalAddErrorVisible] = useState(false);
    const [data, setData] = useState();
    const [typeModal, setTypeModal] = useState();

    console.log(user);

    return (
        <AppContext.Provider
            value={{
                user,
                setUser,
                data,
                setData,
                typeModal,
                setTypeModal,
                isModalAddErrorVisible,
                setIsModalAddErrorVisible,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
