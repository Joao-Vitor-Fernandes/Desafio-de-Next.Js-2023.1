import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { CardSobre } from "@/components/CardSobre";

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

export default function Sobre() {
    const [membros, setMembros] = useState<Membro[]>([]);
    
    useEffect(() => {
        // obter membros
        axios.get<Membro[]>('http://localhost:3000/funcionarios')
            .then((resposta: AxiosResponse<Membro[]>) => {
                setMembros(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    return(
        <Stack
            as='main'
            pt={'35px'}
        >
            <Stack
                as='section'
            >
                <Text
                    as='p'
                    fontSize={['30px', '34px', '40px', '40px', '40px']}
                    fontWeight={'700'}
                    color='#175EA8'
                    textAlign={'center'}
                >
                    MEMBROS
                </Text>
                <Text
                    as='p'
                    fontSize={['20px', '24px', '30px', '30px', '30px']}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Conheça a nossa equipe da Aumigos Shop!
                </Text>
            </Stack>
            <Stack
                as='section'
                alignItems={'center'}
                py={'12'}
            >
                <SimpleGrid columns={[1, 1, 1, 2, 3]} spacing='40px'>
                    {membros.map((membro) => 
                        <CardSobre key={membro.id} nome={membro.name} email={membro.email} cargo={membro.cargo} aniversario={membro.aniversario} />)
                    }
                </SimpleGrid>
            </Stack>
        </Stack>
    )
}