import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import ReactMapGL, { Source, Layer, ScaleControl } from 'react-map-gl';
import * as turf from '@turf/turf';
import axios from 'axios';

//TODO: debounce hook to move to separate file
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const MapTest = () => {
  const [lon, setLon] = useState(2.35);
  const [lat, setLat] = useState(48.85);
  const [radiusA, setRadiusA] = useState(200);
  const [radiusB, setRadiusB] = useState(100);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [display, setDisplay] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  let center = [lon, lat];

  const options = { steps: 100, units: 'kilometers', properties: {} };

  const circleA = turf.circle(center, radiusA, options);
  const lineA = turf.lineString(...circleA.geometry.coordinates);

  const circleB = turf.circle(center, radiusB, options);
  const lineB = turf.lineString(...circleB.geometry.coordinates);

  const mapRef = useRef(null);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 600, // , [-87.61694, 41.86625]
    latitude: lat,
    longitude: lon,
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
  });

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }

    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${debouncedQuery}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
      )
      .then((response) => {
        console.log(response.data.features);
        setResults(response.data.features);
      });
  }, [debouncedQuery]);

  return (
    <>
      <Head>
        <title>[TEST MAP]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>MapTest</div>

      <ReactMapGL
        {...viewport}
        interactive={true}
        ref={mapRef}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        transitionDuration={100}
        onMove={(e) => setViewport(e.viewport)}
      >
        <div style={{ position: 'absolute', top: 5, left: 5 }}>
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value), setDisplay(() => true);
            }}
          />
        </div>
        <div
          style={{
            position: 'absolute',
            top: 10,
            left: 5,
            display: display ? 'block' : 'none',
          }}
        >
          <ul>
            {results.length > 0 &&
              results.map((res) => (
                <li
                  key={res.id}
                  onClick={() => {
                    setQuery(() => res.place_name);
                    setResults(() => []);
                    setDisplay(() => false);
                    setLon(() => res.center[0]);
                    setLat(() => res.center[1]);
                    setViewport((prev) => ({
                      ...prev,
                      longitude: res.center[0],
                      latitude: res.center[1],
                      zoom: 4.5,
                    }));
                  }}
                >
                  {res.place_name}
                </li>
              ))}
          </ul>
        </div>
        <div style={{ position: 'absolute', bottom: 200, left: 100 }}>
          <ScaleControl maxWidth={100} unit={'metric'} />
        </div>

        {/* first circle */}
        <Source id="circle-1" type="geojson" data={circleA}>
          <Layer
            id="circle-1-fill"
            type="fill"
            paint={{
              'fill-color': '#000',
              'fill-opacity': 0.2,
              'fill-outline-color': 'white',
            }}
          />
        </Source>

        <Source id="circle-1-line" type="geojson" data={lineA}>
          <Layer
            id="circle-1-line"
            type="line"
            paint={{
              'line-color': 'red',
              'line-width': 2,
            }}
          />
        </Source>

        {/* second circle */}
        <Source id="circle-2" type="geojson" data={circleB}>
          <Layer
            id="circle-2-fill"
            type="fill"
            paint={{
              'fill-color': '#000',
              'fill-opacity': 0.2,
              'fill-outline-color': 'white',
            }}
          />
        </Source>

        <Source id="circle-2-line" type="geojson" data={lineB}>
          <Layer
            id="circle-2-line"
            type="line"
            paint={{
              'line-color': 'black',
              'line-width': 2,
            }}
          />
        </Source>
      </ReactMapGL>
    </>
  );
};

export default MapTest;
