import { Box, HStack, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

import item1 from "../../../public/card1.png";
import item2 from "../../../public/card2.png";
import item3 from "../../../public/card3.png";
import item4 from "../../../public/card4.png";
import item5 from "../../../public/card5.png";
import item6 from "../../../public/card6.png";

export function CardHome(){
    return(
        <>
            <SimpleGrid columns={[1, 2, 2, 3, 3]} spacing={['120px', '120px', '160px', '160px', '160px']} spacingY='40px'>
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
        </>
    )
}