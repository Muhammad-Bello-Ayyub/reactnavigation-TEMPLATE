
import NextLink from "next/link"
import { Box, Link } from "@chakra-ui/react";

function Links() {
    return (
        <Box gap={4} display={{ base:'none', md:'flex' }} color="#fefefe">
            <Box>
                <Link as={NextLink} href='/docs'>
                    Docs
                </Link>
            </Box>
            <Box>
                <Link as={NextLink} href='/blog'>
                    Blog
                </Link>
            </Box>
            <Box>
                <Link as={NextLink} href='/help'>
                    Help
                </Link>
            </Box>
        </Box>
    )
}

export default Links