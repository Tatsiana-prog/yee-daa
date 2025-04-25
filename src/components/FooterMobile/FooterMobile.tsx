import { Box, Flex, Image } from '@chakra-ui/react';

import IconMain from '../../assets/icons/icom-main.png';
import IconPen from '../../assets/icons/icon-pen.png';
import IconSearch from '../../assets/icons/icon-search-big.png';
import IconUser from '../../assets/image/header/userimage.png';

export const FooterMobile = () => (
    <Flex
        display={{ md: 'none', sm: 'flex' }}
        as='footer'
        data-test-id='footer'
        p='10px 50px'
        bgColor='#FFFFD3'
        justify='space-between'
    >
        <Flex
            color='var(--dark-light-color)'
            _hover='var(--black-color)'
            fontSize='12px'
            flexDirection='column'
            justifyContent='center'
        >
            <Image src={IconMain} alt='icon' w='40px' h='40px' />
            <Box as='p'>Главная</Box>
        </Flex>
        <Flex
            color='var(--dark-light-color)'
            _hover='var(--black-color)'
            fontSize='12px'
            flexDirection='column'
            justifyContent='center'
        >
            <Image src={IconSearch} alt='icon' w='40px' h='40px' />
            <Box as='p'>Поиск</Box>
        </Flex>
        <Flex
            color='var(--dark-light-color)'
            _hover='var(--black-color)'
            fontSize='12px'
            flexDirection='column'
            justifyContent='center'
        >
            <Image src={IconPen} alt='icon' w='40px' h='40px' />
            <Box as='p'>Записать рецепт</Box>
        </Flex>
        <Flex
            color='var(--dark-light-color)'
            _hover='var(--black-color)'
            fontSize='12px'
            flexDirection='column'
            justifyContent='center'
        >
            <Image src={IconUser} alt='icon' w='40px' h='40px' m='0 auto' />
            <Box as='p'>Мой профиль</Box>
        </Flex>
    </Flex>
);
