"use client";
import Link from "next/link";

export default function NotFound() {
    return <>
     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-[#0f172a] px-4 text-center">

      <div className="text-7xl mb-4 animate-bounce">⏰</div>
     
      <h3 className="text-6xl font-extrabold text-gray-800 dark:text-white mb-2">
        404
      </h3>
      
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        الصفحة اللي بتدور عليها مش موجودة  
        يمكن التذكير ضاع 
      </p>
      <Link
        href="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl transition shadow-lg"
      >
        الرجوع للصفحة الرئيسية
      </Link>

      <p className="mt-8 text-sm text-gray-400">
        Data Reminder © {new Date().getFullYear()}
      </p>
    </div>
    </>
}