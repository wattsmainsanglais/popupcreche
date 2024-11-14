'use client'


import { Text, TabNav } from "@radix-ui/themes";

import { NavList } from "./navBar";

export default function TabView({navList}: {navList: NavList[]}){

    return (
        <TabNav.Root size='2'>
        {navList.map((item, index) => (
            <TabNav.Link key={index} href={`#${item.id}`}><Text size='4'>{item.title}</Text></TabNav.Link>
        ))}
        
        </TabNav.Root>
    )

}