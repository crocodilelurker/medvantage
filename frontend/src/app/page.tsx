'use client';
import Header from "@/components/landing/Header";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user= {
    type:"patient"
  };
  const router= useRouter();

  useEffect(()=>{
    if(user.type==='doctor')
    {
      router.replace('/doctor/dashboard')
    }
  },[user,router]);
  if(user?.type=='doctor')
  {
    return null;
  }
  return (
    <div className="min-h-screen bg-white"> 
      <Header showDashboardNav={true}/>
    </div>
  );
}
