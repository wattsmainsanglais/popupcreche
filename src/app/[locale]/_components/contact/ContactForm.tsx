'use client'

import { useState } from "react";
import { useRef } from 'react'

import { submitContactForm } from "../../_lib/SubmitContactForm";

import { Box, Card, Heading, Text, Flex, TextField, TextArea } from "@radix-ui/themes";

import { SubmitButton } from "../buttons/SubmitButton";


export default function ContactForm() {



    const ref = useRef<HTMLFormElement>(null)

    const [error, setError] = useState<string | undefined>('')
    const [message, setMessage] = useState<string | undefined>('')

    async function submit(data: FormData){
        
        setError('')
        setMessage('')

       const {message, error} = await submitContactForm(data)
       if(error){
        setError(error)
       } else {
        setMessage(message)
       }

       ref.current?.reset()


    }


    return  (

            <Flex justify='center' pt='8' pb='8' gap='2' align='center' direction={{initial:'column', sm:'column', xs: 'column', lg:'row', xl:'row'}} >
            <Card size='5' variant="classic" >
                <form action={submit} ref={ref}>  
                    <Flex gap='2' direction='column' align='center' width='100%' justify='center'>

                        <Heading size='5' align='center'>Contact Us Here</Heading>
                        <Flex direction='column' gap='2'>
                            <Box width='200px'>
                                <TextField.Root name='name' size='2' type='text' placeholder="Name"></TextField.Root>
                            </Box>
                            <Box width='200px'>
                                <TextField.Root name='email' type='email' placeholder="Email"></TextField.Root>
                            </Box>
                            <Box width='200px'>
                                <TextField.Root name='tel' size='2' type='number' placeholder="Telephone"></TextField.Root>
                            </Box>
                            <Box width='350px'>
                                <TextArea size="2" name='message'  placeholder="Write your message here" resize='vertical'></TextArea>
                            </Box>
                             
                             
                            
                            <SubmitButton>Send</SubmitButton>
                            {error? <Text>{error}</Text>:null}
                            {message? <Text>{message}</Text>:null}
                        </Flex>
                       
                    
                    </Flex>
                   



                </form>

            </Card>

            </Flex>


        

    )
}