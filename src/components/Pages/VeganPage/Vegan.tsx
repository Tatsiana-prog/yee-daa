import { Box, Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import { FooterMobile } from '../../FooterMobile/FooterMobile';

import { ButttonMore } from '../../Buttons/ButtonMore';
import { CardsJuciest } from '../../Cards/CardsJuciest';
import { Header } from '../../Header/Header';
import { SearchList } from '../../SearchList/SearchList';
import { SideBar } from '../../Sidebar/SideBar';
import { UserMetrics } from '../../UserMetrics/UserMetrics';
import { DessertBlock } from '../Home/DessertBlock';
const Vegan = () => (
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
                                Веганская кухня!
                            </Heading>
                            <Box
                                as='p'
                                fontSize='16px'
                                color='var(--dark-light-color1)'
                                m='12px auto 32px auto'
                                width='696px'
                            >
                                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет
                                попробовать вегетарианскую диету и готовить вкусные вегетарианские
                                блюда.
                            </Box>
                            <SearchList></SearchList>
                            <Tabs defaultIndex={2}>
                                <TabList
                                    justifyContent='center'
                                    fontSize='16px'
                                    fontWeight='600'
                                    flexWrap='wrap'
                                >
                                    {[
                                        'Закуски',
                                        'Первые блюда',
                                        'Вторые блюда',
                                        'Гарниры',
                                        'Десерты',
                                        'Выпечка',
                                        'Сыроедические блюда',
                                        'Напитки',
                                    ].map((tab) => (
                                        <Tab
                                            key={tab}
                                            sx={{
                                                color: 'var(--primary-color8)', // Цвет неактивного таба
                                                '&[aria-selected="true"]': {
                                                    color: 'var(--primary-color9)', // Цвет активного таба
                                                },
                                            }}
                                        >
                                            {tab}
                                        </Tab>
                                    ))}
                                </TabList>

                                <TabPanels>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                    <TabPanel>
                                        <p>
                                            <CardsJuciest cardCount={8} />
                                        </p>
                                    </TabPanel>
                                </TabPanels>
                            </Tabs>

                            <ButttonMore />
                        </Box>
                        <DessertBlock />
                    </Box>
                    <UserMetrics />
                </Flex>
            </>
        </main>
        <FooterMobile />
    </>
);

export default Vegan;
