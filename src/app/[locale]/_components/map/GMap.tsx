'use client'
import React, {useMemo, useEffect} from 'react';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import {DeckProps} from '@deck.gl/core';
import {PolygonLayer} from '@deck.gl/layers';
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';

import MapMarker from './MapMarker';

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
    new PolygonLayer({
    id: 'PolygonLayer',
    data: [{points: [[-1.568, 46.408],[-1.398, 46.68] ,[-0.868, 47.06],[-0.069, 47.266],[.710, 47.381],[2.397, 47.064],[2.633, 46.352],[2.336, 45.522],[1.578, 45.143],[1.216, 44.899],[.513, 44.794],[-0.4531, 44.716],[-0.896, 44.821],[-1.193, 45.11],[-1.072, 45.555],[-1.348, 45.993],[-1.14, 46.298]]}],

    getPolygon: d => d.points,
    stroked: true,
    getFillColor: [50, 150, 265, 65],
    getLineColor: [255, 255, 255],
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true
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
        <MapMarker src='/images/KL2_7431web.jpg' src2='/images/KL2_8487web.jpg' />
      </Map>
    </APIProvider>
  </Flex>
)}



