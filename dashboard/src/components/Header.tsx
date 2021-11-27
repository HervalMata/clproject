import {Avatar, Box, Flex, HStack, Icon, Input, Text} from "@chakra-ui/react";
import {RiNotificationLine, RiSearchLine, RiUserAddLine} from "react-icons/ri";

export function Header() {
    return (
        <Flex as='header' w="100%" maxWidth={1480}
              h='28' marginX='auto' mt='4' px='6' align='center'>
            <Text fontSize="3x1" fontWeight="bold" letterSpacing="light" w='64'>
                Cris
                <Text as='span' ml='1' color="blue.500">Laços</Text>
            </Text>
            <Flex as='label' flex='1' py='4' px='8' ml='6' maxWidth='400'
                  alignSelf='center' color='gray.200' position='relative' bg='gray.600' borderRadius='full'>
                <Input color='gray.50' variant='unlisted' px='4' mr='4' placeholder='Pesquisar'
                       _placeholder={{color: 'gray.400 '}}/>
                <Icon as={RiSearchLine} fontSize='20' h='10'/>
            </Flex>
            <Flex align='8' ml='auto'>
                <HStack spacing='8' mx='8' pr='8' py='1' color='gray.300' borderRightWidth={1} borderColor='gray.700'>
                    <Icon as={RiNotificationLine} fontSize='20' h='10'/>
                    <Icon as={RiUserAddLine} fontSize='20' h='10'/>
                </HStack>
                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Herval Mata do Amparo</Text>
                        <Text color='gray.300' fontSize='small'>
                            hervalmataamparo@gmail.com
                        </Text>
                    </Box>
                    <Avatar size='md' name='Herval Mata'/>
                </Flex>
            </Flex>
        </Flex>
    )
}