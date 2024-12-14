import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { auth, signIn, signOut } from '@/auth';
import { BadgePlus, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
// import { Avatar, AvatarFallback, AvatarImage } from "@/";



const Navbar = async () => {
  const session = await auth();
  return (
    <header className="py-3 px-5 bg-white shadow-sm font-work-sans">
        <nav className="flex justify-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="logo" height={30} width={144}></Image>
            </Link>
            <div className="flex items-center gap-5 text-black">
                {session && session?.user ? (
                    <>
                        <Link href = "/startup/create">
                            <span className="max-sm:hidden"> Create</span>
                            <BadgePlus className="size-6 sm:hidden"/>
                        </Link>
                        <form action= {async()=> {
                            "use server"
                            await signOut({redirectTo:"/"});
                        }}>
                            <button type="submit">
                                <span className="max-sm:hidden">LogOut</span>
                                <LogOut className="size-6 sm:hidden text-red-500"/>
                            </button>
                        </form>
                        <Link href = {`/users/${session?.id}`}>
                            <Avatar>
                                <AvatarImage
                                    src={session?.user?.image || ""}
                                    alt={session?.user?.name || ""}
                                />
                                <AvatarFallback>AV</AvatarFallback>
                            </Avatar>
                        </Link>
                    </>
                ) : (
                    <form action= {async() => {
                        "use server";
                        await signIn("github");
                    }}>
                        <button type="submit"> Login </button>
                    </form>
                )}
            </div>
        </nav>
    </header>
  );
};

export default Navbar