"use client"

import Link from 'next/link';
import React, { useEffect } from 'react';
import { Bell, CircleHelp, Menu, Settings } from 'lucide-react';
import SearchInput from '../SearchInput';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { usePathname } from 'next/navigation';
import { links } from '@/assets/db/links';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { signOut, useSession } from 'next-auth/react';
import Cookies from '@/utils/cookies';
import { MY_PROFILE_QUERY } from '@/apollo/user';
import { useUserStore } from '@/store/user';
import client from '@/apollo/client';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from '../ui/button';


const Header = () => {
    const pathname = usePathname();
    const { user, getUser } = useUserStore();
    const { status } = useSession()

    useEffect(() => {
        if ((Cookies.getStringCookie({ key: "access_token" }) || Cookies.getStringCookie({ key: "refresh_token" })) && status === "authenticated") {
            (async () => {
                const { data } = await client.query({ query: MY_PROFILE_QUERY });
                getUser({ ...data?.myProfile });
            })();
        } else if (status === "authenticated") {
            signOut({
                callbackUrl: "/"
            })
            getUser({ name: "", avatar: "" })
        } else if (status === "unauthenticated" && (Cookies.getStringCookie({ key: "access_token" }) || Cookies.getStringCookie({ key: "refresh_token" }))) {
            Cookies.removeCookie({ key: "access_token" });
            Cookies.removeCookie({ key: "refresh_token" })
        }
    }, [status]);
    return (
        <header className='flex justify-between  px-[24px] items-end h-[86px]'>
            <Link href="/" className='mb-[16px] mt-[32px] font-inter text-[20px] font-semibold leading-[24.2px] self-start'>
                HarmonyHR
            </Link>
            <NavigationMenu className='max-lg:hidden'>
                <NavigationMenuList>
                    {links.map((link) => (
                        <NavigationMenuItem key={link.alias} className={`p-4 rounded-tl-[8px] 
            rounded-tr-[8px] rounded-bl-none rounded-br-none h-[54px] 
            font-inter text-[18px] font-normal leading-[21.78px] text-left ${pathname.split("/")[1] === link?.alias ? "bg-lightBlue" : ""}`}>
                            <Link href={`/${link?.alias}`}>{link?.title}
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <div className='mb-[16px] max-2xl:hidden'>
                <SearchInput placeholder={"Search"} />
            </div>
            <div className={`flex ${user?.name ? "justify-between" : "justify-end"} w-[179px]
             items-center mb-[16px] max-2xl:w-[auto] max-2xl:gap-[10px]`}>
                {!!user?.name && (
                    <>
                        <Settings className='max-lg:hidden' />
                        <CircleHelp className='max-lg:hidden' />
                        <Bell className='max-lg:hidden' />
                    </>
                )}
                <div className='mr-[5px] hidden max-2xl:flex'>
                    <SearchInput placeholder={"Search"} className="max-2xl:hidden" classNameContainer='h-[38px] w-[40px]' />
                </div>
                <Drawer>
                    <DrawerTrigger>
                        <Menu size={38} className='hidden max-lg:flex cursor-pointery' />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle className='text-center'>Menu</DrawerTitle>
                            {links.map((link) => (
                                <NavigationMenuItem key={link.alias} className={`p-4 rounded-tl-[8px] 
            rounded-tr-[8px] rounded-bl-none rounded-br-none h-[54px] 
            font-inter text-[18px] font-normal leading-[21.78px] text-left ${pathname.split("/")[1] === link?.alias ? "bg-lightBlue" : ""}`}>
                                    <Link href={`/${link?.alias}`}>{link?.title}
                                    </Link>
                                </NavigationMenuItem>
                            ))}


                        </DrawerHeader>

                        <DrawerFooter>
                            <DrawerClose>
                                Cancel
                            </DrawerClose>
                            {!!user?.name && (
                                <div className='flex gap-[10px] justify-center mt-[10px]'>
                                    <Settings />
                                    <CircleHelp />
                                    <Bell />
                                </div>
                            )}
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                {!!user?.name ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            asChild>

                            <Avatar className='w-[38px] h-[38px] cursor-pointer'>
                                <AvatarImage src={user?.avatar} />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className='max-w=[1440px]'>
                            <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => {
                                Cookies.removeCookie({ key: "access_token" });
                                Cookies.removeCookie({ key: "refresh_token" })
                                signOut({
                                    callbackUrl: "/"
                                })
                                getUser({ name: "", avatar: "" })
                            }}>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Avatar className='w-[38px] h-[38px] cursor-pointer'>
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                )}


            </div>

        </header>
    );
};

export default Header;