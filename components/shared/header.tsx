import { cn } from '@/lib/utils';
import { Container } from './container';
import * as React from "react";
import Image from 'next/image';

interface Props {
className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('border border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                <div className='flex items-center'>
                    <Image src='/pizza.svg' alt='' width={30} height={30} className="mr-4" />
                    <div>
                        <h1 className='font-normal hover:font-bold'>NEXT PIZZA</h1>
                        <h3>вкусней уже некуда</h3>
                    </div>
                </div>
                <div className='flex items-center border-solid border border-gray-400'>
                    <Image src="/search.svg" alt='' width={30} height={30} className='mr-4'/>
                    <h2>Поиск пиццы...</h2>

                </div>
                <div></div>
            </Container>
        </header>
    );
}