import { Box, Button, Flex, Grid, Heading, Image } from '@chakra-ui/react';
import { useState } from 'react';

import { CardsCounter } from '../Buttons/Cardscounter';
import { LikesCounter } from '../Buttons/LikesCounter';
import data1 from './../../data/juciest.json';

const RecipesJuciest = data1;

interface CardsJuciestProps {
    cardCount: number;
}

export const CardsJuciest: React.FC<CardsJuciestProps> = ({ cardCount }) => {
    const displayedRecipes = RecipesJuciest.slice(0, cardCount);

    return (
        <Grid
            mt='24px'
            mb='16px'
            templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
                xl: 'repeat(1, 1fr)',
                xxl: 'repeat(2, 2fr)',
            }}
            gap='24px'
        >
            {displayedRecipes.map((recipe, index) => (
                <Flex
                    key={index}
                    width={{ xxl: '668px', xl: '100%' }}
                    height={{ md: '244px', sm: '' }}
                    alignItems='center'
                    borderRadius='6px'
                    border='1px rgba(0, 0, 0, 0.08) solid'
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <Box width={{ base: '100%', md: '50%' }}>
                        <Image
                            width={{ xxl: '333px', xl: '100%', base: '100%' }}
                            height={{ xxl: '244px', sm: '244px' }}
                            objectFit='cover'
                            borderTopLeftRadius='8px'
                            borderBottomLeftRadius={{ sm: '8px', base: '0px' }}
                            borderTopRightRadius={{ sm: '0px', base: '8px' }}
                            src={recipe.image}
                            alt={recipe.image}
                        />
                    </Box>
                    <Box
                        as='div'
                        width={{ base: '100%', md: '50%' }}
                        padding='20px 24px'
                        boxSizing='border-box'
                    >
                        <Flex
                            justifyContent='space-between'
                            mb='24px'
                            flexDirection={{ base: 'column', md: 'row' }}
                            gap='25px'
                        >
                            <Flex gap='8px' bg='var(--primary-color4)' p='4px 8px'>
                                <Image
                                    width='16px'
                                    height='16px'
                                    src={recipe.category.icon}
                                    alt={recipe.category.name}
                                />
                                <Box fontSize='14px'>{recipe.category.name}</Box>
                            </Flex>
                            <Flex>
                                <CardsCounter />
                                <LikesCounter />
                            </Flex>
                        </Flex>
                        <RecipeHeading type={recipe.type} />
                        <Box display={{ base: 'none', md: 'block' }}>
                            <DescriptionBox description={recipe.description} />
                        </Box>
                        <Flex
                            gap='8px'
                            justifyContent='flex-end'
                            flexDirection={{ base: 'column', md: 'row' }}
                        >
                            <Button
                                padding='6px 12px'
                                borderRadius='6px'
                                border='1px rgba(0, 0, 0, 0.48) solid'
                                background='rgba(255, 255, 255, 0.06)'
                                color='black'
                            >
                                Сохранить
                            </Button>
                            <Button
                                padding='6px 12px'
                                borderRadius='6px'
                                border='1px rgba(0, 0, 0, 0) solid'
                                background='black'
                                color='white'
                            >
                                Готовить
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            ))}
        </Grid>
    );
};

const RecipeHeading: React.FC<{ type: string }> = ({ type }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Heading
            as='h3'
            fontSize='20px'
            lineHeight='28px'
            fontWeight='500'
            mb='8px'
            whiteSpace={isExpanded ? 'normal' : 'nowrap'}
            overflow='hidden'
            textOverflow='ellipsis'
            onClick={handleToggle}
            cursor='pointer'
        >
            {type}
        </Heading>
    );
};

interface DisplayType {
    base?: string; // Опциональное свойство
}

const DescriptionBox: React.FC<{ description: string; display?: DisplayType }> = ({
    description,
    display,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Box
            as='p'
            fontSize='14px'
            lineHeight='20px'
            mb='26px'
            textAlign='left'
            overflow='hidden'
            display={isExpanded ? 'block' : display?.base || '-webkit-box'}
            sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: isExpanded ? 'unset' : 3,
            }}
            onClick={handleToggle}
            cursor='pointer'
        >
            {description}
        </Box>
    );
};
