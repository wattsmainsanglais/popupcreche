'use client'


import { Text, TabNav } from "@radix-ui/themes";


export default function TabView({navList}: {navList: string[]}){

    return (
        <TabNav.Root size='2'>
        {navList.map((item, index) => (
            <TabNav.Link key={index} href={`#${item}`}><Text size='4'>{item}</Text></TabNav.Link>
        ))}
        
        </TabNav.Root>
    )

}