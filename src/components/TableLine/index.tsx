import { Button, Td, Tr } from "@chakra-ui/react"
import { CheckIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios"

interface TextProps{
    id?: number
    nome?: string
    email?: string
    aniversario?: string
    salario?: string
    cargo?: string
}

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

export function TableLine({ id, nome, email, cargo, aniversario, salario }: TextProps) {
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

    const excluir = (membroAhSerExcluido: Membro) => {
        axios.delete(`http://localhost:3000/funcionarios/${membroAhSerExcluido.id}`)
            .then(() => {
                const listaMembros = membros.filter(membro => membro.id !== membroAhSerExcluido.id)
                setMembros([...listaMembros])
            })
    }

    return(
        <Tr>
            <Td fontSize={'18px'} fontWeight={'380'}>{id}</Td>
            <Td fontSize={'18px'} fontWeight={'380'}>{nome}</Td>
            <Td fontSize={'18px'} fontWeight={'380'}>{email}</Td>
            <Td fontSize={'18px'} fontWeight={'380'}>{cargo}</Td>
            <Td isNumeric>
                <Button colorScheme='yellow' mr={'36px'} w={10} h={10}>
                    <ViewIcon color='white' w={5} h={5} />
                </Button> 
                <Button colorScheme='green' mr={'36px'} w={10} h={10}>
                    <CheckIcon w={5} h={5} />
                </Button> 
                <Button colorScheme='red' mr={'24px'} w={10} h={10}>
                    <CloseIcon w={4} h={4} />
                </Button>
                <Button colorScheme='red' mr={'24px'} w={10} h={10} 
                // onClick={() => excluir({id, nome, email, cargo, aniversario, salario})}
                >
                    <CloseIcon w={4} h={4} />
                </Button>
            </Td>
        </Tr>
    )
}