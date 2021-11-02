import React from "react"
import { JapanMap } from "components/atoms"

type MapProps = {
  jp_geo: any
}

export const Map: React.FC<MapProps> = ({ jp_geo }) => {

  return (
    <>
      <JapanMap jp_geo={jp_geo}/>
    </>
  )
}
