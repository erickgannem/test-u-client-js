import React from 'react'
import PropTypes from 'prop-types'

import { View } from '../styled'

import SelectedTabContext from '../../context/SelectedTabContext'

export default function Schools ({ pathname }) {
  const { setPathname } = React.useContext(SelectedTabContext)
  React.useEffect(() => {
    setPathname(pathname)
  })
  return (
    <View>
      <h1>Schools Section</h1>
    </View>
  )
}

Schools.propTypes = {
  pathname: PropTypes.string
}
