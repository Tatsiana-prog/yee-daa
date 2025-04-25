import { Button } from '@chakra-ui/react';

import SmileIcon from '../../assets/icons/metrics/icon-smile.svg';

export const LikeCounter = () => (
    <Button
        leftIcon={<img src={SmileIcon} alt='Save' />}
        background='none'
        color='var(--primary-color3)'
    >
        185
    </Button>
);
