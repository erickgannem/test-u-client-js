import React from 'react'
import PropTypes from 'prop-types'

import { View } from '../styled'

import SelectedTabContext from '../../context/SelectedTabContext'

export default function Exams ({ pathname }) {
  const { setPathname } = React.useContext(SelectedTabContext)
  React.useEffect(() => {
    setPathname(pathname)
  })
  return (
    <View>
      <h1>Exams Section</h1>
    </View>
  )
}

Exams.propTypes = {
  pathname: PropTypes.string
}
