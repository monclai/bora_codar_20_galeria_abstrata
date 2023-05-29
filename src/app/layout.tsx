"use client"
import React from 'react';
import { Hepta_Slab } from 'next/font/google';
const heptaSlab = Hepta_Slab({
    subsets: ['latin'],
    weight: ['400']
})

import { CSSReset } from '../public/CSSReset.js'


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <html lang="pt-br">
            <head>
                <title>Abstract Gallery - bora codar 20</title>
            </head>
            <body>
                <div className={heptaSlab.className}>
                    <CSSReset />
                    {children}
                </div>
            </body>
        </html>
    );
}
