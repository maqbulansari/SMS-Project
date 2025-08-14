import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSubButton, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from './ui/button'

const SideBar = () => {

  const handleLogOut = ()=>{
    window.localStorage.removeItem("Token")
  }

  const items = [
  {
    title: "Home",
    to:"/admin"
    // url: "#",
    // icon: Home,
  },
  {
    title: "Ragister",
    to:"/ragistration"
    // url: "#",
    // icon: Inbox,
  },
  {
    title: "Addmision",
    to:"/addmission"
    // url: "#",
    // icon: Inbox,
  },
  {
    title: "Inbox",
    // url: "#",
    // icon: Inbox,
  },
  {
    title: "Calendar",
    // url: "#",
    // icon: Calendar,
  },
  {
    title: "Search",
    // url: "#",
    // icon: Search,
  },
  {
    title: "Settings",
    // url: "#",
    // icon: Settings,
  },
]
  return (
  
    <SidebarProvider style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        }
      }  >
    <Sidebar >  
       <SidebarHeader />
        <span className="text-base pl-2 font-semibold">Your School</span>
       <SidebarContent >
        <SidebarGroup />
         <SidebarGroupLabel>Actions</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.to}>
                      {/* <item.icon /> */}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        <SidebarGroup />
       </SidebarContent>
       <SidebarMenu>
        <SidebarMenuButton>
          <SidebarMenuItem>
           <Link onClick={()=>handleLogOut} to="/login">Log Out</Link>
          </SidebarMenuItem>
        </SidebarMenuButton>
       </SidebarMenu>
      <SidebarFooter />
    </Sidebar>
      <Outlet />
    </SidebarProvider>
  
  )
}
  

export default SideBar