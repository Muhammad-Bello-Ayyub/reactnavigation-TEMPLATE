import {
    Box,
    Breadcrumb,
    BreadcrumbItem,
    // BreadcrumbLink,
    // BreadcrumbSeparator,
} from '@chakra-ui/react'
import { GoHome } from "react-icons/go";
import { ChevronRightIcon } from '@chakra-ui/icons'

function Breadcrumbs() {
  return (
    <Box h='30px' fontSize={'13px'}>
        <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
            <BreadcrumbItem>
                {<GoHome />}
            </BreadcrumbItem>

            <BreadcrumbItem>
                <Box>Fundamentals</Box>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <Box bg={'whiteAlpha.200'} p={1} borderRadius={10}>Getting started</Box>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
  )
}

export default Breadcrumbs