import React, { useEffect, useState } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import japan_geo from '../data/japan_geo'

const JapanMap = () => {

  const [prefectures, setPrefectures] = useState([])

  const width = 1300
  const height = 960

  const projection = () => {
    return geoMercator()
      .scale(1000)
      .center([150, 36])
  }

  const fnc = (name) =>{
    alert(`click ${name} !!`)
  }

  useEffect(() => {
    const jp_geo = japan_geo
    setPrefectures(feature(jp_geo, jp_geo.objects.japan).features)
    console.log(feature(jp_geo, jp_geo.objects.japan).features)
  },[])

  return (
    <>
      <svg width={width} height={height}>
        {prefectures.map((d, i) => {
          return (
            <path
              key={`path-${i}`}
              d={geoPath().projection(projection())(d)}
              strokeWidth={0.5}
              onClick={() => fnc(d.properties.name)}
            />
          )
        })}
      </svg>
    </>
  )
}

export default JapanMap;