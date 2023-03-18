import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Flex, HStack, IconButton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../../public/img-logo.png";
import { TextsNav } from "../TextsNav";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

// responsividade:
//     base     sm      md      lg      xl
// ={['flex', 'none', 'none', 'flex', 'flex']}

// como n estou em pages, n preciso botar o default aqui
export function Navbar() {
    const [displayatual, mudarDisplay] = useState('none');

    return (
        <HStack
            as='nav'
            bg='#F9E6B3'
            justify={'space-between'}
            height={'128px'}
            width={'100%'}
            pl={'21px'}
            pr={'31px'}
            // display={'column'}
        >
            <HStack
                as='section'
                py={"15px"}
            >
                <Link href={"/"}>
                    <Image className="logo" src={logo} alt="Logo" width={"100"} height={"100"} />
                </Link>
                <Link href={"/"}>
                    <Text as='p' fontSize={['28px', '32px', '40px', '40px', '40px']} fontWeight={'700'} color='#175EA8' lineHeight={'1'}>
                        Aumigos Shop
                    </Text>
                </Link>
            </HStack>
            <Flex
                as='section'
                gap={'9'}
                display={['none', 'none', 'none', 'flex', 'flex']}
            >
                <Link href={"/sobre"}>
                    <TextsNav text={"Sobre Nós"} />
                </Link>
                <Link href={"/contato"}>
                    <TextsNav text={"Contato"} />
                </Link>
                <Link href={"/login"}>
                    <TextsNav text={"Login"} />
                </Link>
            </Flex>

            <IconButton
                aria-label="Open Menu"
                bg='#fadf98'
                colorScheme={'none'}
                size={'lg'}
                mr={'2'}
                icon={<HamburgerIcon color={'black'} />}
                display={['flex', 'flex', 'flex', 'none', 'none']}
                _active={{
                    bg: '#e8ce87',
                    transform: 'scale(0.98)',
                    borderColor: '#e8ce87',
                }}
                onClick={() => mudarDisplay('flex')}
            />

            <Menu>
                <MenuButton 
                    as={Button} 
                    bg='#fadf98' 
                    colorScheme={'none'} 
                    size={'md'} 
                    display={['flex', 'flex', 'flex', 'none', 'none']}
                    _active={{
                        bg: '#e8ce87',
                        transform: 'scale(0.98)',
                        borderColor: '#e8ce87',
                    }}
                    margin={'0'}
                    h={'12'}
                    border={'2px solid #e8ce87'}
                >
                    <HamburgerIcon color={'black'}/>
                </MenuButton>
                <MenuList zIndex={20}>
                    <MenuItem>
                        <Link href={"/sobre"}>
                            <TextsNav text={"Sobre Nós"} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/contato"}>
                            <TextsNav text={"Contato"} />
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link href={"/login"}>
                            <TextsNav text={"Login"} />
                        </Link>
                    </MenuItem>
                </MenuList>
            </Menu>

            <Flex
                // w={'100vw'}
                // h={'100vh'}
                alignSelf={'center'}
                height={'188px'}
                width={'100%'}
                bg='#F9E6B3'
                zIndex={20}
                pos={'fixed'}
                top={'0'}
                left={'0%'}
                overflowY={'auto'}
                flexDir={'column'}
                display={[displayatual, displayatual, displayatual, 'none', 'none']}
            >
                <Flex justify={'flex-end'}>
                    <IconButton 
                        aria-label={"Close Menu"} 
                        bg='#fadf98'
                        colorScheme={'none'}
                        size={'lg'}
                        mt={'2'}
                        mr={'2'}
                        icon={<CloseIcon color={'black'} />}
                        _active={{
                            bg: '#e8ce87',
                            transform: 'scale(0.98)',
                            borderColor: '#e8ce87',
                        }}
                        onClick={() => mudarDisplay('none')}
                    />
                </Flex>
                <Flex
                    as='section'
                    flexDirection={'column'}
                    align={'center'}
                    gap={'2'}
                >
                    <Link href={"/sobre"}>
                        <TextsNav text={"Sobre Nós"} />
                    </Link>
                    <Link href={"/contato"}>
                        <TextsNav text={"Contato"} />
                    </Link>
                    <Link href={"/login"}>
                        <TextsNav text={"Login"} />
                    </Link>
                </Flex>
            </Flex>
        </HStack>
    )
}

