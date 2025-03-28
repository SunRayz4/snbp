"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, ChevronRight, User } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Define the type for menu items
type MenuItem = {
  name: string
  href: string
  dropdown?: { name: string; href: string }[]
}

// Define the menu structure
const menuItems: MenuItem[] = [
  {
    name: "MPD",
    href: "#",
    dropdown: [
      { name: "General Information", href: "/mpd/general-information" },
      { name: "Staff (Teaching)", href: "/mpd/staff" },
      { name: "School Infrastructure", href: "/mpd/infrastructure" },
      { name: "Documents and Information", href: "/mpd/documents" },
      { name: "Result and Academics", href: "/mpd/results" },
    ],
  },
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About Us",
    href: "/about",
    dropdown: [
      { name: "Our History", href: "/about/history" },
      { name: "President Desk", href: "/about/president-desk" },
      { name: "Director Desk", href: "/about/director-desk" },
      { name: "Principal Desk", href: "/about/principal-desk" },
      { name: "Vision & Mission", href: "/about/vision-mission" },
    ],
  },
  {
    name: "Admission",
    href: "/admission",
    dropdown: [
      { name: "Admission Form", href: "/admission/admission-form" },
      { name: "School Fee Structure", href: "/admission/school-fee-structure" },
      { name: "Transport Fee Structure", href: "/admission/transport-fee-structure" },
    ],
  },
  {
    name: "Academic",
    href: "/academic",
    dropdown: [
      { name: "Primary", href: "/academic/primary" },
      { name: "Pre-Primary", href: "/academic/pre-primary" },
      { name: "Secondary", href: "/academic/secondary" },
      { name: "Sr-Secondary", href: "/academic/sr-secondary" },
      { name: "Curriculum", href: "/academic/curriculum" },
    ],
  },
  {
    name: "Facilities",
    href: "/facilities",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
  {
    name: "Career",
    href: "#",
    dropdown: [
      { name: "View Jobs", href: "/career/view-jobs" },
      { name: "Apply", href: "/career/apply" },
    ],
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openMobileDropdowns, setOpenMobileDropdowns] = useState<string[]>([])

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdowns((prev) => (prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]))
  }

  const isMobileDropdownOpen = (name: string) => {
    return openMobileDropdowns.includes(name)
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center px-4 py-2">
            <Image
              src="\snbp-logo.jpg"
              alt="SNBP INTERNATIONAL School"
              width={500}
              height={100}
              className="h-20 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {menuItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-primary font-medium transition-colors focus:outline-none px-2 py-1">
                      {item.name} <ChevronDown className="ml-1 h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center" className="w-48">
                      {item.dropdown.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.name} asChild>
                          <Link href={dropdownItem.href} className="w-full cursor-pointer">
                            {dropdownItem.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors px-2 py-1"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Apply Button with href */}
          <div className="hidden lg:block">
            <Link href="/apply">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold">
                <User className="mr-2 h-4 w-4" />
                Apply
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
