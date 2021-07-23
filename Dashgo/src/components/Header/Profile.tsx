import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box
          mr='4'
          textAlign='right'
        >
          <Text>Walef Xavier</Text>
          <Text color='gray.300' fontSize='small'>
            dvbliw@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size='md' name='Walef Xavier' src='https://github.com/dvbliw.png' />
    </Flex>
  )
}