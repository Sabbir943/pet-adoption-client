import { Lato } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/NavBar";
import Provider from "@/component/Provider";
import Footer from "@/component/Footer";

import { Toaster } from "react-hot-toast";

const lato = Lato({
  subsets: ["latin"],
   weight: ["400", "700"]
});

export const metadata = {
  title: "PawNest",
  description: "Pet Adoption Platform",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body  suppressHydrationWarning 
        className={`${lato.className} min-h-full flex flex-col bg-background text-foreground`}
      >
        <Provider>
          <NavBar />
          
         <main className="grow container mx-auto px-4 py-8">
        {children}
      </main>

         
          <Footer/>
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}