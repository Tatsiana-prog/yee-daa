import { Button } from '@chakra-ui/react';

import SaveIcon from '../../../public/assets/icons/metrics/icon-save.svg';

export const CardStorage = () => (
    <Button
        leftIcon={<img src={SaveIcon} alt='Save' />}
        background='none'
        color='var(--primary-color3)'
    >
        185
    </Button>
);
