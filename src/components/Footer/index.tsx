import { HStack, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import facebook from "../../../public/facebook.png";
import instagram from "../../../public/instagram.png";
import whatsApp from "../../../public/whatsApp.png";
import { TextsFooter } from "../TextsFooter";

export function Footer() {
    return(
        <HStack
            as='footer'
            bg='#F9E6B3'
            justify={'space-between'}
            height={'128px'}
            width={'100%'}
            pl={'21px'}
            pr={'21px'}
        >
            <Stack
                as='section'
            >
                <Text
                    as='p'
                    fontSize={'30px'}
                    fontWeight={'700'}
                    color='#175EA8'
                    lineHeight={'37px'}
                >
                    Um lugar onde você<br />
                    pode deixar seu bichinho<br />
                    e o dono feliz!
                </Text>
            </Stack>
            <Stack
                as='section'
                pr={'120px'}
            >
                <HStack
                    as='div'
                    borderTop={'1px solid black'}
                    borderBottom={'1px solid black'}
                >
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Image className="facebook" src={facebook} alt="facebook" width={"82"} height={"82"} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Image className="instagram" src={instagram} alt="instagram" width={"82"} height={"67"} />
                    </a>
                    <a href="https://www.whatsapp.com/?lang=pt_br" target="_blank" rel="noopener noreferrer">
                        <Image className="whatsApp" src={whatsApp} alt="whatsApp" width={"78"} height={"72"} />
                    </a>
                </HStack>
            </Stack>
            <Stack
                as='section'
                lineHeight={'20px'}
                alignItems={'flex-end'}
            >
                <TextsFooter text={"Contato"} />
                <TextsFooter text={"(31) 98867-2824"} />
                <TextsFooter text={"aumigoshop@gmail.com.br"} />
                <TextsFooter text={"Rua José Lourenço Kelmer, UFJF"} />
            </Stack>
        </HStack>
    )
}