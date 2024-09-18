import MyInfoHeader from "@/components/myInfoHeader";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <div>
  <MyInfoHeader/>
    {children}
   </div>
   
  );
}
