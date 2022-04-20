import { Tab } from '@headlessui/react'
import { Description } from '@headlessui/react/dist/components/description/description'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import AppLayout from '../components/AppLayout'
import Query from '../components/Query'
import { TrendingList } from '../components/TrendingList'
import { OPolicy } from '../types/core'


const policies:OPolicy[] = [
  {
    Id: 1,
    On: 'Pembentukan Badan Pengawasan Keuangan (BAPPK)',
    Number: '1',
    Year: '2020',
    Entity: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      Description:''
    },
    Initiator: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      
    },
    EnactedAt: '2020-01-01',
    EnactedIn: 'string',
    IssuedAt: '2020-01-01',
    IssuedIn: '',
    InForceSince: '2020-01-01',
    PolicyFiles: [],
    PolicyType: {
      Id: '1',
      Name: 'Undang-Undang'
    }
  },
  {
    Id: 1,
    On: 'Pembentukan Badan Pengawasan Keuangan (BAPPK)',
    Number: '1',
    Year: '2020',
    Entity: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      Description:''
    },
    Initiator: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      
    },
    EnactedAt: '2020-01-01',
    EnactedIn: 'string',
    IssuedAt: '2020-01-01',
    IssuedIn: '',
    InForceSince: '2020-01-01',
    PolicyFiles: [],
        PolicyType: {
      Id: '1',
      Name: 'Undang-Undang'
    }
  },
  {
    Id: 1,
    On: 'Pembentukan Badan Pengawasan Keuangan (BAPPK)',
    Number: '1',
    Year: '2020',
    Entity: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      Description:''
    },
    Initiator: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      
    },
    EnactedAt: '2020-01-01',
    EnactedIn: 'string',
    IssuedAt: '2020-01-01',
    IssuedIn: '',
    InForceSince: '2020-01-01',
    PolicyFiles: [],
        PolicyType: {
      Id: '1',
      Name: 'Undang-Undang'
    }
  },
  {
    Id: 1,
    On: 'Pembentukan Badan Pengawasan Keuangan (BAPPK)',
    Number: '1',
    Year: '2020',
    Entity: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      Description:''
    },
    Initiator: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      
    },
    EnactedAt: '2020-01-01',
    EnactedIn: 'string',
    IssuedAt: '2020-01-01',
    IssuedIn: '',
    InForceSince: '2020-01-01',
    PolicyFiles: [],
        PolicyType: {
      Id: '1',
      Name: 'Undang-Undang'
    }
  },
  {
    Id: 1,
    On: 'Pembentukan Badan Pengawasan Keuangan (BAPPK)',
    Number: '1',
    Year: '2020',
    Entity: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      Description:''
    },
    Initiator: {
      Id: '1',
      Name: 'PT. BANK NEGARA INDONESIA',
      
    },
    EnactedAt: '2020-01-01',
    EnactedIn: 'string',
    IssuedAt: '2020-01-01',
    IssuedIn: '',
    InForceSince: '2020-01-01',
    PolicyFiles: [],
        PolicyType: {
      Id: '1',
      Name: 'Undang-Undang'
    }
  },
  
]

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(' ')
}


const Home: NextPage = () => {

  const [activeTab, setActiveTab] = React.useState(0)

  let tabs = {
    Trending: {
      title: 'Trending',
      content: <TrendingList policies={policies} />,
    },
    Terbaru: {
      title: 'Terbaru',
      content: <TrendingList policies={policies} />,
    },
    Pilihan: {
      title: 'Pilihan',
      content: <TrendingList policies={policies} />,
    },
    
  }

  return (
    <AppLayout title='aturannya.app'>
      <div className='flex flex-col w-full px-10 mx-auto mt-10 antialiased md:w-2/3 gap-y-10'>
        <section>
          <h1 className='text-4xl text-center md:text-5xl lg:text-6xl'>
          <span className='font-sans font-extrabold'>Aturannya Apa? Cari di sini!</span>
          <br />
          <span className='font-sans text-lg text-gray-500'>
            Simple. Untuk anda yang awam atau yang expert.
          </span>
        </h1>
        </section>
        <Query placeholder='Pencarian cepat...' />
        <Tab.Group selectedIndex={activeTab} onChange={setActiveTab}>
          <Tab.List className="flex flex-row justify-start p-1 space-x-1 border-b border-b-gray-400">
            {Object.keys(tabs).map((key) => (
              <Tab key={key} className={({ selected }) => classNames(
                'font-semibold py-2 px-3 text-sm rounded-md',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                selected ? 'text-blue-500' : 'text-gray-500'
              )}>{key}</Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.keys(tabs).map((key) => (
              <Tab.Panel key={key}>{tabs[key as keyof typeof tabs].content}</Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
      </AppLayout>
  )
}

export default Home
