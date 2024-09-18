import PeoplesIcon from '@/components/svg/peoplesIcon';
import { Clock4, Facebook, Globe, Hash, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import "./style.css"
import React from 'react';
import LeftAsideCard from './leftAsideCard';

const LeftAside = ({className=""}:{className?:string}) => {
    return (
        <div className={`leftAside flex flex-col gap-[16px] ${className}`}>
            <LeftAsideCard>
                <p>
                    <Phone />
                    <span> 07911 654321</span>
                </p>
                <p>
                    <Mail />
                    <span> avd.yana@videorollnet</span>
                </p>
                <div className='flex gap-[16px]' >
                    <Linkedin className='w-[16px] h-[16px]' />
                    <Facebook className='w-[16px] h-[16px]' />
                    <Twitter className='w-[16px] h-[16px]' />
                </div>
            </LeftAsideCard>
            <LeftAsideCard>
                <p>Hire Date</p>
                <p>Sep. 3,2020</p>
                <p>3y - 9m - 20d</p>
            </LeftAsideCard>
            <LeftAsideCard>
                <p>
                    <Hash />
                    <span>5</span>
                </p>
                <p>
                    <Clock4 />
                    <span>Full-Time</span>
                </p>
                <p>
                    <PeoplesIcon />
                    <span>Operations</span>
                </p>
                <p >
                    <Globe />
                    <span>Europe</span>
                </p>
                <p>
                    <MapPin />
                    <span>London, UK</span>
                </p>
            </LeftAsideCard>
            <LeftAsideCard>
                <p>
                    <Hash />
                    <span>5</span>
                </p>
                <p>
                    <Clock4 />
                    <span>Full-Time</span>
                </p>
                <p>
                    <PeoplesIcon />
                    <span>Operations</span>
                </p>
                <p >
                    <Globe />
                    <span>Europe</span>
                </p>
                <p>
                    <MapPin />
                    <span>London, UK</span>
                </p>
            </LeftAsideCard>
        </div>

    );
};

export default LeftAside;