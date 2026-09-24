'use client'

// Free, key-less alternative to the Google Maps version (GMap.tsx):
// Leaflet + OpenStreetMap tiles, so there's no API key, Google Cloud account or billing to maintain.
// Loaded client-side only via LeafletMapLoader, because Leaflet needs `window`.

import 'leaflet/dist/leaflet.css'

import L from 'leaflet'
import Image from 'next/image'
import { MapContainer, Marker, Polygon, Popup, TileLayer } from 'react-leaflet'

import { markerTypes } from './data/markerData'
import { workArea } from './data/workArea'

// Bunny marker (218x309 source), anchored at the bottom centre like a pin
const bunnyIcon = L.icon({
    iconUrl: '/images/Pop-up_bunny_marker.png',
    iconSize: [38, 54],
    iconAnchor: [19, 54],
    popupAnchor: [0, -48],
})

// Leaflet wants [lat, lng]; the shared data is [lng, lat]
const workAreaLatLng = workArea.map(([lng, lat]) => [lat, lng] as [number, number])

export default function LeafletMap({markerArray}: {markerArray: markerTypes[]}) {

    return (
        <MapContainer
            // Fit the shaded work area on screen at any size, rather than a fixed centre/zoom
            bounds={L.latLngBounds(workAreaLatLng)}
            boundsOptions={{ padding: [24, 24] }}
            zoomSnap={0.25}
            // Don't hijack page scrolling: no wheel zoom, and no one-finger panning on phones
            scrollWheelZoom={false}
            dragging={!L.Browser.mobile}
            className="h-full w-full">

            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Polygon
                positions={workAreaLatLng}
                interactive={false}
                pathOptions={{ stroke: false, fillColor: 'rgb(160, 109, 170)', fillOpacity: 0.25 }}
            />

            {markerArray.map((m) => (
                <Marker key={m.name} position={[m.lat, m.long]} icon={bunnyIcon} alt={m.name} title={m.name}>
                    <Popup>
                        <div className="flex w-[220px] flex-col items-center gap-1.5 text-center">
                            <em className="font-display text-lg font-semibold not-italic">{m.name}</em>
                            {typeof m.image2 === 'string' && (
                                <Image
                                    src={m.image2}
                                    alt={m.name}
                                    title={m.info}
                                    width={220}
                                    height={140}
                                    sizes="220px"
                                    className="h-[140px] w-[220px] rounded-md object-cover"
                                />
                            )}
                            {m.info && <span className="text-xs text-muted">{m.info}</span>}
                        </div>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}
