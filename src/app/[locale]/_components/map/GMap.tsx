'use client'
import React, {useMemo, useEffect} from 'react';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import {DeckProps} from '@deck.gl/core';
import {PolygonLayer} from '@deck.gl/layers';
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';

import MapMarker from './MapMarker';

import { Flex, Text, Heading } from '@radix-ui/themes';
import { markerTypes } from './data/markerData';
import { ResponsiveHeadingSizes } from "../../fonts/ResponsiveFontSizes";

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

export default function GMap({apiKey, mapId, markerArray, translations}: {apiKey: string | undefined, mapId: string | undefined, markerArray: markerTypes[], translations: {[key:string]:string}}) {


 const[markers, setMarkers] = React.useState(markerArray)

  const layers = [
    new PolygonLayer({
    id: 'PolygonLayer',
    data: [{points: [[-1.468, 45.908],[-1.398, 46.18] ,[-0.868, 46.56],[-0.069, 46.766],[.710, 46.881],[2.397, 46.564],[2.633, 45.852],[2.336, 45.022],[1.942, 44.590],[1.277, 44.326],[0.513, 44.294],[-0.453, 44.216],[-0.896, 44.321],[-1.183, 44.61]]}],

    getPolygon: d => d.points,
    stroked: true,
    getFillColor: [160, 109, 170, 65],
    getLineColor: [255, 255, 255, 0],
    getLineWidth: 20,
    lineWidthMinPixels: 1,
    pickable: true
  })
   ];
   



  return (
      <Flex id="Map" width='95vw' height='80vh' direction={{initial: 'column', xs: 'column', sm: 'column', md: 'row' }} justify='center' align='center'>
        <Flex width={{initial: '90vw', xs: '90vw', sm: '90vw', md: '50vw'}} justify='center' align='center' direction='column' gap='2' p='3'>
          <Heading size={ResponsiveHeadingSizes}>
            {translations.heading}
          </Heading>
          <Text>
           {translations.para}
          </Text>
        </Flex>
        <Flex width={{initial: '90vw', xs: '90vw', sm: '90vw', md: '50vw'}} height={{initial: '60vh', xs: '60vh', sm: '60vh'}}>
          <APIProvider apiKey={apiKey}>
            <Map
            
              defaultCenter={{lat: 45.35, lng: 1.25}}
              defaultZoom={6.5}
              mapId={mapId} >
              <DeckGLOverlay layers={layers} />
              {markers.map( (m: markerTypes, index: React.Key | null | undefined) => 
                <MapMarker key={index} name={m.name} lat={m.lat} long={m.long} src2={m.image2} info={m.info} />
              )}
              
            </Map>
          </APIProvider>
        </Flex>
      </Flex>
)}



