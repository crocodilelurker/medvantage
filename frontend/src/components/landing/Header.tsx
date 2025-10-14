'use client';
import { Bell, Calendar, LayoutDashboard, Settings, Stethoscope, User } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import React from 'react'
import { Badge } from '../ui/badge';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

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
        type: 'doctor',
        name: 'POGO',
        profileImage: '110HEX',
        email: 'swagat@gma.com'
    }

    const isAuthenticated = false;
    const pathname = usePathname();
    const getDashboardNavigation = (): NavigationItem[] => {
        if (!user || !showDashboardNav) return [];
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
                <div className='flex items-center space-x-8'>
                    <Link href='/' className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center'>
                            <Stethoscope className='w-5 h-5  text-white' />
                        </div>
                        <div className='text-2xl font-bold bg-gradient-to-br from-blue-600 to-blue-800 bg-clip-text text-transparent'>
                            Medvantage
                        </div>
                    </Link>
                    {/* dahabordnav */}
                    {isAuthenticated && showDashboardNav && (
                        <nav className='hidden md:flex items-center space-x-6'>
                            {getDashboardNavigation().map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`flex items-center space-x-1 transition-colors ${item.active ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"}`}
                                >
                                    <item.icon className='w-4 h-4' />
                                    <span className='text-sm font-medium'>{item.label}</span>
                                </Link>
                            ))}
                        </nav>
                    )}
                </div>
                {isAuthenticated && showDashboardNav ? (
                    <div className='flex items-center space-x-4'>
                        <Button variant='ghost' size='sm' className='relative'>
                            <Bell className='w-5 h-5' />
                            <Badge className='absolute -top-1 -right-1 w-5 h-5 text-xs bg-red-500 hover:bg-red-600'>
                                2
                            </Badge>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant='ghost' className='flex items-center px-2 space-x-2'>
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src={user?.profileImage} alt={user?.name}>
                                        </AvatarImage>
                                        <AvatarFallback className='bg-blue-700 text-blue-600 text-sm font-semibold'>{user.name.charAt(0)?.toUpperCase()}</AvatarFallback>
                                    </Avatar>
                                    <div className=' hidden md:block text-left'>
                                        <p className='text-sm font-medium text-gray-900'>{user.name}</p>
                                        <p className='text-xs text-gray-500 capitalize'>{user.type}</p>
                                    </div>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align='end' className='w-56'>
                                <DropdownMenuLabel>
                                    <div className='flex items-center space-x-2'>
                                        <Avatar className='w-8 h-8'>
                                            <AvatarImage src={user?.profileImage} alt={user?.name}>
                                            </AvatarImage>
                                            <AvatarFallback className='bg-blue-700 text-blue-600 '>{user.name.charAt(0)?.toUpperCase()}</AvatarFallback>
                                        </Avatar>

                                        <div className='flex-1 min-w-0'>
                                            <p className='font-medium truncate'>{user.name}</p>
                                            <p className='text-sm text-gray-500 truncate max-w-[140px]'>{user?.email}</p>
                                        </div>
                                    </div>
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={`/${user.type}/profile`} className='flex items-center'>
                                        <User className='w-4 h-4 mr-2' />
                                        Profile
                                    </Link>
                                </DropdownMenuItem>


                                <DropdownMenuSeparator />
                                <DropdownMenuItem asChild>
                                    <Link href={`/${user.type}/settings`} className='flex items-center'>
                                        <Settings className='w-4 h-4 mr-2' />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>


                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                ) : (
                    <div className='flex items-center space-x-3'>
                        {!isAuthenticated ? (<>
                            <Link href='login/patient'>
                                <Button variant='ghost' className='text-blue-900 font-medium hover:text-blue-700'>
                                    Log In
                                </Button>
                            </Link>

                            <Link href='signup/patient' className='hidden md:block'>
                                <Button className=' text-white bg-gradient-to-r from-blue-600 to-blue-700 font-medium hover:from-blue-700 hover:to-blue-800 rounded-full px-6'>
                                    Book Consultancy
                                </Button>
                            </Link>
                        </>) : (<>
                            <div className='flex items-center space-x-4'>
                                <span className='hidden md:block text-sm text-gray-700 font-medium whitespace-nowrap'>
                                    Welcome,&nbsp;{user?.name}
                                </span>

                                <Link href={`/${user?.type}/dashboard`} className='hidden md:block'>
                                    <Button variant='ghost' className=' text-white bg-gradient-to-r from-blue-600 to-blue-700 font-medium hover:from-blue-700 hover:to-blue-800 rounded-full px-6'>
                                        DashBoard
                                    </Button>
                                </Link>
                            </div>
                        </>)
                        }
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header