import { useAuth } from '@/auth/AuthContext'
import SingIn from '@/auth/component/SingIn'
import SideBar from '@/components/SideBar'
import AddmissionForm from '@/screens/AddmissionForm'
import AdminDashboard from '@/screens/AdminDashboard'
import AllofficeStaff from '@/screens/AllofficeStaff'
import AllStudents from '@/screens/AllStudents'
import Allteachers from '@/screens/Allteachers'
import { OtherUserCard } from '@/screens/OtherUserCard'
import RagistrationForm from '@/screens/RagistrationForm'
import React from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'



const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('Token')
    return isAuthenticated ? children : <Navigate to="/login" replace />
}
const AppRoute = () => {
    const {userData} =useAuth();
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                         <Route path='/login' index element={ <SingIn />} />
                       { userData.role === "Director"  ? <Route path='/' element={<ProtectedRoute> <SideBar /> </ProtectedRoute> }  >
                           <Route path='/admin' element={<AdminDashboard />} />
                           <Route path='/allteachers' element={<Allteachers/>} />
                           <Route path='/allstudents' element={<AllStudents/>} />
                           <Route path='/allofficestaff' element={<AllofficeStaff />} />
                           <Route path='/addmission' element={<AddmissionForm />} />
                           <Route path='/ragistration' element={<RagistrationForm />} />
                    </Route> :
                    <Route path='/user' element={<OtherUserCard/>}/> }
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRoute