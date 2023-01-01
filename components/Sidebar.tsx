import React from 'react'
import {
    BellIcon,
    HashtagIcon,
    BookmarkIcon,
    CircleStackIcon,
    EllipsisHorizontalCircleIcon,
    EnvelopeIcon,
    UserIcon,
    HomeIcon,
} from '@heroicons/react/24/outline'
import SidebarRow from './SidebarRow'

function Sidebar() {
  return (
    <div className='col-span-2 flex flex-col items-center px-4 md:items-start'>
        <img className='m-3 h-9 w-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png" 
        alt="" />
        <SidebarRow Icon={HomeIcon} title='Home' />
        <SidebarRow Icon={HashtagIcon} title='Explore' />
        <SidebarRow Icon={BellIcon} title='Notification' />
        <SidebarRow Icon={EnvelopeIcon} title='Messages' />
        <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
        <SidebarRow Icon={CircleStackIcon} title='Lists' />
        <SidebarRow Icon={UserIcon} title='Sign In' />
        <SidebarRow Icon={EllipsisHorizontalCircleIcon} title='More' />

    </div>
  )
}

export default Sidebar