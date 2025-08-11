import SingIn from '@/auth/component/SingIn'
import SideBar from '@/components/SideBar'
import AdminDashboard from '@/screens/AdminDashboard'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/login' index element={<SingIn />} />
                    <Route path='/' element={<SideBar />}  >
                        <Route path='/admin' element={<AdminDashboard />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute