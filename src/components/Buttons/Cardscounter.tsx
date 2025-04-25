import { Button } from '@chakra-ui/react';
import { useState } from 'react';

import SaveIcon from '../../assets/icons/metrics/icon-save.svg';

export const CardsCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Button
            width='42px'
            height='24px'
            onClick={increment}
            leftIcon={<img width='12px' height='12px' src={SaveIcon} alt='Save' />}
            background='none'
            color='var(--primary-color3)'
            padding='5px'
        >
            {count}
        </Button>
    );
};
