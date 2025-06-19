"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

const navigationItems = [
  { name: "HOME", href: "/" },
  {
    name: "LESSONS",
    href: "/lessons",
    dropdown: [
      { name: "RIDING LESSONS", href: "/lessons/classes" },
      { name: "SAFETY GUIDELINES", href: "/lessons/safety" },
      { name: "PROPER ATTIRE", href: "/lessons/attire" },
      { name: "CANCELLATION POLICY", href: "/lessons/cancellation" },
    ],
  },
  {
    name: "ACTIVITIES",
    href: "/activities",
    dropdown: [
      { name: "HORSE SHOWS", href: "/activities/horse-shows" },
      { name: "CAMPS", href: "/activities/camps" },
      { name: "DRILL TEAM", href: "/activities/drill-team" },
      { name: "PARTIES", href: "/activities/parties" },
    ],
  },
  { name: "CALENDAR", href: "/calendar" },
  {
    name: "ABOUT US",
    href: "/about",
    dropdown: [
      { name: "STAFF", href: "/about/staff" },
      { name: "MEET THE HORSES", href: "/about/horses" },
      { name: "CONTACT US", href: "/about/contact" },
    ],
  },
]

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="backdrop-blur bg-lhra-blue/90 shadow-xl sticky top-0 z-50 border-b-4 border-lhra-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group transition-transform duration-200 hover:scale-105 hover:drop-shadow-[0_0_8px_#B8860B]">
              <div>
                <span className="font-papyrus text-2xl font-bold" style={{ color: 'white' }}>
                  LionHeart Riding Academy
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.dropdown ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="text-white hover:text-lhra-yellow hover:bg-lhra-blue/80 font-florentia font-medium flex items-center gap-1 tracking-wide transition-transform duration-200 hover:scale-105 hover:drop-shadow-[0_0_8px_#B8860B]"
                        >
                          {item.name}
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="bg-white border-lhra-yellow border-2 shadow-2xl rounded-xl overflow-hidden mt-2">
                        {item.dropdown.map((dropdownItem) => (
                          <DropdownMenuItem key={dropdownItem.name} asChild>
                            <Link
                              href={dropdownItem.href}
                              className="font-florentia text-lhra-blue hover:text-lhra-red hover:bg-lhra-yellow/10 px-4 py-2 transition-colors rounded-lg"
                            >
                              {dropdownItem.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white hover:text-lhra-yellow font-florentia font-medium px-3 py-2 transition-colors duration-200 tracking-wide transition-transform hover:scale-105 hover:drop-shadow-[0_0_8px_#B8860B]"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-lhra-yellow"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-lhra-blue/95">
            {navigationItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="text-white hover:text-lhra-yellow block px-3 py-2 rounded-md font-florentia font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-6 space-y-1">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="text-white/80 hover:text-lhra-yellow block px-3 py-1 text-sm font-florentia"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
