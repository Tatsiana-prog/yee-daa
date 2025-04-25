import 'swiper/swiper-bundle.css';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, IconButton, Image, Text, useBreakpointValue } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper'; 
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'; 

import { CardsCounter } from '../Buttons/Cardscounter';
import { LikesCounter } from '../Buttons/LikesCounter';

// Данные для рецептов
const RecipesNew = [
    {
        category: {
            name: 'Первые блюда',
            icon: '.../../../../assets/icons/sidebar/icon3.svg',
        },
        type: 'Солянка с грибами',
        description:
            'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
        image: '../../../../assets/image/recipe/new/first/1.png',
    },
    {
        category: {
            name: 'Веганские блюда',
            icon: '../../../../assets/icons/sidebar/icon7.svg',
        },
        type: 'Капустные котлеты',
        description:
            'Капустные котлеты по этому рецепту получаются необычайно пышными и невероятно вкусными.',
        image: '../../../../assets/image/recipe/new/vegan/1.png',
    },
    {
        category: {
            name: 'Дессерты, выпечка',
            icon: '../../../../assets/icons/sidebar/icon3.svg',
        },
        type: 'Оладьи на кефире "Пышные"',
        description:
            'Очень вкусные и нежные оладьи на кефире. Настоятельно рекомендую пышные кефирные оладьи на завтрак.',
        image: '../../../../assets/image/recipe/new/dessert/1.png',
    },
    {
        category: {
            name: 'Салаты',
            icon: '../../../../assets/icons/sidebar/icon1.svg',
        },
        type: 'Салат "Здоровье"',
        description: 'Сельдерей очень полезен для здоровья, пора набираться витаминов.',
        image: '../../../../assets/image/recipe/new/salat/1.png',
    },
];

// Компонент заголовка рецепта с возможностью разворачивания
const RecipeHeading = ({ type }: { type: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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
            onClick={() => setIsExpanded(!isExpanded)}
            cursor='pointer'
            title={type}
        >
            {type}
        </Heading>
    );
};

// Компонент описания с возможностью разворачивания
const DescriptionBox = ({ description }: { description: string }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Text
            fontSize='14px'
            lineHeight='20px'
            mb='26px'
            textAlign='left'
            overflow='hidden'
            display={isExpanded ? 'block' : '-webkit-box'}
            sx={{
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: isExpanded ? 'unset' : 3,
            }}
            onClick={() => setIsExpanded(!isExpanded)}
            cursor='pointer'
        >
            {description}
        </Text>
    );
};

// Компонент карточки рецепта
const RecipeCard = ({ recipe }: { recipe: (typeof RecipesNew)[0] }) => (
    <Box
        width='100%'
        maxWidth='322px'
        height='414px'
        borderRadius='8px'
        border='1px rgba(0, 0, 0, 0.08) solid'
        mx='auto'
        bg='white'
        boxShadow='sm'
        transition='transform 0.2s, box-shadow 0.2s'
        _hover={{ transform: 'translateY(-4px)', boxShadow: 'md' }}
    >
        <Image
            height='230px'
            width='100%'
            src={recipe.image || '/placeholder.svg'}
            alt={recipe.type}
            objectFit='cover'
            borderTopLeftRadius='8px'
            borderTopRightRadius='8px'
        />
        <Box p='16px 24px 20px 16px'>
            <RecipeHeading type={recipe.type} />
            <DescriptionBox description={recipe.description} />
            <Flex justifyContent='space-between' alignItems='center'>
                <Flex
                    gap='8px'
                    p='3px 8px'
                    bg='var(--primary-color7)'
                    borderRadius='8px'
                    alignItems='center'
                >
                    <Box>
                        <Image
                            src={recipe.category.icon || '/placeholder.svg'}
                            alt={recipe.category.name}
                            boxSize='16px'
                        />
                    </Box>
                    <Text fontSize='14px' noOfLines={1}>
                        {recipe.category.name}
                    </Text>
                </Flex>
                <Flex>
                    <CardsCounter />
                    <LikesCounter />
                </Flex>
            </Flex>
        </Box>
    </Box>
);

export const CardsNew = () => {
    const swiperRef = useRef<SwiperType | null>(null); // Указание типа ссылки

    const slidesPerView =
        useBreakpointValue({ base: 1, sm: 1.5, md: 2, lg: 2, xl: 3, xxl: 4 }) || 1;

    // Обработчики для кнопок навигации
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <Box position='relative' px={{ base: 4, md: 10 }} py={6}>
            <SwiperComponent
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                pagination={{ clickable: true, dynamicBullets: true }}
                loop={true}
                grabCursor={true}
                centeredSlides={slidesPerView < 2}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {RecipesNew.map((recipe, index) => (
                    <SwiperSlide key={index}>
                        <RecipeCard recipe={recipe} />
                    </SwiperSlide>
                ))}
            </SwiperComponent>

            <IconButton
                aria-label='Previous slide'
                icon={<ChevronLeftIcon boxSize={6} />}
                position='absolute'
                left={0}
                top='50%'
                transform='translateY(-50%)'
                zIndex={2}
                borderRadius='full'
                bg='white'
                boxShadow='md'
                _hover={{ bg: 'gray.100' }}
                onClick={handlePrev}
            />
            <IconButton
                aria-label='Next slide'
                icon={<ChevronRightIcon boxSize={6} />}
                position='absolute'
                right={0}
                top='50%'
                transform='translateY(-50%)'
                zIndex={2}
                borderRadius='full'
                bg='white'
                boxShadow='md'
                _hover={{ bg: 'gray.100' }}
                onClick={handleNext}
            />
        </Box>
    );
};
