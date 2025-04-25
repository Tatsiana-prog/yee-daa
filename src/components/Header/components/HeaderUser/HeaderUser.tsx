import { Box, Flex } from '@chakra-ui/react';

import userImage from '../../../../assets/image/header/userimage.png';
import styles from './HeaderUser.module.css';

export const HeaderUser = () => (
    <Flex
        display={{ base: 'none', md: 'flex' }}
        className={styles.headerUser}
        gap='12px'
        align='center'
    >
        <div className={styles.headerAvatar}>
            <img src={userImage} alt='avatar' className={styles.avatarImage} />
        </div>
        <Box className={styles.headerAvatarInfo}>
            <h3 className={styles.headerAvatarName}>Екатерина Константинопольская</h3>
            <p className={styles.headerAvatarText}>@bake_and_pie</p>
        </Box>
    </Flex>
);
