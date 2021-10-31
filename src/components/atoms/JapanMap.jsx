import React, { useEffect, useState } from 'react'
import { useColorModeValue } from '@chakra-ui/react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import japan_geo from 'data/japan_geo'
import styles from './styles/JapanMap.module.scss'

export const JapanMap = () => {
  const colorMode = useColorModeValue("Light", "Dark")
  const [prefectures, setPrefectures] = useState([])

  const projection = () => {
    return geoMercator()
      .scale(1000)
      .center([150, 36])
  }

  const fnc = (name) => {
    alert(`click ${name} !!`)
  }

  useEffect(() => {
    const jp_geo = japan_geo
    setPrefectures(feature(jp_geo, jp_geo.objects.japan).features)
    console.log(feature(jp_geo, jp_geo.objects.japan).features)
    console.log(colorMode)
  }, [])

  return (
    <>
      <svg viewBox="0 0 550 550">
        {prefectures.map((d, i) => {
          return (
            <path
              key={`path-${i}`}
              d={geoPath().projection(projection())(d)}
              strokeWidth={0.5}
              onClick={() => fnc(d.properties.name)}
              className={i % 2 ? 
                styles[`visitPref${colorMode}`] :
                styles[`nonVisitPref${colorMode}`]
              }
            />
          )
        })}
      </svg>
    </>
  )
}