import { Flex, HStack, Text } from "@chakra-ui/react";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import logo from "../../../public/img-logo.png";
import { TextsNav } from "../TextsNav";

// responsividade:
//     base     sm      md      lg      xl
// ={['flex', 'none', 'none', 'flex', 'flex']}

// como n estou em pages, n preciso botar o default aqui
export function Navbar() {
    const [iconAtual, mudarIcon] = useState(<HamburgerIcon color={'black'}/>);

    const handleMouseUp = () => {
        if (iconAtual.type === HamburgerIcon) {
            mudarIcon(<CloseIcon color={"black"} />);
        } else {
            mudarIcon(<HamburgerIcon color={"black"} />);
        }
    };

    return (
        <HStack
            as='nav'
            bg='#F9E6B3'
            justify={'space-between'}
            height={'128px'}
            width={'100%'}
            pl={'21px'}
            pr={'31px'}
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
                    onMouseUp={handleMouseUp}
                >
                    {iconAtual}
                </MenuButton>
                <MenuList zIndex={20} display={['MenuList', 'MenuList', 'MenuList', 'none', 'none']}>
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
        </HStack>
    )
}

