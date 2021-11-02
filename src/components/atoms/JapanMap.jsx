import React, { useEffect, useState } from 'react'
import {
  useColorModeValue,
  Tooltip
} from '@chakra-ui/react'
import { geoMercator, geoPath } from 'd3-geo'
import { feature } from 'topojson-client'
import styles from './styles/JapanMap.module.scss'


export const JapanMap = ({ jp_geo }) => {
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
    setPrefectures(feature(jp_geo, jp_geo.objects.japan).features)
    console.log(colorMode)
  }, [])

  return (
    <>
      <div className={styles.container}>
        <svg viewBox="0 0 500 500" preserveAspectRatio="none" >
          {prefectures.map((d, i) => {
            return (
              <Tooltip label={d.properties.name_ja || ""} key={i}>
                <path
                  d={geoPath().projection(projection())(d)}
                  strokeWidth={0.5}
                  onClick={() => fnc(d.properties.name)}
                  className={i % 2 ?
                    styles[`visitPref${colorMode}`] :
                    styles[`nonVisitPref${colorMode}`]
                  }
                />
              </Tooltip>
            )
          })}
        </svg>
      </div>
    </>
  )
}