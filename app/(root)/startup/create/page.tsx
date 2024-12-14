import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import React from 'react'
import StartupForm from '@/components/StartupForm'

const page = async () => {
    const session = await auth();
    if(!session) redirect("/");
    return (
    <>
        <section  className="pink_container">
            <h1 className="heading">
                Submit your Startup Idea
            </h1>
        </section>
        <StartupForm/>
    </>
  )
}

export default page