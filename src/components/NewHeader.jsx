'use client'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { cn } from '@/lib/utils'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useScroll, motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const menuItems = [
    { name: 'About', href: createPageUrl('About') },
    { name: 'Speaking', href: `${createPageUrl('Home')}#speaking` },
    { name: 'Testimonials', href: `${createPageUrl('Home')}#testimonials` },
]

const industryItems = [
    { name: 'Corporate Leadership', href: createPageUrl('corporate-leadership-training-speaker') },
    { name: 'High School', href: createPageUrl('high-school-motivational-speaker') },
    { name: 'College & University', href: createPageUrl('college-keynote-speaker') },
    { name: 'Anti-Bullying Programs', href: createPageUrl('anti-bullying-speaker-schools') },
    { name: 'Student Assemblies', href: createPageUrl('student-assembly-speaker') },
    { name: 'Diversity & Inclusion', href: createPageUrl('diversity-inclusion-speaker') },
    { name: 'Graduation Ceremonies', href: createPageUrl('graduation-commencement-speaker') },
    { name: 'Mental Health & Teens', href: createPageUrl('mental-health-speaker-teens') },
    { name: 'Personal Branding', href: createPageUrl('personal-branding-speaker-students') },
]

const Logo = ({ className }) => {
    return (
        <div
            className={cn("w-10 h-10 flex items-center justify-center cursor-pointer select-none", className)}
        >
            <img 
                src="/assets/de-icon.png" 
                alt="Denis Estimon Logo" 
                className="w-full h-full object-contain"
            />
        </div>
    )
}

export const NewHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()
    const location = useLocation()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    React.useEffect(() => {
        setMenuState(false)
    }, [location.pathname, location.hash])

    React.useEffect(() => {
        const originalOverflow = document.body.style.overflow
        document.body.style.overflow = menuState ? 'hidden' : ''
        return () => {
            document.body.style.overflow = originalOverflow
        }
    }, [menuState])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="group fixed z-20 w-full pt-2">
                <div
                    className={cn(
                        'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12',
                        'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.25)]'
                    )}
                    style={{ WebkitBackdropFilter: 'blur(18px) saturate(140%)', backdropFilter: 'blur(18px) saturate(140%)' }}
                >
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                to={createPageUrl('Home')}
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                aria-expanded={menuState}
                                className={cn("relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden", scrolled ? 'text-gray-700' : 'text-white')}>
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                onClick={() => setMenuState(false)}
                                                className="block duration-150 text-gray-900 hover:text-black"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <DropdownMenu>
                                            <DropdownMenuTrigger className="flex items-center gap-1 duration-150 text-gray-900 hover:text-black">
                                                <span>By Industry</span>
                                                <ChevronDown className="w-4 h-4" />
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent className="w-56">
                                                {industryItems.map((item, index) => (
                                                    <DropdownMenuItem key={index} asChild>
                                                        <Link
                                                            to={item.href}
                                                            onClick={() => setMenuState(false)}
                                                            className="w-full"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </DropdownMenuItem>
                                                ))}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-white group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                to={item.href}
                                                className={cn('block duration-150', scrolled ? 'text-gray-700 hover:text-black' : 'text-white/90 hover:text-white')}
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                    <li>
                                        <div className="space-y-3">
                                            <span className={cn('block font-medium', scrolled ? 'text-gray-700' : 'text-white/90')}>
                                                By Industry
                                            </span>
                                            <ul className="space-y-3 pl-4">
                                                {industryItems.map((item, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={item.href}
                                                            className={cn('block duration-150 text-sm', scrolled ? 'text-gray-600 hover:text-black' : 'text-white/70 hover:text-white')}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    className="bg-black text-white rounded-full hover:bg-gray-800"
                                    size="sm">
                                    <Link to={createPageUrl('booking')} onClick={() => setMenuState(false)}>
                                        <span>Book Denis</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}