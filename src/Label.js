// @flow

import React from 'react'
import './Label.css'

type Props = {|
  url: string,
  name: string,
  color: string
|}

export const Label = ({ color, name, url }: Props) =>
  <div className='label' style={{ backgroundColor: `#${color}` }}>
    {name}
  </div>

Label.displayName = 'Label'
