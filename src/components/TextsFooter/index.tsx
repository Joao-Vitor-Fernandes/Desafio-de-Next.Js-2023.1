import { Text } from "@chakra-ui/react";

interface TextProps{
    text?: string
}

export function TextsFooter({ text }: TextProps){
    return(
        <Text
            as='p'
            fontSize={'18px'}
            fontWeight={'700'}
        >
            {text}
        </Text>
    )
}