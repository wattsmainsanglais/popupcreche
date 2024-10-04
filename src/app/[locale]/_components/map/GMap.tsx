'use client'

import {AdvancedMarker, APIProvider, Map} from '@vis.gl/react-google-maps';
import { Flex } from '@radix-ui/themes';

export default function GMap({api}: {api: string}) {
  const position = {lat: 53.54992, lng: 10.00678};

  return (

    <Flex width='90vw'>
    <APIProvider apiKey={api}>
      <Map   mapId="DEMO_MAP_ID"
         style={{width: '100vw', height: '100vh'}}
         defaultCenter={{lat: 46.11, lng: 0.41}}
         defaultZoom={7}
         gestureHandling={'greedy'}
         disableDefaultUI={true}
      
      >
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
    </Flex>
  );
}



