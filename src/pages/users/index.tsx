import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Text,
  Spinner,
  useBreakpointValue
} from '@chakra-ui/react';

import { RiAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Sidebar } from '../../components/SideBar';
import { Pagination } from '../../components/Pagination';
import Link from 'next/link';
import { UserItem } from '../../components/users/UserItem';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

export default function UserList() {
  const { data, isLoading, error} = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();

    const users = data.users.map(user => {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-br', {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        })
      }
    })

    return users;
  })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })


  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal"> Usuários </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          {
            isLoading ? (
              <Flex justify="center">
                <Spinner />
              </Flex>
            ) : error ? (
              <Flex justify="center">
                <Text> Falha ao obter dados dos usuários</Text>
              </Flex>
            ) : (
              <>
                <Table colorScheme="whiteAlpha">
                  <Thead>
                    <Tr>
                      <Th px={["4", "4", "6"]} color="gray.300" width="8">
                        <Checkbox colorScheme="pink" />
                      </Th>
                      <Th>Usuário</Th>
                      {isWideVersion && <Th>Data de Cadastro</Th>}
                      <Th width="8"></Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {data.map( user => {
                      return(
                        <UserItem id={user.id} name={user.name} email={user.email} data={user.created_at} isWideVersion={isWideVersion} />
                      )
                    })}
                    <UserItem id={20} name={"Matheus Freitas"} email={"Matheus007@hook.com"} data={"08 de Novembro, 2021"} isWideVersion={isWideVersion} />
                    <UserItem id={15} name={"Bruno Machado"} email={"bruno007@gmail.com"} data={"09 de Novembro, 2021"} isWideVersion={isWideVersion} />
                    <UserItem id={110} name={"Otamiro Beleza"} email={"otamiro@hotmail.com"} data={"25 de Novembro, 2021"} isWideVersion={isWideVersion} />
                  </Tbody>
                </Table>
                <Pagination />
              </>
            )
          }
        </Box>
      </Flex>
    </Box>
  )
}

