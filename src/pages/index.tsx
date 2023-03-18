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
      />
      <Stack
        as='section'
        alignItems={'center'}
        pb={'44px'}
      >
        <SimpleGrid columns={[2, null, 3]} spacing='160px' spacingY='40px'>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item1} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 39,90
              </Text>
            </Stack>
          </Box>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item2} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 24,99
              </Text>
            </Stack>
          </Box>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item3} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 74,90
              </Text>
            </Stack>
          </Box>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item4} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 14,99
              </Text>
            </Stack>
          </Box>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item5} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 64,90
              </Text>
            </Stack>
          </Box>
          <Box bg='#175EA8' height='230px' width='175px' borderRadius={'8px'} boxShadow='lg' zIndex="1">
            <Stack as='section' alignItems={'center'} py={'14px'}>
              <Image className="item" src={item6} alt="item" width={"150"} height={"150"} />
              <Text as='p' fontSize={'30px'} fontWeight={'700'} color='white'>
                R$ 19,99
              </Text>
            </Stack>
          </Box>
        </SimpleGrid>
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
      />
    </Stack>
  )
}
