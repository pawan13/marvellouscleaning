import React from 'react'
import HomeScreens from './HomeScreens'
import BookingFormScreen from './BookingScreens'
import AboutScreens from './AboutScreens'
import ServicesScreens from './ServicesScreens'

export default function () {
  return (
    <div>
        <HomeScreens/>
        <ServicesScreens/>
        <AboutScreens/>
        <BookingFormScreen/>

    </div>
  )
}
