import { Button } from '@chakra-ui/react';

import FollowIcon from '../../../public/assets/icons/metrics/icon-follow.svg';

export const FollowersCounter = () => (
    <Button
        leftIcon={<img src={FollowIcon} alt='Save' />}
        background='none'
        color='var(--primary-color3)'
    >
        185
    </Button>
);
