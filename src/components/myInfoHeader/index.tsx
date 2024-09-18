"use client"

import React from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Select,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { myInfoLinks } from '@/assets/db/links';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronDownIcon } from 'lucide-react';
import { useUserStore } from '@/store/user';
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
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import LeftAside from '@/views/myInfo/leftAside';


const MyInfoHeader = () => {
    const params = useParams();
    const { user } = useUserStore();
    return (
        <div className={`
            h-[200px] bg-lightBlue flex items-end pl-[109px]  pr-[72px] justify-between
            max-2xl:items-start max-2xl:flex-col max-2xl:pt-[24px]  max-2xl:px-[10px]
            
        `}>

            <div className={`
            mt-[34px] w-[150px] h-[150px] bg-slate-400  min-w-[150px]  rounded-full relative z-10
            max-2xl:w-[60px] max-2xl:h-[60px]  max-2xl:min-w-[60px] max-2xl:z-0 max-2xl:mt-0 max-2xl:ml-[24px]
            cursor-pointer max-2xl:mb-[10px]
                `}>
            <Drawer>
                    <DrawerTrigger className='hidden max-2xl:flex'>
                    {!!user?.avatar && (
                  <Image
                  src={user?.avatar}
                  alt="avatar"
                  width={150}
                  height={150}
                  className='rounded-full'
              />
              )}
                    </DrawerTrigger>
                    {!!user?.avatar && (
                  <Image
                  src={user?.avatar}
                  alt="avatar"
                  width={150}
                  height={150}
                  className='rounded-full max-2xl:hidden'
              />
              )}
                    <DrawerContent className='left-[10px] top-[86px]'>
                        <DrawerHeader>
                            <DrawerTitle className='text-center'>Menu</DrawerTitle>
                        </DrawerHeader>
                      <div className='flex justify-center'><LeftAside/></div>
                        <DrawerFooter>
                            <DrawerClose>
                                Cancel
                            </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
              
            </div> 
            <div className='ml-[63px] max-w-[100%] overflow-hidden max-2xl:ml-0'>
                <div className='mb-[34px] flex items-center justify-between w-[100%]'>
                    <h2 className='text-[28px] font-[600] leading-[33.83px] max-2xl:ml-[24px]'>{user?.name}</h2>
                    <div className='flex gap-[16px] max-2xl:hidden'>
                        <Select>
                            <SelectTrigger className="w-[162px]  p-[8px] text-[14px] h-[33px] border-[1px] border-slateBlue" >
                                <SelectValue placeholder="Select a fruit" />
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </SelectTrigger>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[56px] p-[8px] text-[14px] h-[33px] border-[1px] border-slateBlue gap-[8px]" >
                                <SelectValue placeholder="@" />
                                <ChevronDown className="h-4 w-4 opacity-50" />
                            </SelectTrigger>
                        </Select>
                    </div>
                </div>

                
                       <Swiper 
                       className='swiper-header'
                       slidesPerView={'auto'}>
                       {myInfoLinks.map((link) => (
                                    <SwiperSlide key={link.alias}>
                                         <NavigationMenuItem   className={`
                                                      p-4 rounded-tl-[8px] 
                                                      flex 
                                  rounded-tr-[8px] rounded-bl-none rounded-br-none h-[54px] 
                                  font-inter text-[14px] font-[500] leading-[16.94px] whitespace-nowrap  text-center 
                                  min-w-[80px] justify-center
                                  ${params?.tab ? link?.alias === params.tab[0] ? "bg-white" : "" : link.alias === "time_off" ? "bg-white" : ""}`}>
                                            <Link href={`/my_info/${link.alias}`}>
                                                {link?.title}
                                            </Link>
                                            {link.alias === "more" && <ChevronDownIcon
                                                className="relative w-[16px] h-[16px] top-[1px] 
                                                ml-1 transition duration-300 group-data-[state=open]:rotate-180 text-center"
                                                aria-hidden="true"
                                            />}
                                        </NavigationMenuItem>
                                    </SwiperSlide>
                                    
                                ))}
                       </Swiper>
            </div>
        </div>
    );
};

export default MyInfoHeader;