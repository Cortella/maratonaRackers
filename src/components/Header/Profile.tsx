import { Flex, Box, Text, Avatar } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && ( 
        <Box mr="4">
          <Text>Bruno Machado</Text>
          <Text color="gray.300" fontSize="small">
            bruno.nicolau@dtidigital.com.br
          </Text>
        </Box>
      )}
      <Avatar size="md" name="Bruno Machado" src="https://avatars.githubusercontent.com/u/41315834?s=400&u=573a75de70ccb44a86c684307562a89ab02139ea&v=4"/>
    </Flex>
  );
}