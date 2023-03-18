import { Input, Text } from "@chakra-ui/react";

interface TextProps{
    nome?: string
}

export function Inputs({ nome }: TextProps) {
    return(
        <><Text
            as='p'
            fontSize={'28px'}
            fontWeight={'700'}
            color='white'
        >
            {nome}
        </Text><Input placeholder='' size='md' bg='white' width={'584px'} /></>
    )
}