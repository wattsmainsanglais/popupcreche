'use client'

import dynamic from 'next/dynamic'

// Leaflet touches `window` on import, so it can only load in the browser
const LeafletMap = dynamic(() => import('./LeafletMap'), {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-mint/40" />,
})

export default LeafletMap
