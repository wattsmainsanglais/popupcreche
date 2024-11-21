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
        name: 'Chateau de La Cote',
        long: 0.5985,
        lat: 45.3085,
        image2: '/mapImages/chateau-de-la-cote-rainy-mills.jpeg',
        info: 'Photo credit - Rainey Mills'

    },
   
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
        image2: '/mapImages/Chateau-Durantie-Michael-Mann.jpg',
        info: 'Photo Credit- Michael Mann Photography'
    },
    {
        name: 'Manoir de Longeveau',
        long: 0.2096,
        lat: 45.3072,
        image2: '/mapImages/Manoir_longveau_david_page1.jpg',
        info: 'Photo Credit- David Page Photography'
    },
    {
        name: 'Manoir Beaulieu',
        long: 0.2279,
        lat: 45.3805,
        image2: '/mapImages/LB-532-2.jpg',
        info: 'Photo credit - Lydia Taylor'
    },
    {
        name: 'Chateau de Brives',
        long: -0.4617,
        lat: 45.6703,
        image2: '/mapImages/chateau_de_brive.jpg',
        info: 'Photo credit - Katy Lunsford'
    },
  
    {
        name: 'Chateau de La Couronne',
        long: 0.4414,
        lat: 45.6174,
        image2: '/mapImages/chateau-de-la-couronne.jpg',
        info: 'Photo credit - Katy Lunsford'
    },

   


]

/*

  {
        name: 'No.3 The Chateau',
        long: -0.3344,
        lat: 45.6216,
        image2: '/mapImages/no3-the-chateau.jpg',
        info: 'Photo credit - Katy Lunsford'
    },
*/