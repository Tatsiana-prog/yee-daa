import { IconButton } from '@chakra-ui/react';

import { ArrowLeftIcon, ArrowRightIcon } from './custom-icons';

interface CarouselArrowProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

export const CarouselArrow = ({ direction, onClick }: CarouselArrowProps) => {
    const isLeft = direction === 'left';

    return (
        <IconButton
            aria-label={`Go ${direction}`}
            position='absolute'
            top='50%'
            transform='translateY(-50%)'
            left={isLeft ? 0 : undefined}
            right={!isLeft ? 0 : undefined}
            onClick={onClick}
            icon={isLeft ? <ArrowLeftIcon /> : <ArrowRightIcon />}
            bg='whiteAlpha.200'
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius='full'
        />
    );
};
