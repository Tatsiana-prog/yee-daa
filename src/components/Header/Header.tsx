import { Flex } from '@chakra-ui/react';

import { HeaderNav } from '../Header/components/Breadcrumbs/BreadCrumbs';
import { HeaderMenuIcon } from '../Header/components/HeaderMenuIcon/HeaderMenuIcon';
import { HeaderUser } from '../Header/components/HeaderUser/HeaderUser';
import { Logo } from '../Logo/Logo';
export const Header = () => (
    <Flex
        as='header'
        data-test-id='header'
        pt='16px'
        pr={{ base: '30px', md: '80px', sm: '30px', xl: '80px' }}
        pb='16px'
        pl='16px'
        h='80px'
        w='100%'
        bgColor='#FFFFD3'
        justify='space-between'
    >
        <Flex gap='128' align='center'>
            <Logo />
            <HeaderNav />
        </Flex>
        <Flex align='center'>
            <HeaderUser />
            <HeaderMenuIcon />
        </Flex>
    </Flex>
);
