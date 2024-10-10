'use client' // Required for Next.js app router

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import Link from 'next/link'; // Use Next.js Link for routing
import mainLogo from '../app/assets/mainLogo.png'; // Path to your image

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <Image
                            alt="Logo"
                            src={mainLogo}
                            className="h-7 w-auto lg:h-8 md:h-8 sm:h-8"
                            priority // Adds loading optimization
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-14 poppins-regular">
                    <Link
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                    >
                        Home
                    </Link>
                    <Link
                        href="/shop"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                    >
                        Shop
                    </Link>
                    <Link
                        href="/about"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                    >
                        Contact
                    </Link>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link href="/user-profile" className="text-sm font-semibold leading-6 px-3 text-gray-900">
                        <UserOutlined style={{ fontSize: "18px" }} />
                    </Link>
                    {/* Uncomment if you want to add search functionality */}
                    {/* <Link href="/search" className="text-sm font-semibold leading-6 px-3 text-gray-900">
                        <SearchOutlined style={{ fontSize: "18px" }} />
                    </Link> */}
                    <Link href="/cart" className="text-sm font-semibold leading-6 px-3 text-gray-900">
                        <ShoppingCartOutlined style={{ fontSize: "20px" }} />
                    </Link>
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <Image
                                alt="Logo"
                                src={mainLogo}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/shop"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                                >
                                    Shop
                                </Link>
                                <Link
                                    href="/about"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-500 hover:text-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="/login"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
