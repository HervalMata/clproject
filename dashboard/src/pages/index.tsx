import {Button, Flex, FormControl, Input, Stack} from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex w='100vm' h='100vh' align='center' justify='center'>
            <Flex
                as="form" width="100%" maxWidth={360} bg='pink.600' p='8' borderRadius='8' flexDir="column">
                <Stack spacing='4'>
                    <FormControl>
                        <Input
                            type='email' name='email' placeholder='Email'
                            focusBorderColor='blue.500' bgColor="gray.300"
                            variant='filled' _hover={{bgColor: 'gray.300'}} size='lg'
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                            type='password' name='password' placeholder='Senha'
                            focusBorderColor='blue.500' bgColor="gray.300"
                            variant='filled' _hover={{bgColor: 'gray.300'}} size='lg'
                        />
                    </FormControl>
                </Stack>
                <Button type="submit" mt="6" colorScheme='blue'>Entrar</Button>
            </Flex>
        </Flex>
    )
}
