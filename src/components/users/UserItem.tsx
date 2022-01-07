import {
  Box,
  Button,
  Icon,
  Td,
  Text,
  Tr,
  Checkbox,  
} from '@chakra-ui/react';
import { RiPencilLine } from 'react-icons/ri';

interface NavSectionProps {
  id: number;
  name: string;
  email: string;
  data: string;
  isWideVersion: boolean;
}

export function UserItem({ id, name, email, data, isWideVersion }: NavSectionProps) {
  return (
    <Tr key={id}>
      <Td px={["4", "4", "6"]}>
        <Checkbox colorScheme="pink" />
      </Td>
      <Td>
        <Box>
          <Text fontWeight="bold">{name}</Text>
          <Text fontSize="sm" color="gray.300">{email}</Text>
        </Box>
      </Td>
      {isWideVersion && <Td> {data} </Td>}
      <Td>
        <Button
          as="a"
          size="sm"
          fontSize="sm"
          colorScheme="purple"
          leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
        >
          {isWideVersion ? 'Editar' : ''}
        </Button>
      </Td>
    </Tr>
  );
}
