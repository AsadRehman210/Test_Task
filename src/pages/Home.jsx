import React from 'react'
import UserDetail from '../components/userDetail/UserDetail'
import Analytics from '../components/analytics/Analytics'
import CalendarAppointments from '../components/calenderAppointments/CalendarAppointments'
import Appointments from '../components/appointments/Appointments'
import Products from '../products/Product'




const Home = () => {
  return (
    <main className='font-sans'>
      <UserDetail />
      <Analytics />
      <CalendarAppointments />
      <Products />
      <Appointments />

    </main>
  )
}

export default Home
