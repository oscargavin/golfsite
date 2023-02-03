import React from 'react';
import { NextPage } from 'next';

import Header from '@/components/Header';
import Table from '@/components/Table';
import ProfileDetails from '@/components/ProfileDetails';


const Profile: NextPage = () => {
    return (
        <div className='linear-background h-screen'>
            <Header />
            <div className='flex flex-row justify-around pt-24 mx-24'>
                <ProfileDetails image="/profile.png" alt="Profile Picture" title="Max Church" email="mchurch@churchmail.com" />
                <div className='w-3/5 rounded-lg shadow-lg'>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Profile;