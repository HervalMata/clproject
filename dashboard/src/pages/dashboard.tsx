import {Header} from '../components/Header';
import {Box, Flex, SimpleGrid, Stack, Text} from "@chakra-ui/react";
import {Sidebar} from "../components/Sidebar";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
        foreColor: 'gray.500',
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: 'gray.600',
        },
        axisTicks: {
            color: 'gray.600',
        },
        categories: [
            '2021-05-30T00:00:00.000Z',
            '2021-05-31T00:00:00.000Z',
            '2021-06-01T00:00:00.000Z',
            '2021-06-02T00:00:00.000Z',
            '2021-06-03T00:00:00.000Z',
            '2021-06-04T00:00:00.000Z',
            '2021-06-05T00:00:00.000Z',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3,
        }
    }
}

const series = [
    {
        name: 'series1', data: [31, 120, 10, 28, 61, 18, 100]
    }
]

export default function Dashboard() {

    return (
        <Flex flexDir="column">
            <Header/>
            <Flex width="100%" my="6" maxWidth={1480} mx="auto" px='6'>
                <Sidebar/>
                <SimpleGrid flex='1' my='6' maxWidth={1480} mx='auto' px='6'>
                    <Stack flexDir='column'>
                        <Box p='8' bg='gray.600' borderRadius={8} pb='4'>
                            <Text fontSize='lg' mb='4'>Novos Usuários Cadastrados na Semana</Text>
                            <Chart options={options} series={series} type='area' height={160}/>
                        </Box>
                        <Box pg='8' bg='gray.600' borderRadius={8}>
                            <Text fontSize='lg' mb='4'>Taxa de Cadastro</Text>
                            <Chart options={options} series={series} type='area' height={160}/>
                        </Box>
                    </Stack>
                </SimpleGrid>
            </Flex>
        </Flex>
    )
}