import GMap from "./GMap";

import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


import { markerTypes } from "./data/markerData";


export default  function MapWrapper({apiKey, mapId, markerArray}: {apiKey: string | undefined, mapId: string | undefined, markerArray: markerTypes[]}){

    const t = useTranslations('Map')

    const translations: {[key:string]:string}  = {
        heading: t('heading'),
        para: t('para')
    }

    return( <GMap  apiKey={apiKey} mapId={mapId} markerArray={markerArray} translations={translations}  />)
}