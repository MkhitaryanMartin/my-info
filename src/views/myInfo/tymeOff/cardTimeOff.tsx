import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import React, { ReactNode } from 'react';

type Props = {
    title: string;
    bottomText: string;
    children: ReactNode
}

const CardTimeOff = ({ title, bottomText, children }: Props) => {
    return (
        <div>
            <Card className='w-[264px] h-[138px] bg-light-gray-blue'>
                <CardHeader>
                    <CardTitle>
                        {title}
                    </CardTitle>
                </CardHeader>
                <CardContent className=' flex flex-col gap-[4px]'>
                    {children}
                </CardContent>
            </Card>
            <p className='text-center mt-[8px] text-[14px] leading-[16.94px] font-medium  text-slateBlue'>{bottomText}</p>
        </div>
    );
};

export default CardTimeOff;