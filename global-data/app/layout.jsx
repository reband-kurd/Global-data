import {Inter} from 'next/font/google'
import "../styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs';


export const metadata = {
    title: "Global-Data",
    description: "Discover & and profit",
};

const RootLayout = ({children}) => (
    <html lang='en'>
    <body>
    <provider>

        <div className='main'>
            <div className='gradient'/>
        </div>

        <main className='app'>
        <ClerkProvider>
            {children}
        </ClerkProvider>
        </main>
    </provider>

    </body>
    </html>
);

export default RootLayout;