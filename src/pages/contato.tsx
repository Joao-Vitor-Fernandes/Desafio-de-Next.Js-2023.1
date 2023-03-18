import { Inputs } from "@/components/Input";
import { Box, Button, HStack, Input, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import catAndDog from "../../public/cat and dog contact.png";

export default function Contato() {
    return(
        <HStack
            as='main'
        >
            <Stack
                as='section'
                py={'108px'}
                pl={'121px'}
                alignItems={'center'}
            >
                <Text
                    as='p'
                    fontSize={'30px'}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Entre em contato conosco!<br />
                    Envie uma mensagem.
                </Text>
                <Image className="item" src={catAndDog} alt="item" width={"324"} height={"347"} />
                <Text
                    as='p'
                    fontSize={'30px'}
                    fontWeight={'700'}
                    textAlign={'center'}
                >
                    Localização:
                </Text>
                <Text
                    as='p'
                    fontSize={'22px'}
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
                pl={'196px'}
            >
                <Box bg='#175EA8' height='648px' width='624px' borderRadius={'8px'} boxShadow='lg'>
                    <Stack
                        as='section'
                        pl={'5'}
                        pt={'2'}
                    >
                        <Inputs nome={"Nome:"} />
                        <Inputs nome={"E-mail:"} />
                        <Inputs nome={"Telefone:"} />
                        <Inputs nome={"Assunto:"} />
                        <Text
                            as='p'
                            fontSize={'28px'}
                            fontWeight={'700'}
                            color='white'
                        >
                            Mensagem:
                        </Text>
                        <Input placeholder='' size='md' bg='white' width={'584px'} pb={'90px'} pt={'20px'} />
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