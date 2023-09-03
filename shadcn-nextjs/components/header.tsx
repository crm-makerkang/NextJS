'use client'

import { Butterfly_Kids } from "next/font/google"
import Container from "@/components/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShoppingCart, Sun, Moon, Menu } from "lucide-react"
import   ProfileButton  from "@/components/profilebutton"
import { useTheme } from "next-themes"
import { SheetTrigger, SheetContent, Sheet} from "@/components/ui/sheet"

const routes = [
  {
    href: "/1",
    label: "Products",
  },
  {
    href: "/2",
    label: "Categories",
  },
  {
    href: "/3",
    label: "On Sale",
  },
]

export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="sm:flex sm:justify-between py3 px-4 border-b"> 
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 
                        items-center justify-between w-full"> 
          <div className="flex items-center">
            <Sheet>
              <SheetTrigger>
                <Menu className="h-6 md:hidden w-6" />
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4">
                  {
                    routes.map((route, i) => (
                      <Link key={i} href={route.href} className="block px-2 py-1 text-lg">
                        {route.label}
                      </Link>
                    ))
                  }
                </nav>

              </SheetContent>
            </Sheet>

            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl font-bold">
                STORE NAME
              </h1>
            </Link>
          </div>

          <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
            { routes.map((route, i) => (
              <Button asChild variant={"ghost"}>
                <Link key={i} href={route.href} className="text-sm font-medium transition-colors">
                  {route.label}
  
                </Link>
              </Button>
            ))

            }
          </nav>

          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2" aria-label="Shopping Cart">
              <ShoppingCart className="w-6 h-6" />
              <span className="sr-only">
                Shopping Cart
              </span>
            </Button>

            <Button variant="ghost" size="icon" aria-label="Toggle Theme" 
                    className="mr-6" onClick={() => setTheme(theme=="dark"?"light":"dark")}>
              <Sun className="w-6 h-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0">

              </Sun>
              <Moon className="absolute w-6 h-6 rotate-90 scale-0 transition-all dark:-rotate-0 dark:scale-100">

              </Moon>
              <span className="sr-only">Toggle Theme</span>
            </Button>
            
            <ProfileButton />

          </div>

        </div>
      </Container>
    </div>
  )
}
