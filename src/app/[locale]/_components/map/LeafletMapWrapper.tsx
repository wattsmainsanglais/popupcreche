import { useTranslations } from "next-intl";

import LeafletMap from "./LeafletMapLoader";
import { markerTypes } from "./data/markerData";


// Leaflet / OpenStreetMap version of the locations section. The Google Maps version is MapWrapper.
export default function LeafletMapWrapper({markerArray}: {markerArray: markerTypes[]}){

    const t = useTranslations('Map')

    return (
        <section id="Map" className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
            <div className="text-center md:text-left">
                <h2 className="section-title">{t('heading')}</h2>
                <p className="mt-4 text-lg leading-relaxed">{t('para')}</p>
            </div>
            {/* isolate: keeps Leaflet's high z-index panes below the sticky header */}
            <div className="isolate h-[60vh] min-h-[360px] overflow-hidden rounded-2xl">
                <LeafletMap markerArray={markerArray} />
            </div>
        </section>
    )
}
