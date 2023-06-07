import PhoneTop from './PhoneTop';
import PhoneBelow from './PhoneBelow';
import PhoneMiddle from './PhoneMiddle';
import { Box, Flex } from '@chakra-ui/react';

function RightColPhone() {

  return (
    <>
      {/* <Flex> */}
        <PhoneBelow />
        <PhoneMiddle />
        <PhoneTop />
      {/* </Flex> */}
    </>
  )
}

export default RightColPhone