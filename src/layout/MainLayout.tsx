import Header from '@/components/Header';
import React from 'react';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="p-[10px] max-w-4xl mx-auto">{children}</main>
        </>
    );
};

export default MainLayout;
