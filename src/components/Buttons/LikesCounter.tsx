import { Button } from '@chakra-ui/react';
import { useState } from 'react';

import SaveIcon from '../../assets/icons/metrics/icon-smile.svg';

export const LikesCounter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };

    return (
        <Button
            width='42px'
            height='24px'
            onClick={increment}
            leftIcon={<img src={SaveIcon} alt='Save' />}
            background='none'
            color='var(--primary-color3)'
            padding='5px'
        >
            {count}
        </Button>
    );
};
