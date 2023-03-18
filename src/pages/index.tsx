import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import item1 from "../../public/card1.png";
import item2 from "../../public/card2.png";
import item3 from "../../public/card3.png";
import item4 from "../../public/card4.png";
import item5 from "../../public/card5.png";
import item6 from "../../public/card6.png";
import cachorroGato from "../../public/cachorro e gato.png";
import cachorroPatinha from "../../public/cachorroPatinha.png";

import { CardHome } from "../components/CardHome";

export default function Home() {
  return (
    <Stack
      as='main'
    >
      <Stack
        as='section'
        alignItems={'center'}
        pt={'38px'}
      >
        <Text
          as='p'
          fontSize={'30px'}
          fontWeight={'700'}
          pb={'36px'}
          textAlign={'center'}
          zIndex={1}
        >
          Seja bem-vindo ao nosso site de Pet Shop!
        </Text>
        <Text
          as='p'
          fontSize={'30px'}
          fontWeight={'700'}
          pt={'0px'}
          pb={'36px'}
          textAlign={'center'}
          zIndex={1}
        >
          Aqui você encontrará tudo o que precisa para<br />
          cuidar bem do seu animal de estimação.
        </Text>
      </Stack>
      <Box
        pt={'200px'}
        backgroundImage="url('/cachorro e gato.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        width="208px"
        height="561px"
        position="absolute"
        bottom="60"
        left="0"
        display={{ base: 'none', sm: 'inline', md: 'inline', lg: 'inline', xl: 'inline' }}
      />
      <Stack
        as='section'
        alignItems={'center'}
        pb={'44px'}
      >
        <CardHome />
      </Stack>
      <Box
        pt={'200px'}
        backgroundImage="url('/cachorroPatinha.png')"
        backgroundSize="cover"
        backgroundPosition="center"
        width="380px"
        height="408px"
        position="absolute"
        bottom="86px"
        right="4"
        display={{ base: 'none', sm: 'none', md: 'inline', lg: 'inline', xl: 'inline' }}
      />
    </Stack>
  )
}
