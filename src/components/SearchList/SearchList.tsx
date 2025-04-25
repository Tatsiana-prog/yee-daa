import {
    Box,
    Flex,
    HStack,
    IconButton,
    Image,
    Input,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    VStack,
} from '@chakra-ui/react';
import React from 'react';

import ElementIcon1 from '../../assets/icons/icon-filter.png';
import ElementIcon2 from '../../assets/icons/icon-filter.png';
import ElementIcon3 from '../../assets/icons/icon-filter.png';
import ElementIcon4 from '../../assets/icons/icon-filter.png';
import ForbidIcon from '../../assets/icons/icon-filter.png';
import { SelectList } from '../../components/SearchList/components/SelectList';
import { SwitchWithLabel } from '../../components/SearchList/components/SwitchButton';

interface Framework {
    label: string;
    value: string;
    icon: string;
}

interface SelectTriggerProps {
    selectedItem: Framework | null;
    onToggle: () => void;
}

const SelectTrigger: React.FC<SelectTriggerProps> = ({ selectedItem, onToggle }) => (
    <IconButton
        width='48px'
        height='48px'
        p='12px'
        border-radius='6px'
        onClick={onToggle}
        variant='outline'
        size='sm'
        aria-label='Toggle framework selection'
        _hover={{ borderColor: 'blue.100' }}
    >
        {selectedItem ? (
            <img src={selectedItem.icon} alt={selectedItem.label} />
        ) : (
            <img src={ForbidIcon} alt='No selection' />
        )}
    </IconButton>
);

export const SearchList = () => {
    const [selectedItem, setSelectedItem] = React.useState<Framework | null>(null);
    const [isOpen, setIsOpen] = React.useState(false);

    const frameworks: Framework[] = [
        { label: 'Элемент1', value: 'Элемент1', icon: ElementIcon1 },
        { label: 'Элемент2', value: 'Элемент2', icon: ElementIcon2 },
        { label: 'Элемент3', value: 'Элемент3', icon: ElementIcon3 },
        { label: 'Элемент4', value: 'Элемент4', icon: ElementIcon4 },
    ];

    const handleSelect = (framework: Framework) => {
        setSelectedItem(framework);
        setIsOpen(false);
    };

    return (
        <Box m=' 0 auto 56px' p='0 25px'>
            <form>
                <Flex gap='12px' justifyContent='center' position='relative' display='inline-flex'>
                    <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
                        <PopoverTrigger>
                            <SelectTrigger
                                selectedItem={selectedItem}
                                onToggle={() => setIsOpen(!isOpen)}
                            />
                        </PopoverTrigger>
                        <PopoverContent top='50px' width='250px'>
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <VStack spacing={1} padding={2}>
                                {frameworks.map((framework) => (
                                    <HStack
                                        key={framework.value}
                                        onClick={() => handleSelect(framework)}
                                        cursor='pointer'
                                        padding={2}
                                        width='100%'
                                        _hover={{ bg: 'gray.100' }}
                                    >
                                        <img
                                            src={framework.icon}
                                            alt={framework.label}
                                            style={{ width: '24px', height: '24px' }}
                                        />
                                        <span>{framework.label}</span>
                                    </HStack>
                                ))}
                            </VStack>
                        </PopoverContent>
                    </Popover>
                    <Box position='relative'>
                        <Input
                            pt='13px'
                            pr='48px'
                            pb='13px'
                            pl='16px'
                            w={{ base: '100%', md: '458px' }}
                            h='48px'
                            placeholder='Название или ингредиент...'
                            sx={{
                                '::placeholder': {
                                    FontSize: '18px',
                                    color: 'var(--primary-color8)',
                                },
                            }}
                        />
                        <Box
                            position='absolute'
                            top='15px'
                            right='15px'
                            cursor='pointer'
                            _hover={{ transform: 'scale(1.1)', borderColor: 'gray.100' }}
                        >
                            <button type='submit'>
                                <Image src='/src/assets/icons/icon-search.png' alt='icon' />
                            </button>
                        </Box>
                    </Box>{' '}
                </Flex>
                <Flex
                    gap='10px'
                    align='center'
                    mt='24px'
                    justifyContent='center'
                    flexDirection={{ base: 'column', md: 'row' }}
                >
                    <SwitchWithLabel></SwitchWithLabel>
                    <SelectList></SelectList>
                </Flex>
            </form>
        </Box>
    );
};
