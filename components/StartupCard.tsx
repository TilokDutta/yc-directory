import { cn, formalDate } from '@/lib/utils';
import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { Author, Startup } from '@/sanity/types';
import { Skeleton } from './ui/skeleton';

export type StartupCardType = Omit<Startup, "author"> & {author?:Author};

const StartupCard = ({post}:{post:StartupCardType}) => {
    const {_createdAt,views,author,title,category,_id,description,image} = post;
    
  return (
    <li className="startup-card group">
        <div className="flex-between">
            <p className="startup_card_date">
                {formalDate(_createdAt.toString())}
            </p>
            <div className="flex gap-2">
                <EyeIcon className="size-6 text-primary"/>
                <span className="text-16-medium">{views}</span>
            </div>
        </div>
        <div className="flex-between mt-5 gap-5">
            <div className="flex-1">
                <Link href={`/users/${author?._id}`}>
                    <p className="text-16-medium line-clamp-1">{author?.name}</p>
                </Link>
                <Link href={`/startup/${_id}`}>
                    <h3 className="text-26-semibold line-clamp-1">
                        {title}
                    </h3>
                </Link>
            </div>
            <Link href={`/users/${author?._id}`}>
                <Image src={author?.image!} alt={author?.name as string} width={48} height={48} className="rounded-full"></Image>
            </Link>
        </div>
        <Link href={`/startup/${_id}`}>
            <p className="startup-card_desc">
                {description}
            </p>

            <img src={image} alt="placeholder"  className="startup-card_img"/>

        </Link>

        <div className="flex-between  mt-5 gap-5">
            <Link href={`/?query=${category?.toLowerCase()}`}>
                <p className="text-16-medium">
                    {category}
                </p>
            </Link>
            <button className="startup-card_btn">
                <Link href={`/startup/${_id}`}>
                    Details
                </Link>
            </button>
        </div>
    </li>
  );
};

export const StartupCardSkeleton = () =>(
    <>
        {[0,1,2,3,4].map((index:number) => (
            <li key={cn('skeleton',index)}>
                <Skeleton className="startup-card_skeleton"/>
            </li>
        ))}
    </>
)

export default StartupCard 