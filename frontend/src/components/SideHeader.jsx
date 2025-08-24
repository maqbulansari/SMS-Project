import { useAuth } from "@/auth/AuthContext";
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { useNavigate } from "react-router-dom";
export function SideHeader() {

 const { userData } = useAuth();

 const navigation = useNavigate()
      const handleLogOut = ()=>{
     window.localStorage.removeItem("Token");
    navigation("/login")
  }

  const handleReporyCard = ()=>{
    navigation("/reportcard")
  }


  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        {userData.role === "Director"  && <SidebarTrigger className="-ml-1" />}
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          { userData.role === "Teacher" && <Button onClick={()=>handleReporyCard()} variant="ghost">Report Card</Button>

          }
         { userData.role === "Director" ? <Button variant="ghost" asChild size="sm" className="hidden sm:flex">
            <a
              href="https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
              rel="noopener noreferrer"
              target="_blank"
              className="dark:text-foreground"
            >
              GitHub
            </a>
          </Button> :   <Button variant="ghost" onClick={()=>handleLogOut()}>Log Out</Button>}
        </div>
      </div>
    </header>
  )
}
