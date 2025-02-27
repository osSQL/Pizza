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
                <div className='rounded-md border-solid border border-orange-600 m-0'>
                    <div className='flex items-center my-3 mx-3 '>
                        <Image src="/people.svg" alt='' width={30} height={30} className='mr-4'/>
                        <h2 className='text-orange-600'>Войти</h2>
                    </div>
                </div>
                <div className='rounded-md border-solid border border-orange-600 m-0'>
                    <Image src="/cart.svg" alt='' width={30} height={30} className='my-3 mx-3'/>
                </div>
            </Container>
        </header>
    );
}