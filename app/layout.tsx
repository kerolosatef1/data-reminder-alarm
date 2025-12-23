
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import ToastProvider from './Toast/Toast';

const arabic=Cairo(
  {
    variable: "--font-arabic",
  subsets: ["arabic"],
  }
)

export const metadata: Metadata = {
  title: 'Data Reminder ',
  description:
    'تطبيق Data Reminder يساعدك على عرض وتنظيم البيانات بسهولة مع إمكانية الإضافة والحذف',
    icons:{
      icon:'/datareminder.webp'
    },
 
    keywords: [
    'Data Reminder',
    'تنظيم البيانات',
    'تذكير',
    'الاسم بالعربي ',
    'الوقت',
    'الساعة',
    'التوقيت'
  ],
  authors: [{ name: 'Kerolos Atef Faragalla' }],
  openGraph: {
    title: 'Data Reminder',
    description: 'عرض وتنظيم البيانات بشكل بسيط وسريع',
    type: 'website',
    locale: 'ar',
    images: ['/datareminder.png'],
  },
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={` ${arabic.variable} antialiased  transition-colors duration-300`} >
         <ToastProvider/>
        {children}
       
      </body>
    </html>
  );
}
