import { Box, Flex, Heading, Image } from '@chakra-ui/react';

const culinar = [
    {
        name: 'Елена Высоцкая',
        image: '../../../public/assets/image/culinarblogs/1.png',
        contacts: '@elenapovar',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Alex Cook',
        image: '../../../public/assets/image/culinarblogs/2.png',
        contacts: '@funtasticooking',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
    {
        name: 'Екатерина Казакова',
        image: '../../../public/assets/image/culinarblogs/3.png',
        contacts: '@bake_and_pie',
        text: 'Как раз после праздников, когда мясные продукты еще остались, но никто их уже не хочет, время варить солянку.',
    },
];

export const CulinarBlog = () => (
    <>
        <Flex gap='16px' mt='32px' flexDirection={{ base: 'column', xl: 'row' }}>
            {culinar.map((culinarItem, index) => (
                <Box
                    key={index}
                    width='426.67'
                    p='24px 24px 20px 24px'
                    background='white'
                    borderRadius='8px'
                    border='1px solid rgba(0, 0, 0, 0.08)'
                >
                    <Flex mb='28px'>
                        <Image
                            width='48px'
                            height='48px'
                            src={culinarItem.image}
                            alt={culinarItem.name}
                        />
                        <Box ml='16px'>
                            <Heading as='h4' fontSize='18px' textAlign='left'>
                                {culinarItem.name}
                            </Heading>
                            <Box as='p' textAlign='left' color='var(--dark-light-color)'>
                                {culinarItem.contacts}
                            </Box>
                        </Box>
                    </Flex>
                    <Box as='p' textAlign='left'>
                        {culinarItem.text}
                    </Box>
                </Box>
            ))}
        </Flex>
    </>
);
