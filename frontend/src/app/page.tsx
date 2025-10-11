import Header from "@/components/landing/Header";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const user= {
    type:"pa"
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
      <Header showDashboardNav={false}/>
    </div>
  );
}
