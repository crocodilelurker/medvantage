import { Calendar, LayoutDashboard } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react'

interface HeaderProps {
    showDashboardNav?: boolean
}
interface NavigationItem {
    label: string;
    icon: React.ComponentType<any>;
    href: string;
    active: boolean
}
const Header: React.FC<HeaderProps> = ({ showDashboardNav = false }) => {
    const user = {
        type: 'pa'
    }
    const pathname = usePathname();
    const getDashboardNavigation = (): NavigationItem[] => {
        if (!user || !showDashboardNav) {
            return [];
        }
        if (user?.type === 'patient') {
            return [
                {
                    label: 'Appointment',
                    icon: Calendar,
                    href: 'patient/dashboard',
                    active: pathname?.includes('/patient/dashboard') || false
                }
            ];
        }
        else if (user?.type == 'doctor') {
            return [
                {
                    label: 'Dashboard',
                    icon: LayoutDashboard,
                    href: 'doctor/dashboard',
                    active: pathname?.includes('/doctor/dashboard') || false
                },
                {
                    label: 'Appointment',
                    icon: Calendar,
                    href: 'doctor/appointments',
                    active: pathname?.includes('/doctor/appointments') || false
                }
            ];
        }
        return [];
    }
    return (
        <header className="border-b bg-white/95 backdrop:blur-sm fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">

            </div>
        </header>
    )
}

export default Header