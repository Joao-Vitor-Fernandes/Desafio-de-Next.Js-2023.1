import { Box, HStack, Stack, Text } from "@chakra-ui/react"

interface TextProps{
    nome?: string
    email?: string
    cargo?: string
    aniversario?: string
}

export function CardSobre({ nome, email, cargo, aniversario }: TextProps) {
    return(
        <Box bg='#175EA8' width={'445px'} height={'155px'} borderRadius={'10px'}>
            <Stack
                as='section'
                pt={'1'}
                pl={'5'}
                borderBottom={'1px solid white'}
            >
                <Text
                    as='p'
                    fontSize={'22px'}
                    fontWeight={'700'}
                    color='white'
                >
                    {nome}
                </Text>
            </Stack>
            <Stack
                as='section'
                py={'3'}
            >
                <HStack
                    as='section'
                    lineHeight={'6'}
                >
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'700'}
                        color='#F9E6B3'
                        pl={'2'}
                    >
                        E-mail:
                    </Text>
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'600'}
                        color='white'
                    >
                        {email}
                    </Text>
                </HStack>
                <HStack
                    as='section'
                    lineHeight={'6'}
                >
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'700'}
                        color='#F9E6B3'
                        pl={'2'}
                    >
                        Cargo:
                    </Text>
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'600'}
                        color='white'
                    >
                        {cargo}
                    </Text>
                </HStack>
                <HStack
                    as='section'
                    lineHeight={'6'}
                >
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'700'}
                        color='#F9E6B3'
                        pl={'2'}
                    >
                        Aniversário:
                    </Text>
                    <Text
                        as='p'
                        fontSize={'22px'}
                        fontWeight={'600'}
                        color='white'
                    >
                        {aniversario}
                    </Text>
                </HStack>
            </Stack>
        </Box>
    )
}