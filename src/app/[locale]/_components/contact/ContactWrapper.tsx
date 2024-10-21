import React from "react";

import { Flex, Box, Grid, Heading} from "@radix-ui/themes";

import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function ContactWrapper(){

    return(
        <Flex width='99vw' id='Contact-us' direction='column' justify='center' align='center'>
            <Heading>Contact</Heading>
           
            <Flex direction={{initial: 'column', xs: 'column', sm: 'column', md: 'row'}} width='99vw' justify='center' align='center'>
                <ContactForm />
                <Socials />

            </Flex>
        </Flex>
       
    )
}