/*
 providers are a common pattern for managing application state and sharing data across app.components.
 Providers are typically used in combination with the Context API to make data available to app.components
 deep within the component tree without having to pass props explicitly through multiple levels.
 */
"use client";

import { MyUserContextProvider } from "@/app/hooks/useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({
                                                       children
                                                   }) => {
    return (
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    );
}

export default UserProvider;