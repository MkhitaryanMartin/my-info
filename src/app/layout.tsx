import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header";
import { ApolloProvider } from "@apollo/client";

import ProviderLayout from "@/components/providerLayout";
import { MY_PROFILE_QUERY, USER } from "@/apollo/user";
import Cookies from "@/utils/cookies";
import { cookies } from "next/headers";
import { getCookie } from "cookies-next";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


 
export default async function  RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 const cookieStore = cookies()

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     <ProviderLayout>
  <Header  />
  <main>{children}</main>
     </ProviderLayout>
      </body>
    </html>
  );
}
