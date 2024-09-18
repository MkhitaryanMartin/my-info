import { Card, CardContent } from '@/components/ui/card';
import React, { ReactNode } from 'react';

type Props = {
    children: ReactNode
}

const LeftAsideCard = ({children}: Props) => {
    return (
        <Card>
        <CardContent className='w-[225px] bg-white flex flex-col gap-[8px] rounded-[16px] p-[24px]'>
           {children}
        </CardContent>
    </Card>
    );
};

export default LeftAsideCard;