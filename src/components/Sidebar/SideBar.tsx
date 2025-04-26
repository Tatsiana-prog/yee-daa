import {
    Accordion as ChakraAccordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Button,
    Flex,
    Image,
    Link,
    Stack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import IconExit from 'assets/icons/icon-exit.png';
import data from '../../data/menu.json';

export const SideBar = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>(null);

    return (
        <Flex
            as='aside'
            flexDirection='column'
            justifyContent='space-between'
            p='32px 0'
            display={{ lg: 'flex', md: 'none', base: 'none' }}
        >
            <Stack height='644px' overflowY='scroll' className='sidebar-scroll'>
                <ChakraAccordion allowMultiple width='256px' pt='14px' pl='10px' pb='10px' pr='4px'>
                    {Object.entries(data).map(([key, item]) => {
                        const dataTestId = item.name === 'Веганская кухня' ? 'vegan-cuisine' : null;

                        return (
                            <AccordionItem key={key} border='none' data-test-id={dataTestId}>
                                <AccordionButton
                                    onClick={() =>
                                        setActiveIndex((prev) => (prev === key ? null : key))
                                    }
                                    display='flex'
                                    justifyContent='space-between'
                                    fontSize='16px'
                                    pt='12px'
                                    pl='8px'
                                    pb='12px'
                                    pr='16px'
                                    fontWeight={activeIndex === key ? '700' : '500'}
                                    bg={
                                        activeIndex === key
                                            ? 'var(--primary-color2)'
                                            : 'transparent'
                                    }
                                    _hover={{ bg: 'var(--primary-color4)' }}
                                >
                                    <Flex align='center'>
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                            boxSize='24px'
                                            mr='16px'
                                        />
                                        {item.name}
                                    </Flex>
                                    <AccordionIcon />
                                </AccordionButton>

                                <AccordionPanel textAlign='left'>
                                    {Object.entries(item.custom).map(([typeKey, type]) => (
                                        <Box key={typeKey}>
                                            <Link
                                                as={RouterLink}
                                                to='/veganskaya-kuhnya'
                                                mt='16px'
                                                mb='16px'
                                                p='11px'
                                                display='block'
                                                borderLeft='2px solid var(--primary-color1)'
                                                transition='border-left 0.3s linear'
                                                _hover={{
                                                    pl: '13px',
                                                    borderLeft: '8px solid var(--primary-color1)',
                                                    bg: 'var(--primary-color4)',
                                                }}
                                            >
                                                {type.title}
                                            </Link>
                                        </Box>
                                    ))}
                                </AccordionPanel>
                            </AccordionItem>
                        );
                    })}
                </ChakraAccordion>
            </Stack>

            <Box as='footer' px='24px' textAlign='left'>
                <Box
                    as='p'
                    fontSize='12px'
                    lineHeight='16px'
                    fontWeight='500'
                    color='rgba(0, 0, 0, 0.24)'
                    mb='16px'
                >
                    Версия программы 03.25
                </Box>
                <Box
                    as='p'
                    fontSize='12px'
                    lineHeight='16px'
                    fontWeight='400'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    Все права защищены,
                    <br />
                    ученический файл, ©Клевер Технолоджи, 2025
                </Box>
                <Stack>
                    <Button
                        bg='none'
                        textAlign='left'
                        padding='0'
                        justifyContent='flex-start'
                        mt='16px'
                    >
                        <Box as='span' mr='6px'>
                            <Image src={IconExit} alt='icon'></Image>
                        </Box>
                        Выйти
                    </Button>
                </Stack>
            </Box>
        </Flex>
    );
};
