'use client'
import {useEffect, useState} from 'react';


import TabView from './TabView';
import DropdownView from './DropdownView';



export default function NavItemsResponsive({navList}: {navList: string[]}){

const [windowSize, setWindowSize] = useState(getWindowSize());

  function getWindowSize() {
    if (typeof window !== 'undefined'){
      const {innerWidth}: {innerWidth: number} = window;
      return {innerWidth};
    } 
    
    
    }


  useEffect(() => {
  
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

    
    
    return(
        
        windowSize.innerWidth > 1024 ? <TabView navList={navList} />:<DropdownView navList={navList} />
        
    )

}