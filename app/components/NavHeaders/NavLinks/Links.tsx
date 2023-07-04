
import NextLink from "next/link"
import { Box, Link } from "@chakra-ui/react";

function Links() {
    return (
        <Box gap={4} display={{ base:'none', md:'flex' }} color="#fefefe">
            <Box>
                <Link as={NextLink} href='/docs' _hover={{ textDecoration: "none" }}>
                    Docs
                </Link>
            </Box>
            <Box>
                <Link as={NextLink} href='https://reactnavigation.org/blog' _hover={{ textDecoration: "none" }}>
                    Blog
                </Link>
            </Box>
            <Box>
                <Link as={NextLink} href='/help' _hover={{ textDecoration: "none" }}>
                    Help
                </Link>
            </Box>
        </Box>
    )
}

export default Links