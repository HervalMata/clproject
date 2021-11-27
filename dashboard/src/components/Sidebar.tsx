import {Box, Icon, Link, Stack, Text} from "@chakra-ui/react";
import {RiContactsLine, RiDashboardLine} from "react-icons/ri";

export function Sidebar() {
    return (
        <Box as='aside' w='64' mr='8'>
            <Stack spacing='12' align='flex-start'>
                <Text fontWeight='bold' color='gray.400' fontSize='small'>Geral</Text>
                <Stack spacing='4' align='center'>
                    <Link display='flex' align='center'>
                        <Icon as={RiDashboardLine} fontSize='20'/>
                        <Text fontWeight='medium' ml='4'>Dashboard</Text>
                    </Link>
                    <Link display='flex' align='center'>
                        <Icon as={RiContactsLine} fontSize='20'/>
                        <Text fontWeight='medium' ml='4'>Usuários</Text>
                    </Link>
                </Stack>
            </Stack>
        </Box>
    )
}