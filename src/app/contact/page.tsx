import React from 'react';
import { Header } from '../header/Header';
import { Footer } from '../footer/Footer';

export default function Component() {
    return (
        <div className='flex flex-col min-h-screen bg-secondary-100/20 dark:bg-primary-900/10'>
        <Header />
        <div className='flex-grow'>
            <h1 className='text-4xl text-center my-12'>Contact</h1>
        </div>
        <Footer />
        </div>
    );
}