import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const SideBar = () => {

  const items = [
  {
    title: "Home",
    // url: "#",
    // icon: Home,
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
    <SidebarProvider>
    <Sidebar>
       <SidebarHeader />
       <SidebarContent>
        <SidebarGroup />
         <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
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
      <SidebarFooter />
    </Sidebar>
    <SidebarTrigger />
     <Outlet/>
    </SidebarProvider>
  
  )
}
  

export default SideBar