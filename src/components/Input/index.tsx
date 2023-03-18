import { Input, Text } from "@chakra-ui/react";

interface TextProps{
    nome?: string
}

export function Inputs({ nome }: TextProps) {
    return(
        <>
            <Text
                as='p'
                fontSize={['20px', '24px', '26px', '28px', '28px']}
                fontWeight={'700'}
                color='white'
            >
                {nome}
            </Text>
            <Input 
                placeholder='' 
                size='md' 
                bg='white'
                width={['95%', '95%', '95%', '95%', '584px']} 
            />
        </>
    )
}