import React from 'react'
import Ping from './Ping'
import { STARTUP_VIEWS_QUERY } from '@/sanity/lib/query'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/write-client' 
import { unstable_after as after } from 'next/server'


const View = async ({id}:{id:string}) => {

    const result = await client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id });

    // Provide a fallback if result or views is null
    const views = result?.views ?? 0;
    after(
      async () =>
        await writeClient
          .patch(id)
          .set({views:views + 1})
          .commit()
    );

    const checkView = ({views}:{views:number}) =>{
        if(views == 1 ||  views == 0) return false;
        else return true;
    }
  return (
    <div className="view-container">
        <div className="absolute -top-2 -right-2">
            <Ping/>
        </div>
        <p className="view-text">
            <span className="text-black"> {checkView(views)? `${views} view`:`${views} views`}</span>
        </p>
    </div>
  )
}

export default View