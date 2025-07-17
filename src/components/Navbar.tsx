// import { NavBar } from "@/components/ui/tubelight-navbar"
// import { Home as HomeIcon, User, Briefcase, FileText } from 'lucide-react'



// const navItems = [
//     { name: 'Dashboard', url: '#', icon: 'HomeIcon' },
//     { name: 'Search', url: '#', icon: 'User' },
//     { name: 'Docs', url: '#', icon: 'Briefcase' },
    
//   ]

//    <NavBar items={navItems} />

// import { Home, User, Briefcase, FileText } from 'lucide-react'
// import { NavBar } from "@/components/ui/tubelight-navbar"

// export function NavBarDemo() {
//   const navItems = [
//     { name: 'Dashboard', url: '#', icon: 'Home' },
//     { name: 'Search', url: '#', icon: 'User' },
//     { name: 'Docs', url: '#', icon: 'Briefcase' },
   
//   ]
//   <Button onClick={handleAuth} variant="outline">
//             {authenticated ? (
//               <>
//                 <LogOut className="mr-2 h-4 w-4" />
//                 Logout
//               </>
//             ) : (
//               <>
//                 <LogIn className="mr-2 h-4 w-4" />
//                 Login
//               </>
//             )}
//           </Button>
//           {authenticated && (
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button variant="ghost" size="icon">
//                   <Menu className="h-5 w-5" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end">
//                 <DropdownMenuItem>
//                   <Link href="/profile">Profile</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/settings">Settings</Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem>
//                   <Link href="/help">Help & Support</Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           )}

//   return <NavBar items={navItems} />
// }


// import { Home, User, Briefcase, FileText, LogOut, LogIn, Menu } from 'lucide-react'
// import { NavBar } from "@/components/ui/tubelight-navbar"
// import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } 

// from "@/components/ui/dropdown-menu"
// import Link from "next/link"

// export function NavBarDemo() {
//   const navItems = [
//     { name: 'Dashboard', url: '#', icon: 'Home' },
//     { name: 'Search', url: '#', icon: 'User' },
//     { name: 'Docs', url: '#', icon: 'Briefcase' },
//   ]

//   const authenticated = true // or false based on your logic
//   const handleAuth = () => {
//     // your login/logout logic here
//   }

//   return (
//     <div className="flex items-center justify-between p-4">
//       <NavBar items={navItems} />

//       <div className="flex items-center gap-2">
//         <Button onClick={handleAuth} variant="outline">
//           {authenticated ? (
//             <>
//               <LogOut className="mr-2 h-4 w-4" />
//               Logout
//             </>
//           ) : (
//             <>
//               <LogIn className="mr-2 h-4 w-4" />
//               Login
//             </>
//           )}
//         </Button>

//         {authenticated && (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" size="icon">
//                 <Menu className="h-5 w-5" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuItem>
//                 <Link href="/profile">Profile</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/settings">Settings</Link>
//               </DropdownMenuItem>
//               <DropdownMenuItem>
//                 <Link href="/help">Help & Support</Link>
//               </DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         )}
//       </div>
//     </div>
//   )
// }


import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { NavBar } from "@/components/ui/tubelight-navbar"
import { usePrivy } from '@privy-io/react-auth'
import { LogIn, LogOut, Menu } from 'lucide-react'
import Link from "next/link"
import { useEffect } from "react"
import { createOrUpdateUser } from '@/utils/db/actions'

export function NavBarDemo() {
  const navItems = [
    { name: 'Dashboard', url: '/dashboard', icon: 'Dashboard' },
    { name: 'Search', url: '/search', icon: 'Search' },
    { name: 'Docs', url: '/docs', icon: 'Docs' },
  ]

  const{login , logout, authenticated, user} = usePrivy();

   useEffect(() => {
    if (authenticated && user) {
      handleAuthenticated();
    }
  }, [authenticated, user]);
  
  const handleAuthenticated = async()=>{
    if(user && user.wallet?.address){
      try{
     
      await createOrUpdateUser( 
        user.wallet.address,
        user.email?.address || ""
      );

      }catch(error){
       console.error("Error updating user information:" , error);
      }
    }
  }
  const handleAuth = () => {
    if(authenticated){
      logout();
    }
    else{
      login();
    }
  }


  return (
    <div className="relative w-full p-4 ">
      {/* Left Side - NavBar */}
      <div className="inline-block">
        <NavBar items={navItems} />
      </div>

      {/* Manually Positioned Right Side */}
      <div className="fixed right-9 top-1/2 -translate-y-1/2 flex items-center gap-8 -mt-79 z-50">
        <Button onClick={handleAuth} variant="outline">
          {authenticated ? (
            <>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </>
          ) : (
            <>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </>
          )}
        </Button>

        {authenticated && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" >
              <DropdownMenuItem >
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/help">Help & Support</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  )
}
