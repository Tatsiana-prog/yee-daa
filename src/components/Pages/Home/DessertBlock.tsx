import { Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React, { useState } from 'react';

import { CardsCounter } from '../../Buttons/Cardscounter';
import { LikesCounter } from '../../Buttons/LikesCounter';

interface DessertBlockCard {
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

const DessertBlockCards: DessertBlockCard[] = [
    {
        category: {
            name: 'Детские блюда',
            icon: '/src/assets/icons/sidebar/icon3.svg',
        },
        type: 'Бананово-молочное желе',
        description:
            'Молочное желе – это просто, вкусно и полезно, ведь для его приготовления в качестве основы используется молоко.',
    },
    {
        category: {
            name: 'Детские блюда',
            icon: '/src/assets/icons/sidebar/icon3.svg',
        },
        type: 'Нежный сливочно-сырный крем для кексов',

        description:
            'Сливочно-сырным кремом можно украсить кексы, либо другую выпечку, а также этим кремом можно наполнить заварные пирожные.',
    },
];

const fooddish: FoodDish[] = [
    {
        title: 'Домашние сырные палочки',
        image: '/src/assets/icons/sidebar/icon10.svg',
    },
    {
        title: 'Панкейки',
        image: '/src/assets/icons/sidebar/icon8.svg',
    },
    {
        title: 'Воздушное банановое печенье на сковороде',
        image: '/src/assets/icons/sidebar/icon5.svg',
    },
];

export const DessertBlock: React.FC = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleDescription = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <Box mt='40px' pt='24px' borderTop=' 1px solid rgba(0, 0, 0, 0.08)'>
            <Flex justifyContent='space-between' mb='24px'>
                <Heading as='h2'>Десерты, выпечка</Heading>
                <Box width='668px' textAlign='left'>
                    Без них невозможно представить себе ни современную, ни традиционную кулинарию.
                    Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из
                    теста многообразны и невероятно популярны.
                </Box>
            </Flex>
            <Flex gap='24px' flexDirection={{ base: 'column', xxl: 'row' }}>
                <Flex gap='24px' flexDirection={{ base: 'column', md: 'row' }}>
                    {DessertBlockCards.map((DessertBlockCardItem, index) => (
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
                                {DessertBlockCardItem.type}
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
                                    WebkitLineClamp: expandedIndex === index ? 'unset' : 3,
                                    textOverflow: 'ellipsis',
                                }}
                                className={expandedIndex === index ? '' : 'limit-text'}
                            >
                                {expandedIndex === index
                                    ? DessertBlockCardItem.description
                                    : `${DessertBlockCardItem.description.substring(0, 100)}...`}
                            </Box>
                            <Flex justifyContent='space-between'>
                                <Flex
                                    gap='8px'
                                    alignItems='center'
                                    p='4px 8px'
                                    bg='var(--primary-color4)'
                                    borderRadius='8px'
                                >
                                    <Box w='40px' h='40px'>
                                        <Image
                                            src={DessertBlockCardItem.category.icon}
                                            alt={DessertBlockCardItem.category.name}
                                        />
                                    </Box>
                                    <Box>{DessertBlockCardItem.category.name}</Box>
                                </Flex>
                                <Flex>
                                    <CardsCounter />
                                    <LikesCounter />
                                </Flex>
                            </Flex>
                        </Box>
                    ))}
                </Flex>
                <Flex flexDirection='column' gap='12px' w='668px'>
                    {fooddish.map((fooddishItem, index) => (
                        <Flex
                            key={index}
                            p='16px 24px'
                            justifyContent='space-between'
                            borderRadius='8px'
                            border='1px rgba(0, 0, 0, 0.08) solid'
                        >
                            <Flex gap='12px' alignItems='center'>
                                <Image
                                    src={fooddishItem.image}
                                    alt={fooddishItem.title}
                                    w='40px'
                                    h='40px'
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
