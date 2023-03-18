import { Box, Button, HStack, Input, InputGroup, InputRightElement, Link, Stack, Text } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Router } from "next/router";
import React from "react";

function PasswordInput() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
  
    return (
        <InputGroup size='md'>
            <Input
                size='lg' 
                bg='white' 
                width={'510px'}
                // pr='4.5rem'
                type={show ? 'text' : 'password'}
                placeholder='Senha'
            />
            <InputRightElement width='10.5rem' pt={'2'}>
            <Button h='1.75rem' size='md' onClick={handleClick}>
                {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
            </InputRightElement>
        </InputGroup>
    )
}

export default function Login() {
    return(
        <Stack
            as='main'
        >
            <Box
                pt={'200px'}
                backgroundImage="url('/gato e cachorros login.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                width="407px"
                height="352px"
                position="absolute"
                bottom="32"
                left="0"
            />
            <Stack
                as='section'
                py={'70px'}
                alignItems={'center'}
            >
                <Box bg='#175EA8' height='605px' width='605px' borderRadius={'8px'} boxShadow={'4px 4px 4px rgba(0, 0, 0, 0.3)'} zIndex="1">
                    <Stack
                        as='section'
                        py={'28px'}
                        borderBottom={'1px solid white'}
                    >
                        <Text
                            as='p'
                            fontSize={'40px'}
                            fontWeight={'700'}
                            color='white'
                            textAlign={'center'}
                        >
                            Aumigos Shop<br />
                            Login
                        </Text>
                    </Stack>
                    <Stack
                        as='section'
                        pt={'6'}
                        pl={'12'}
                    >
                        <Text
                            as='p'
                            fontSize={'30px'}
                            fontWeight={'700'}
                            color='white'
                        >
                            Email:
                        </Text>
                        <Input placeholder='' size='lg' bg='white' width={'510px'} />
                    </Stack>
                    <Stack
                        as='section'
                        pt={'12'}
                        pl={'12'}
                        pb={'10'}
                        borderBottom={'1px solid white'}
                    >
                        <Text
                            as='p'
                            fontSize={'30px'}
                            fontWeight={'700'}
                            color='white'
                        >
                            Senha:
                        </Text>
                        <PasswordInput />
                    </Stack>
                    <HStack
                        as='section'
                        justifyContent={'space-around'}
                        pt={'7'}
                    >
                        <Button colorScheme='whiteAlpha' color='white' variant='link' size='lg'>
                            Esqueceu sua senha?
                        </Button>
                        <Link href='/admin' pt={'1'} borderRadius={'8px'} bg='#A97C73' size='lg' height='50px' width='145px'
                            boxShadow={'4px 4px 4px rgba(0, 0, 0, 0.2)'}
                            _hover={{ bg: '#9e6f65' }}
                            _active={{
                                bg: '#9e6f65',
                                transform: 'scale(0.98)',
                                borderColor: '#bec3c9',
                            }}
                        >
                            <Text as='p' fontSize={'28px'} fontWeight={'700'} textAlign={'center'} color='white'>
                                Login
                            </Text>
                        </Link>
                    </HStack>
                </Box>
            </Stack>
            <Box
                pt={'200px'}
                backgroundImage="url('/cachorro desconfiado.png')"
                backgroundSize="cover"
                backgroundPosition="center"
                width="327px"
                height="424px"
                position="absolute"
                top="28"
                right="0"
            />
        </Stack>
    )
}