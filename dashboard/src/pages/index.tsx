import {Button, Flex, Input} from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex w='100vm' h='100vh' align='center' justify='center'>
            <Flex
                as="form" width="100%" maxWidth={360} bg='pink.600' p='8' borderRadius='8' flexDir="column">
                <Input
                    type='email' name='email'
                    focusBorderColor='blue.500' bgColor="gray.300"
                    variant='filled' _hover={{bgColor: 'gray.300'}} size='lg'
                />
                <Input
                    type='password' name='password'
                    focusBorderColor='blue.500' bgColor="gray.300"
                    variant='filled' _hover={{bgColor: 'gray.300'}} size='lg'
                />
                <Button type="submit" mt="6" colorScheme='blue'>Entrar</Button>
            </Flex>
        </Flex>
    )
}
