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
                <div>
                    <Image src='/Pizza.svg' alt='' width={30} height={30} />
                    <h1>NEXT PIZZA</h1>
                    <h3>вкусней уже некуда</h3>
                </div>
                <div></div>
                <div></div>
            </Container>
        </header>
    );
}