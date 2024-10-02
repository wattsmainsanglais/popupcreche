import React from "react";

import { Flex, Box, Grid } from "@radix-ui/themes";

import ContactForm from "./ContactForm";
import Socials from "./Socials";

export default function ContactWrapper(){

    return(
        <Grid columns='2' rows='1' width='99vw' p='8' justify='center' align='center'>
            <ContactForm />
            <Socials />

        </Grid>
    )
}