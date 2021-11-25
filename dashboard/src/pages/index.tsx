import {Button, Flex, Input} from "@chakra-ui/react";

export default function Home() {
    return (
        <Flex w='100vm' h='100vh' align='center' justify='center'>
            <Flex
                as="form" width="100%" maxWidth={360} bg='pink.700' p='8' borderRadius='8' flexDir="column">
                <Input type='email' name='email'/>
                <Input type='password' name='password'/>
                <Button type="submit" mt="6" colorScheme='blue'>Entrar</Button>
            </Flex>
        </Flex>
    )
}
