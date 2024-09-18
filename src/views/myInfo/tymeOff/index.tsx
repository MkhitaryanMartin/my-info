import { Button } from '@/components/ui/button';
import React from 'react';
import CardTimeOff from './cardTimeOff';
import TableTimeOff from './tableTimeOff';
import SelectBlockTimeOff from './selectsBlockTimeOff';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';


const TimeOf = () => {
    return (
        <div className='pb-[92px] bg-white rounded-b-[16px] px-[16px]'>
            <div className='flex justify-between items-center pt-[35px] pb-[15px] border-b-[2px] border-slateBlue 
           ' >
                <p className='max-md:hidden'>Time Off</p>
                <div className='flex justify-between items-center gap-[38px] max-md:flex-col max-md:gap-[10px] max-md:items-start'>
                    <p> Accrual Level Start Date <span>03/09-2020</span></p>
                    <Button>Add Time Off Policy</Button>
                </div>
            </div>
            <div className=' flex flex-col justify-center
            items-center pt-[35px] pb-[15px] border-b-[2px] border-slateBlue '>

               <Swiper slidesPerView={'auto'} className='swiper-block'>
                <SwiperSlide key={"Sick Full-Time"}>
                <CardTimeOff title='Sick' bottomText='Sick Full-Time'>
                    <p>3</p>
                    <p>Days Available</p>
                    <p className='text-[14px] font-semibold leading-[16px] text-slateBlue'>1 dey scheduled</p>
                </CardTimeOff>
                </SwiperSlide>
                <SwiperSlide>
                <CardTimeOff title='Annual Leave' bottomText='Sick Full-Time'>
                    <p>10.3</p>
                    <p>Days Available</p>
                </CardTimeOff>
                </SwiperSlide>
                <SwiperSlide>
                <CardTimeOff title='Comp/in Lieu Time' bottomText='Sick Full-Time'>
                    <p>0</p>
                    <p>Human Used(YTD)</p>
                </CardTimeOff>
                </SwiperSlide>
               </Swiper>
                <p className='self-start  mt-[8px] text-[14px] leading-[16.94px] font-medium '>Upcoming Time Off</p>
            </div>

            <div className='flex justify-between items-center pt-[35px] pb-[15px] border-b-[2px] border-slateBlue'>
                <div>
                    <p>Time Off</p>
                    <div className=''>
                        <p> Jan 27</p>
                        <p>1 dey of Sick</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-between items-center pt-[35px] pb-[15px] border-b-[2px] border-slateBlue'>
                <div>
                    <p>Time Off</p>
                    <div className=''>
                        <p> Jul 4</p>
                        <p>Independence Day</p>
                    </div>
                </div>
            </div>
            <SelectBlockTimeOff />
           <div className='overflow-hidden'>
           <TableTimeOff />

           </div>
        </div>
    );
};

export default TimeOf;