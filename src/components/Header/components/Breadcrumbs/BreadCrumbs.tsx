import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const HeaderNav = () => {
    const location = useLocation();

    const renderBreadcrumbs = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <Breadcrumb fontSize='16px' lineHeight='24px' separator='>'>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink as={Link} to='/' color='var(--black-color)'>
                                Главная
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                );
            case '/veganskaya-kuhnya':
                return (
                    <Breadcrumb fontSize='16px' lineHeight='24px' separator='>'>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to='/' color='var(--dark-light-color)'>
                                Главная
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink
                                as={Link}
                                to='/veganskaya-kuhnya'
                                color='var(--dark-light-color)'
                            >
                                Веганская кухня
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#' color='var(--black-color)'>
                                Вторые блюда
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                );
            case '/samoe-sochnoe':
                return (
                    <Breadcrumb fontSize='16px' lineHeight='24px' separator='>'>
                        <BreadcrumbItem>
                            <BreadcrumbLink as={Link} to='/' color='var(--dark-light-color)'>
                                Главная
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink
                                as={Link}
                                to='/samoe-sochnoe'
                                color='var(--black-color)'
                            >
                                Самое сочное
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                );
            default:
                return null;
        }
    };

    return renderBreadcrumbs();
};
