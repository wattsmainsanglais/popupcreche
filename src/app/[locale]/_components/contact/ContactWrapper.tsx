import React from "react";

import { Flex, Box, Grid, Heading} from "@radix-ui/themes";

import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function ContactWrapper(){

    return(
        <Flex id='Contact-us' direction='column' justify='center' align='center'>
            <Heading>Contact</Heading>
            <Grid columns='2' rows='1' width='99vw' justify='center' align='center'>
                <ContactForm />
                <Socials />

            </Grid>
        </Flex>
       
    )
}