'use client';
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import LandingHero from "@/components/landing/LandingHero";
import TestimonialsSections from "@/components/landing/TestimonialsSections";
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
      <main className="pt-16">
        <LandingHero/>
        <TestimonialsSections/>
        <FAQSection/>
        <Footer/>
      </main>
    </div>
  );
}
