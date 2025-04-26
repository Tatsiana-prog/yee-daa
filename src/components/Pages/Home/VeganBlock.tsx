import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

import { CardsCounter } from '../../Buttons/Cardscounter';
import { LikesCounter } from '../../Buttons/LikesCounter';

interface VeganBlockCard {
    category: {
        name: string;
        icon: string;
    };
    type: string;
    description: string;
}

interface FoodDish {
    title: string;
    image: string;
}

const VeganBlockCards: VeganBlockCard[] = [
    {
        category: {
            name: 'Вторые блюда',
            icon: 'assets/icons/sidebar/icon3.svg',
        },
        type: 'Картошка, тушенная с болгарским перцем и фасолью в томатном соусе',
        description:
            'Картошка, тушенная с болгарским перцем, фасолью, морковью и луком, - вариант сытного блюда на каждый день...',
    },
    {
        category: {
            name: 'Вторые блюда',
            icon: 'assets/icons/sidebar/icon3.svg',
        },
        type: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными...',
    },
];

const fooddish: FoodDish[] = [
    {
        title: 'Домашние сырные палочки',
        image: 'assets/icons/sidebar/icon10.svg',
    },
    {
        title: 'Панкейки',
        image: 'assets/icons/sidebar/icon8.svg',
    },
    {
        title: 'Воздушное банановое печенье на сковороде',
        image: 'assets/icons/sidebar/icon5.svg',
    },
];

export const VeganBlock: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Тип для состояния

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Box mt='40px' pt='24px' borderTop=' 1px solid rgba(0, 0, 0, 0.08)'>
            <Flex
                justifyContent='space-between'
                mb='24px'
                gap='50px'
                flexDirection={{ base: 'column', md: 'row' }}
            >
                <Heading as='h2' mb='20px' textAlign={{ base: 'center', md: 'left' }}>
                    Веганская кухня
                </Heading>
                <Box textAlign='left'>
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету.
                </Box>
            </Flex>
            <Flex gap='24px' flexDirection={{ base: 'column', xxl: 'row' }}>
                <Flex gap='24px' flexDirection={{ base: 'column', md: 'row' }}>
                    {VeganBlockCards.map((VeganBlockCardItem, index) => (
                        <Box
                            key={index}
                            width='322px'
                            height='100%'
                            p='24px'
                            background='white'
                            borderRadius='8px'
                            border='1px solid rgba(0, 0, 0, 0.08)'
                            onClick={() => toggleDescription(index)}
                            style={{ cursor: 'pointer' }}
                        >
                            <Heading
                                as='h3'
                                fontSize='20px'
                                lineHeight='28px'
                                fontWeight='500'
                                mb='8px'
                                overflow='hidden'
                                whiteSpace={expandedIndex === index ? 'normal' : 'nowrap'}
                                textOverflow='ellipsis'
                                className={expandedIndex === index ? '' : 'limit-header'}
                            >
                                {VeganBlockCardItem.type}
                            </Heading>
                            <Box
                                as='p'
                                fontSize='14px'
                                lineHeight='2'
                                mb='23px'
                                textAlign='left'
                                overflow='hidden'
                                display={expandedIndex === index ? 'block' : '-webkit-box'}
                                sx={{
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: expandedIndex === index ? 'unset' : 3, // Ограничение на 3 строки
                                    textOverflow: 'ellipsis',
                                }}
                                className={expandedIndex === index ? '' : 'limit-text'} // Применяем класс в зависимости от состояния
                            >
                                {expandedIndex === index
                                    ? VeganBlockCardItem.description
                                    : `${VeganBlockCardItem.description.substring(0, 100)}...`}
                            </Box>
                            <Flex justifyContent='space-between'>
                                <Flex
                                    gap='8px'
                                    p='4px 8px'
                                    bg='var(--primary-color4)'
                                    borderRadius='8px'
                                >
                                    <Box>
                                        <Image
                                            width='24px'
                                            height='24px'
                                            src={VeganBlockCardItem.category.icon}
                                            alt={VeganBlockCardItem.category.name}
                                        />
                                    </Box>
                                    <Box>{VeganBlockCardItem.category.name}</Box>
                                </Flex>
                                <Flex>
                                    <CardsCounter />
                                    <LikesCounter />
                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
                <Flex flexDirection='column' gap='12px'>
                    {fooddish.map((fooddishItem, index) => (
                        <Flex
                            key={index}
                            p='16px 24px'
                            justifyContent='space-between'
                            borderRadius='8px'
                            border='1px rgba(0, 0, 0, 0.08) solid'
                            flexDirection={{ base: 'column', md: 'row' }}
                            gap='25px'
                        >
                            <Flex gap='12px' alignItems='center'>
                                <Image
                                    width='40px'
                                    height='40px'
                                    src={fooddishItem.image}
                                    alt={fooddishItem.title}
                                />
                                <Box as='span' fontSize='20px' fontWeight='500'>
                                    {fooddishItem.title}
                                </Box>
                            </Flex>
                            <Button
                                p='6px 12px'
                                color='var(--primary-color3)'
                                background='none'
                                borderRadius='8px'
                                border='1px solid var(--primary-color3)'
                            >
                                Готовить
                            </Button>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Box>
    );
};
