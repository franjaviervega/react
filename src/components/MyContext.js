import React from 'react';

const MyContext = React.createContext([]);

export const MyProvider = MyContext.Provider;   //provider tiene una propiedad (value)
export const UserConsumer = MyContext.Consumer;
export default MyContext;   