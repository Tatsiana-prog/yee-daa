import { Flex, FormLabel, Switch } from '@chakra-ui/react';

export const SwitchWithLabel = () => (
    <Flex>
        <FormLabel
            htmlFor='custom-switch'
            mb='0'
            mr='14px'
            fontSize='16px'
            fontWeight='500'
            color='#000000'
        >
            Исключить мои аллергены
        </FormLabel>
        <Switch id='custom-switch' />
    </Flex>
);
