import React from 'react'
import PropTypes from 'prop-types'

import { View } from '../styled'

import SelectedTabContext from '../../context/SelectedTabContext'

export default function UserProfile ({ pathname }) {
  const { setPathname } = React.useContext(SelectedTabContext)
  React.useEffect(() => {
    setPathname(pathname)
  })
  return (
    <View>
      <h1>User Profile Section</h1>
    </View>
  )
}

UserProfile.propTypes = {
  pathname: PropTypes.string
}
