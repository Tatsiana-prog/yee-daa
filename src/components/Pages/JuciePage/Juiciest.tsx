import { Box, Flex, Heading } from '@chakra-ui/react';

import { ButttonMore } from '../../Buttons/ButtonMore';
import { FooterMobile } from '../../FooterMobile/FooterMobile';

import { CardsJuciest } from '../../Cards/CardsJuciest';
import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import { SideBar } from '../../Sidebar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';
import { VeganBlock } from '../Home/VeganBlock';

const Juciest = () => (
    <>
        <Header></Header>
        <main>
            <>
                <Flex justifyContent='space-between' height='1040px'>
                    <SideBar />
                    <Box as='section'>
                        <Box>
                            <Heading
                                as='h1'
                                size='48px'
                                color='0000'
                                mt='32px'
                                mb='32px'
                                fontWeight='bold'
                            >
                                Самое сочное!
                            </Heading>
                            <SearchList></SearchList>
                            <CardsJuciest cardCount={8} />
                            <ButttonMore />
                        </Box>
                        <VeganBlock />
                    </Box>
                    <UserMetrics />
                </Flex>
            </>
        </main>
        <FooterMobile />
    </>
);
export default Juciest;
