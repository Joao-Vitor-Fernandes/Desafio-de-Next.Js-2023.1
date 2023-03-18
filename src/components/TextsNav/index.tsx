import { Text } from "@chakra-ui/react";
import Link from "next/link";

interface TextProps{
    text?: string
}

export function TextsNav({ text }: TextProps){
    return(
        <Text
            as='p'
            fontSize={'30px'}
            fontWeight={'700'}
            color='#175EA8'
            >
            {text}
        </Text>
    )
}