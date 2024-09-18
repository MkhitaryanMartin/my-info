import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const SelectBlockTimeOff = () => {
    return (
        <div className='pt-[24px]'> 
                <p className='mb-[16px]'>History</p>
                <div className='flex justify-between mb-[16px] max-md:flex-col-reverse max-md:gap-[10px]'>
                    <div className='flex gap-[16px] max-sm:flex-col-reverse max-sm:gap-[10px]'>
                    <Select>
                            <SelectTrigger className="w-[256px] overflow-hidden py-0 pl-[8px] pr-0 text-[14px] h-[33px] border-[1px] border-slateBlue" >
                                <SelectValue placeholder="Sick" />
                                <div className='h-[100%] w-[24px] bg-lightBlue flex items-center justify-center' >
                                <ChevronDown  className="h-4 w-4 opacity-50"/>
                                </div>
                            </SelectTrigger>
                        </Select>
                        <Select>
                            <SelectTrigger className="w-[96px] overflow-hidden py-0  pl-[8px] pr-0 text-[14px] h-[33px] border-[1px] border-slateBlue gap-[8px]" >
                                <SelectValue placeholder="All" />
                                <div className='h-[100%] w-[24px] bg-lightBlue flex items-center justify-center' >
                                <ChevronDown  className="h-4 w-4 opacity-50"/>
                                </div>
                            </SelectTrigger>
                        </Select>
                    </div>
                    <Select>
                            <SelectTrigger className="w-[176px] overflow-hidden py-0 pl-[8px] pr-0  text-[14px] h-[33px] border-[1px] border-slateBlue gap-[8px]" >
                                <SelectValue placeholder="Balance History" />
                                <div className='h-[100%] w-[24px] bg-lightBlue flex items-center justify-center' >
                                <ChevronDown  className="h-4 w-4 opacity-50"/>
                                </div>
                            </SelectTrigger>
                        </Select>
                </div>
            </div>
    );
};

export default SelectBlockTimeOff;