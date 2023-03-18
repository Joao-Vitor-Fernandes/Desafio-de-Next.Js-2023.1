import { Button, FormControl, FormLabel, Input, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useDisclosure, WrapItem } from "@chakra-ui/react";
import { Icon, AddIcon, ViewIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react'
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import { TableLine } from "@/components/TableLine";
import { TableAdmin } from "@/components/Table";

type Membro = {
    id: number;
    name: string;
    email: string;
    aniversario: string;
    salario: string;
    cargo: string;
};

export default function Admin() {
    const { isOpen: isOpenModal, onOpen: onOpenModal, onClose: onCloseModal } = useDisclosure()

    const [membros, setMembros] = useState<Membro[]>([]);
    const [membroSelecionado, setMembroSelecionado] = useState<Membro | null>(null);
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        aniversario: "",
        salario: "",
        cargo: "",
    });

    const formSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log(formValues);
        axios.post<Membro[]>(`http://localhost:3000/funcionarios`, {
            name: formValues.name,
            email: formValues.email,
            aniversario: formValues.aniversario,
            salario: formValues.salario,
            cargo: formValues.cargo,
        })
        .then(() => {
            alert('Membro atualizado!')
            onCloseModal();
            setFormValues({
                name: "",
                email: "",
                aniversario: "",
                salario: "",
                cargo: "",
            });
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
    }, [])

    return (
        <>
            <Stack
                as='main'
                pt={'42px'}
                pb={'75px'}
                px={'112px'}
            >
                <Stack
                    as='section'
                    pl={'4'}
                    w={10} 
                    h={10}
                >
                    <WrapItem>
                        <Button colorScheme='blue'
                            onClick={() => {
                                onOpenModal();
                            }}
                        >
                            <AddIcon />
                        </Button>
                    </WrapItem>
                </Stack>
                <Stack
                    as='section'
                >
                    <TableAdmin />
                </Stack>
            </Stack>

            {/* Modal Create */}
            <Modal onClose={onCloseModal} isOpen={isOpenModal} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Criar Membro</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel htmlFor="nome">Nome:</FormLabel>
                        <Input
                            id="nome"
                            placeholder={'Digite o nome...'}
                            value={formValues.name}
                            onChange={(event) =>
                                setFormValues({ ...formValues, name: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="email">Email:</FormLabel>
                        <Input
                            id="email"
                            placeholder={'Digite o email...'}
                            value={formValues.email}
                            onChange={(event) =>
                                setFormValues({ ...formValues, email: event.target.value })
                            }
                        />
                    </FormControl><FormControl>
                        <FormLabel htmlFor="aniversario">Aniversario:</FormLabel>
                        <Input
                            id="aniversario"
                            placeholder={'Digite o aniversário...'}
                            value={formValues.aniversario}
                            onChange={(event) =>
                                setFormValues({ ...formValues, aniversario: event.target.value })
                            }
                            type="date"
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="cargo">Cargo:</FormLabel>
                        <Input
                            id="cargo"
                            placeholder={'Digite o cargo...'}
                            value={formValues.cargo}
                            onChange={(event) =>
                                setFormValues({ ...formValues, cargo: event.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel htmlFor="salario">Salario:</FormLabel>
                        <Input
                            id="salario"
                            placeholder={'Digite o salário...'}
                            value={formValues.salario}
                            onChange={(event) =>
                                setFormValues({ ...formValues, salario: event.target.value })
                            }
                        />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button mr={'2'} onClick={onCloseModal}>Fechar</Button>
                    <Button colorScheme="blue" onClick={formSubmit}>Enviar</Button>
                </ModalFooter>
            </ModalContent>
            </Modal>
        </>
    )
}