import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type markerTypes =  
    {
        map?(arg0: (m: any) => import("react").JSX.Element): import("react").ReactNode;
        
        name: string;
        lat: number;
        long: number;
        info?: string;
        image2?: StaticImport |  string;

    };



 export const markerArray: markerTypes[] = [

    
    {
        name: 'Chateau de la Valouze',
        long: 0.1125,
        lat: 45.1409,
        image2: '/mapImages/Chateau-de-la-Valouze-Anneli-Marinovich.jpg',
        info: 'Photo credit - Anneli Marinovich'
    },
   
    {
        name: 'Chateau la Durantie',
        long: 1.1208,
        lat: 45.3963,
        image2: '/images/KL2_8487web.jpg'
    },
    {
        name: 'Manoir de Longeveau',
        long: 0.2096,
        lat: 45.3072,
        image2: '/images/KL2_8487web.jpg'
    },
    {
        name: 'Manoir Beaulieu',
        long: 0.2279,
        lat: 45.3805,
        image2: '/mapImages/lb-532-2.jpg'
    },
    {
        name: 'Chateau de Brives',
        long: -0.4617,
        lat: 45.6703,
        image2: '/images/KL2_8487web.jpg'
    },


]