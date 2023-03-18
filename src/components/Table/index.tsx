import { Button, FormControl, FormLabel, Input, Text, useDisclosure, HStack, Stack, Box } from "@chakra-ui/react"
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { CheckIcon, CloseIcon, ViewIcon } from "@chakra-ui/icons"
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios"

interface TextProps {
    id?: number
    nome?: string
    email?: string
    aniversario?: string
    salario?: string
    cargo?: string
}

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

export function TableAdmin({ id, nome, email, cargo, aniversario, salario }: TextProps) {
    const { isOpen: isOpenModal1, onOpen: onOpenModal1, onClose: onCloseModal1 } = useDisclosure()
    const { isOpen: isOpenModal2, onOpen: onOpenModal2, onClose: onCloseModal2 } = useDisclosure()
    const { isOpen: isOpenModal3, onOpen: onOpenModal3, onClose: onCloseModal3 } = useDisclosure()

    const [membros, setMembros] = useState<Membro[]>([]);
    const [membroSelecionado, setMembroSelecionado] = useState<Membro | null>(null);
    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        email: "",
        aniversario: "",
        salario: "",
        cargo: "",
    });

    const formSubmitUpdate = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formValues);
        axios.put<Membro[]>(`http://localhost:3000/funcionarios/${formValues.id}`, {
            name: formValues.name,
            email: formValues.email,
            aniversario: formValues.aniversario,
            salario: formValues.salario,
            cargo: formValues.cargo,
        })
        .then(() => {
            alert('Membro atualizado!')
            onCloseModal2();
        })
        .catch(erro => {
            console.log(erro)
        })
    };

    useEffect(() => {
        // obter membros
        axios.get<Membro[]>('http://localhost:3000/funcionarios')
            .then((resposta: AxiosResponse<Membro[]>) => {
                setMembros(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [membros])

    const excluir = (membroExcluido: Membro) => {
        axios.delete(`http://localhost:3000/funcionarios/${membroExcluido.id}`)
            .then(() => {
                const listaMembros = membros.filter(membro => membro.id !== membroExcluido.id)
                setMembros([...listaMembros])
                onCloseModal3();
            })
    }

    return (
        <>
            <TableContainer overflow={'auto'}>
                <Table size='lg' borderTop={'1px solid black'}>
                    <Thead>
                        <Tr bg={'gray.200'}>
                            <Th fontSize={'22px'} fontWeight={'500'}>#</Th>
                            <Th fontSize={'22px'} fontWeight={'500'}>Nome</Th>
                            <Th fontSize={'22px'} fontWeight={'500'}>E-mail</Th>
                            <Th fontSize={'22px'} fontWeight={'500'}>Cargo</Th>
                            <Th isNumeric></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {membros.map((membro) =>
                            <Tr key={membro.id}>
                                <Td fontSize={'18px'} fontWeight={'380'}>{membro.id}</Td>
                                <Td fontSize={'18px'} fontWeight={'380'}>{membro.name}</Td>
                                <Td fontSize={'18px'} fontWeight={'380'}>{membro.email}</Td>
                                <Td fontSize={'18px'} fontWeight={'380'}>{membro.cargo}</Td>
                                <Td isNumeric>
                                    <Button colorScheme='yellow' mr={'36px'} w={10} h={10}
                                        onClick={() => {
                                            setMembroSelecionado(membro);
                                            onOpenModal1();
                                        }}
                                    >
                                        <ViewIcon color='white' w={5} h={5} />
                                    </Button>
                                    <Button colorScheme='green' mr={'36px'} w={10} h={10} 
                                        onClick={() => {
                                            setMembroSelecionado(membro);
                                            onOpenModal2();
                                            setFormValues({ ...formValues, id: membro.id.toString() })
                                        }}
                                    >
                                        <CheckIcon w={5} h={5} />
                                    </Button>
                                    <Button colorScheme='red' mr={'24px'} w={10} h={10} 
                                        onClick={() => {
                                            setMembroSelecionado(membro);
                                            onOpenModal3();
                                        }}
                                    >
                                        <CloseIcon w={4} h={4} />
                                    </Button>
                                </Td>
                            </Tr>)}
                    </Tbody>
                </Table>
            </TableContainer>

            {/* //-------------- MODAIS ---------------// */}

            {/* //Modal View */}
            <Modal onClose={onCloseModal1} isOpen={isOpenModal1} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Membro Selecionado</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {membroSelecionado && (
                            <>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Nome:</Text>
                                    <Input placeholder={membroSelecionado.name} isReadOnly={true} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>E-mail:</Text>
                                    <Input placeholder={membroSelecionado.email} isReadOnly={true} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Aniversário:</Text>
                                    <Input placeholder={membroSelecionado.aniversario} isReadOnly={true} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Cargo:</Text>
                                    <Input placeholder={membroSelecionado.cargo} isReadOnly={true} />
                                </Stack>
                                <Stack as='div' pb={'2'}>
                                    <Text fontSize={'18px'} fontWeight={'500'}>Salário:</Text>
                                    <Input placeholder={membroSelecionado.salario} isReadOnly={true} />
                                </Stack>
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onCloseModal1}>Fechar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* //Modal Update */}
            <Modal onClose={onCloseModal2} isOpen={isOpenModal2} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Membro Selecionado</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                        {membroSelecionado && (
                            <Input
                                id="id"
                                placeholder="Digite seu id"
                                value={membroSelecionado.id}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, id: event.target.value })
                                }
                                type="hidden"
                            />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="nome">Nome:</FormLabel>
                            {membroSelecionado && (
                            <Input
                                id="nome"
                                placeholder={membroSelecionado.name}
                                value={formValues.name}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, name: event.target.value })
                                }
                            />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="email">Email:</FormLabel>
                            {membroSelecionado && (
                            <Input
                                id="email"
                                placeholder={membroSelecionado.email}
                                value={formValues.email}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, email: event.target.value })
                                }
                            />)}
                        </FormControl><FormControl>
                            <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
                            {membroSelecionado && (
                            <Input
                                id="aniversario"
                                placeholder={membroSelecionado.aniversario}
                                value={formValues.aniversario}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, aniversario: event.target.value })
                                }
                                type="date"
                            />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="cargo">Cargo:</FormLabel>
                            {membroSelecionado && (
                            <Input
                                id="cargo"
                                placeholder={membroSelecionado.cargo}
                                value={formValues.cargo}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, cargo: event.target.value })
                                }
                            />)}
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="salario">Salario:</FormLabel>
                            {membroSelecionado && (
                            <Input
                                id="salario"
                                placeholder={membroSelecionado.salario}
                                value={formValues.salario}
                                onChange={(event) =>
                                    setFormValues({ ...formValues, salario: event.target.value })
                                }
                            />)}
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'2'} onClick={onCloseModal2}>Fechar</Button>
                        <Button colorScheme="green" onClick={formSubmitUpdate}>Enviar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            {/* //Modal Delete */}
            <Modal onClose={onCloseModal3} isOpen={isOpenModal3} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Membro Selecionado</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {membroSelecionado && (
                            <>
                                <Stack>
                                    <Text fontSize={'16px'} fontWeight={'500'}>
                                        Tem certeza que deseja excluir {membroSelecionado.name}?
                                    </Text>
                                </Stack>
                            </>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <Button mr={'2'} onClick={onCloseModal3}>Fechar</Button>
                        {membroSelecionado && (
                        <Button colorScheme="red" onClick={() => excluir(membroSelecionado)}>Excluir</Button>
                        )}
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}