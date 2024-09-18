"use client"

import React from 'react';
import { Tabs, TabsContent} from "@/components/ui/tabs";
import { myInfoLinks } from '@/assets/db/links';
import useContainer from '@/views/myInfo/hook';
import { useParams } from 'next/navigation';
import LeftAside from './leftAside';
import { useUserStore } from '@/store/user';
import { useSession } from 'next-auth/react';

type ChildrenType = {
    [key: string]: React.ReactNode;
};

const MyInfo = () => {
    const session = useSession();
 const {children} = useContainer()  as { children: ChildrenType }
 const params = useParams()

    return (
        <div className='flex justify-between pr-[71px] gap-[25px] bg-light-gray-blue pb-[30px] max-2xl:pr-0 '>
            <div className='max-2xl:hidden  relative top-[-15px] ml-[72px]'><LeftAside/></div> 
            <Tabs defaultValue={params?.tab?.[0] || "time_off"} className="w-[100%]" >
                {myInfoLinks.map(({alias}: {alias: string}) => (
                    <TabsContent key={alias} value={alias} className='mt-0'>
                      <div>
                        {children?.[alias]}
                      </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default MyInfo;
