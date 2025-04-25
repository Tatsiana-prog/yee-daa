import { Box, Button, Checkbox, CheckboxGroup, Collapse, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

export const SelectList: React.FC = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => setIsOpen(!isOpen);

    const handleChange = (value: string[]) => {
        setSelectedOptions(value);
    };

    const handleClose = () => setIsOpen(false); // Функция для закрытия

    return (
        <Box position='relative'>
            <Button
                onClick={handleToggle}
                w='234px'
                h='48px'
                borderRadius='6px'
                background='white'
                border='1px solid rgba(0, 0, 0, 0.1)'
                color='var(--dark-light-color1)'
                pt='13px'
                pr='48px'
                pb='13px'
                pl='16px'
                transition='all 0.3s linear'
                _hover={{
                    background: 'var(--primary-color4)',
                }}
            >
                {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Выберите из списка...'}
            </Button>
            <Collapse in={isOpen}>
                <Box
                    mt={2}
                    borderWidth='1px'
                    borderRadius='md'
                    p='25px'
                    position='absolute'
                    top='50px'
                    left='0px'
                    zIndex='5'
                    bg='white'
                    w='100%'
                >
                    <CheckboxGroup
                        colorScheme='green'
                        value={selectedOptions}
                        onChange={handleChange}
                    >
                        <Stack spacing={1} direction='column' gap='30px'>
                            <Checkbox value='Молочные продукты'>Молочные продукты</Checkbox>
                            <Checkbox value='Яйцо'>Яйцо</Checkbox>
                            <Checkbox value='Рыба'>Рыба</Checkbox>
                            <Checkbox value='Моллюски'>Моллюски</Checkbox>

                            <Checkbox value='Орехи'>Орехи</Checkbox>
                            <Checkbox value='Томат (помидор)'>Томат (помидор)</Checkbox>
                            <Checkbox value='Цитрусовые'>Цитрусовые</Checkbox>
                            <Checkbox value='Клубника (ягоды)'>Клубника (ягоды)</Checkbox>
                            <Checkbox value='Шоколад'>Шоколад</Checkbox>
                        </Stack>
                    </CheckboxGroup>
                    <Button mt='25px' onClick={handleClose} colorScheme='green'>
                        Закрыть
                    </Button>
                </Box>
            </Collapse>
        </Box>
    );
};
