'use client'
import React, {useMemo, useEffect} from 'react';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import {DeckProps} from '@deck.gl/core';
import {ScatterplotLayer} from '@deck.gl/layers';
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';

import { Flex } from '@radix-ui/themes';

function DeckGLOverlay(props: DeckProps) {
  const map = useMap();
  const overlay = useMemo(() => new DeckOverlay(props));

  useEffect(() => {
    overlay.setMap(map);
    return () => overlay.setMap(null);
  }, [map])

  overlay.setProps(props);
  return null;
}

export default function GMap({api, mapId}: {api: string, mapId: string}) {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [
        {position: [.41, 46.11]}
      ],
      getPosition: d => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 10000
    })
  ];

  return (
  <Flex width='90vw' height='80vh'>
    <APIProvider apiKey={api}>
      <Map
      
        defaultCenter={{lat: 46.11, lng: 0.45}}
        defaultZoom={7}
        mapId={mapId} >
        <DeckGLOverlay layers={layers} />
      </Map>
    </APIProvider>
  </Flex>
)}



