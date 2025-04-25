import { Box, Button, Flex, Heading, Image, Link, useMediaQuery } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

import { FooterMobile } from '../../FooterMobile/FooterMobile';

import IconArrow from '../../../assets/icons/icon-arrow.png';
import { CardsJuciest } from '../../Cards/CardsJuciest';
import { CardsNew } from '../../Cards/CardsNew';
import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import { SideBar } from '../../Sidebar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';
import { CulinarBlog } from './CulinarBlog';
import { VeganBlock } from './VeganBlock';

const Home = () => {
    const [isMobile] = useMediaQuery('(max-width: 48em)'); // 48em ~ 768px
    const testId = isMobile ? 'juiciest-link-mobile' : 'juiciest-link';

    return (
        <>
            <Header />
            <main>
                <Flex justifyContent='space-between' height='1040px'>
                    <SideBar />
                    <Box as='section'>
                        <Box>
                            <Heading
                                as='h1'
                                size='48px'
                                color='#000'
                                mt='32px'
                                mb='32px'
                                fontWeight='bold'
                            >
                                Приятного аппетита!
                            </Heading>

                            <SearchList />

                            <Box>
                                <Heading as='h2' textAlign='left'>
                                    Новые рецепты
                                </Heading>
                                <CardsNew />
                            </Box>
                            <Box mb='40px'>
                                <Flex justifyContent='space-between' alignItems='center'>
                                    <Heading as='h2' textAlign='left'>
                                        Самое сочное
                                    </Heading>
                                    <Link
                                        as={RouterLink}
                                        to='/samoe-sochnoe'
                                        data-test-id={testId}
                                        p='10px 24px'
                                        mr='0'
                                        ml='auto'
                                        fontWeight='700'
                                        display={{ base: 'none', md: 'flex' }}
                                        alignItems='center'
                                        borderRadius='8px'
                                        bg='var(--primary-color5)'
                                        color='var(--black-color)'
                                        _hover={{
                                            bg: 'var(--primary-color4)',
                                        }}
                                    >
                                        вся подборка
                                        <Box as='span' ml='9px'>
                                            <Image src={IconArrow} alt='icon' />
                                        </Box>
                                    </Link>
                                </Flex>
                                <CardsJuciest cardCount={4} />
                                <Link
                                    as={RouterLink}
                                    to='/samoe-sochnoe'
                                    data-test-id={testId}
                                    p='10px 24px'
                                    mr='0'
                                    ml='auto'
                                    fontWeight='700'
                                    display={{ base: 'inline-flex', md: 'none' }}
                                    mt='50px'
                                    justifyContent='center'
                                    alignItems='center'
                                    borderRadius='8px'
                                    bg='var(--primary-color5)'
                                    color='var(--black-color)'
                                    _hover={{
                                        bg: 'var(--primary-color4)',
                                    }}
                                >
                                    вся подборка
                                    <Box as='span' ml='9px'>
                                        <Image src={IconArrow} alt='icon' />
                                    </Box>
                                </Link>
                            </Box>
                            <Box p='24px' bg='var(--primary-color1)' mb='40px'>
                                <Flex
                                    flexDirection={{ base: 'column', md: 'row' }}
                                    justifyContent={{ base: 'center', md: 'space-between' }}
                                >
                                    <Heading as='h2' textAlign={{ base: 'center', md: 'left' }}>
                                        Кулинарные блоги
                                    </Heading>
                                    <Box>
                                        <Button color='var(--black-color)' bg='none'>
                                            <Box
                                                as='span'
                                                fontSize='18px'
                                                fontWeight='600'
                                                mr='9px'
                                            >
                                                Все авторы
                                            </Box>
                                            <Box as='span'>
                                                <Image src={IconArrow} alt='icon' />
                                            </Box>
                                        </Button>
                                    </Box>
                                </Flex>
                                <CulinarBlog />
                            </Box>

                            <VeganBlock />
                        </Box>
                    </Box>
                    <UserMetrics />
                </Flex>
            </main>
            <FooterMobile />
        </>
    );
};

export default Home;
