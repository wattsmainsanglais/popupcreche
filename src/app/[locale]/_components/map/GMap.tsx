'use client'
import React, {useMemo, useEffect} from 'react';
import {APIProvider, Map, useMap} from '@vis.gl/react-google-maps';
import {DeckProps} from '@deck.gl/core';
import {PolygonLayer} from '@deck.gl/layers';
import {GoogleMapsOverlay as DeckOverlay} from '@deck.gl/google-maps';

import MapMarker from './MapMarker';

import { Flex, Text, Heading } from '@radix-ui/themes';
import { markerTypes } from './data/markerData';

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

export default function GMap({apiKey, mapId, markerArray}: {apiKey: string | undefined, mapId: string | undefined, markerArray: markerTypes[]}) {

 const[markers, setMarkers] = React.useState(markerArray)

  const layers = [
    new PolygonLayer({
    id: 'PolygonLayer',
    data: [{points: [[-1.568, 46.408],[-1.398, 46.68] ,[-0.868, 47.06],[-0.069, 47.266],[.710, 47.381],[2.397, 47.064],[2.633, 46.352],[2.336, 45.522],[1.942, 45.090],[1.277, 44.826],[0.513, 44.794],[-0.453, 44.716],[-0.896, 44.821],[-1.183, 45.11]]}],

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
      <Flex width='95vw' height='80vh' direction={{initial: 'column', xs: 'column', sm: 'column', md: 'row' }} justify='center' align='center'>
        <Flex width={{initial: '90vw', xs: '90vw', sm: '90vw', md: '50vw'}} justify='center' align='center' direction='column' gap='2' p='3'>
          <Heading>
            Our Locations
          </Heading>
          <Text>
            The map highlights out usual work area, plus there are icons for venues which we frequently work with 
          </Text>
        </Flex>
        <Flex width={{initial: '90vw', xs: '90vw', sm: '90vw', md: '50vw'}} height={{initial: '60vh', xs: '60vh', sm: '60vh'}}>
          <APIProvider apiKey={apiKey}>
            <Map
            
              defaultCenter={{lat: 46.11, lng: 0.45}}
              defaultZoom={6.5}
              mapId={mapId} >
              <DeckGLOverlay layers={layers} />
              {markers.map( (m: markerTypes, index: React.Key | null | undefined) => 
                <MapMarker key={index} name={m.name} lat={m.lat} long={m.long} src={m.image1} src2={m.image2} />
              )}
              
            </Map>
          </APIProvider>
        </Flex>
      </Flex>
)}



