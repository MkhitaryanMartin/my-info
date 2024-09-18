import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { MoveDown } from 'lucide-react';
import React from 'react';

const TableTimeOff = () => {
    return (
        <Table className='min-w-[670px]'>
        <TableHeader className='bg-lightBlue py-[16px] px-[8px]'>
          <TableRow>
            <TableHead className='flex gap-[9px] items-center text-[14px] font-medium leading-[16px]'><span>Date</span> <MoveDown className='h-[16px]'/></TableHead>
            <TableHead className='text-[14px] font-medium leading-[16px]'>Description</TableHead>
            <TableHead className='text-[14px] font-medium leading-[16px]'>Used Days (-)</TableHead>
            <TableHead className='text-[14px] font-medium leading-[16px]'>Earned Days (+)</TableHead>
            <TableHead className='text-[14px] font-medium leading-[16px]'>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell ></TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell >-6</TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell ></TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell ></TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell >-6</TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
          <TableRow className='border-slateBlue py-[8px] pr-[0]'>
            <TableCell >23/05/2024</TableCell>
            <TableCell >Accrual for 23/05/2024 to 20/11/2024</TableCell>
            <TableCell ></TableCell>
            <TableCell >3.00</TableCell>
            <TableCell >3.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
};

export default TableTimeOff;