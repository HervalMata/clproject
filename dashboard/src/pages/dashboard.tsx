import {Header} from '../components/Header';
import {Flex} from "@chakra-ui/react";

export default function Dashboard() {

    return (
        <Flex flexDir="column">
            <Header/>
            <h1>Dashboard</h1>
        </Flex>
    )
}