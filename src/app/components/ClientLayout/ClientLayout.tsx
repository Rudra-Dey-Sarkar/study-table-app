"use client"
import React from 'react'
import { Toaster } from 'react-hot-toast';
import { usePathname } from 'next/navigation';
import Topbar from '../Topbar/Topbar';
import Footer from '../Footer/Footer';

function ClientLayout({ children }: { children: React.ReactNode }) {
   const pathname = usePathname();

    return (
        <div>
            <Toaster />

            {/* Topbar features */}
            {pathname!=="/log-reg" && 
            <Topbar />
            }

            {/* Main body features */}
            {children}

            {/* Footer features */}
            {pathname!=="/log-reg" && 
            <Footer />
            }
        </div>

    )
}

export default ClientLayout