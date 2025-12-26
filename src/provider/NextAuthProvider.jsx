"use client";
import { SessionProvider } from 'next-auth/react';
import React, { Children } from 'react';

const NextAuthProvider = ({ Children }) => {
    return (
        <SessionProvider>
            {Children}
        </SessionProvider>
    );
};

export default NextAuthProvider;