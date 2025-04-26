import { Button, Flex, Image } from '@chakra-ui/react';

import ReciepeIcon from 'assets/icons/icon-recipe.svg';
import { CardStorage } from '../Metrics/CardStorage';
import { FollowersCounter } from '../Metrics/FollowersCounter';
import { LikeCounter } from '../Metrics/LikeCounter';

export const UserMetrics = () => (
    <Flex
        flexDirection='column'
        justifyContent='space-between'
        alignItems='center'
        display={{ lg: 'flex', md: 'none', base: 'none' }}
    >
        <Flex flexDirection='column' gap='32px' pt='16px' pr='56px' pl='114px'>
            <CardStorage />
            <FollowersCounter />
            <LikeCounter />
        </Flex>
        <Button
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '208px',
                height: '208px',
                right: '-26px',
                padding: '0',
                background:
                    'radial-gradient(ellipse 50.00% 50.00% at 50.00% 50.00%, rgba(196, 255, 97, 0.70) 0%, rgba(255, 255, 255, 0) 100%)',
            }}
        >
            <Image
                w='40px'
                h='40px'
                src={ReciepeIcon}
                alt='Save'
                style={{
                    marginBottom: '12px',
                }}
            />
            <span
                style={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(0 , 0, 0, 0.64)',
                }}
            >
                Записать рецепт
            </span>
        </Button>
    </Flex>
);
