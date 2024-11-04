import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type markerTypes =  
    {
        map?(arg0: (m: any) => import("react").JSX.Element): import("react").ReactNode;
        
        name: string;
        lat: number;
        long: number;
        info?: string;
        image1?: StaticImport |  string;
        image2?: StaticImport |  string;

    };



 export const markerArray: markerTypes[] = [

    
    {
        name: 'Chateau de la Valouze',
        long: 0.1125,
        lat: 45.1409,
        image1: '/mapImages/Chateau-de-la-Valouze-Anneli-Marinovich-stairs.jpg',
        image2: '/mapImages/Chateau-de-la-Valouze-Anneli-Marinovich.jpg'
    },
   
    {
        name: 'Chateau la Durantie',
        long: 1.1208,
        lat: 45.3963,
        image1: '/images/KL2_7431web.jpg',
        image2: '/images/KL2_8487web.jpg'
    },
    {
        name: 'Manoir de Longeveau',
        long: 0.2096,
        lat: 45.3072,
        image1: '/images/KL2_7431web.jpg',
        image2: '/images/KL2_8487web.jpg'
    },
    {
        name: 'Manoir Beaulieu',
        long: 0.2279,
        lat: 45.3805,
        image1: '/mapImages/lb-484.jpg',
        image2: '/mapImages/lb-532-2.jpg'
    },
    {
        name: 'Chateau de Brives',
        long: -0.4617,
        lat: 45.6703,
        image1: '/images/KL2_7431web.jpg',
        image2: '/images/KL2_8487web.jpg'
    },


]