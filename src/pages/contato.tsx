import { Box, Button, HStack, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import Image from "next/image";

import { Inputs } from "@/components/Input";
import catAndDog from "../../public/cat and dog contact.png";

export default function Contato() {
    return(
        <HStack
            as='main'
            flexDirection={['column', 'column', 'column', 'column', 'row']}
        >
            <Stack
                as='section'
                py={['48px', '48px', '68px', '68px', '108px']}
                pl={['0', '0', '0', '0', '121px']}
                alignItems={'center'}
            >
                <Text
                    as='p'
                    fontSize={['24px', '30px', '30px', '30px', '30px']}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Entre em contato conosco!<br />
                    Envie uma mensagem.
                </Text>
                <Box display={{ base: 'none', sm: 'none', md: 'inline', lg: 'inline', xl: 'inline' }}>
                    <Image className="item" src={catAndDog} alt="item" width={"324"} height={"347"} />
                </Box>
                <Text
                    as='p'
                    fontSize={['24px', '30px', '30px', '30px', '30px']}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Localização:
                </Text>
                <Text
                    as='p'
                    fontSize={['18px', '22px', '22px', '22px', '22px']}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Rua José Lourenço Kelmer, UFJF<br />
                    Faculdade de Ciências Exatas, sala 3313
                </Text>
            </Stack>
            <Stack
                as='section'
                alignItems={'center'}
                pl={['0', '0', '0', '0', '196px']}
                pr={['0', '0', '0', '0', '8']}
                pb={['48px', '48px', '68px', '68px', '0']}
            >
                <Box 
                    bg='#175EA8' 
                    height={['588px', '618px', '628px', '648px', '648px']} 
                    width={['100%', '424px', '624px', '624px', '624px']} 
                    borderRadius={'8px'} 
                    boxShadow='lg'
                >
                    <Stack
                        as='section'
                        pl={['3', '5', '5', '5', '5']}
                        pt={'2'}
                    >
                        <Inputs nome={"Nome:"} />
                        <Inputs nome={"E-mail:"} />
                        <Inputs nome={"Telefone:"} />
                        <Inputs nome={"Assunto:"} />
                        <Text
                            as='p'
                            fontSize={['20px', '24px', '26px', '28px', '28px']}
                            fontWeight={'700'}
                            color='white'
                        >
                            Mensagem:
                        </Text>
                        <Textarea
                            bg='white' 
                            width={['95%', '95%', '95%', '95%', '584px']} 
                            pb={'90px'} 
                            pt={'20px'} 
                            overflowY="hidden" 
                            resize={'none'}
                        />
                        <Stack
                            pt={'3'}
                            alignItems={'center'}
                        >
                            <Button
                                fontSize={'28px'}
                                fontWeight={'700'} 
                                color='white'
                                bg='#A97C73'
                                size='lg'
                                height='50px'
                                width='145px'
                                boxShadow={'4px 4px 4px rgba(0, 0, 0, 0.2)'}
                                _hover={{ bg: '#9e6f65' }}
                                _active={{
                                    bg: '#9e6f65',
                                    transform: 'scale(0.98)',
                                    borderColor: '#bec3c9',
                                }}
                            >
                                Enviar
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </HStack>
    )
}