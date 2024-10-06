'use client'

import React, {useMemo, useEffect} from 'react';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import {DeckProps} from '@deck.gl/core';
import {ScatterplotLayer} from '@deck.gl/layers';
import {GoogleMapsOverlay} from '@deck.gl/google-maps';
import DeckGL from '@deck.gl/react';

import { Flex, Box } from '@radix-ui/themes';

export default function DeckMap({api}: {api: string}) {
  const layers = [
    new ScatterplotLayer({
      id: 'deckgl-circle',
      data: [
        {position: [0.45, 51.47]}
      ],
      getPosition: d => d.position,
      getFillColor: [255, 0, 0, 100],
      getRadius: 1000
    })
  ];

  return (
  <Box width='90vw'>
  <APIProvider apiKey={api}>
    <DeckGL
      initialViewState={{
        longitude: 0.45,
        latitude: 51.47,
        zoom: 11
      }}
      controller
      layers={layers}
    >
      <Map mapId="<google_maps_id>" />
    </DeckGL>
  </APIProvider>
</Box>
)}