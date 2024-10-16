'use client';
import React, { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon} from '@heroicons/react/16/solid';
import ZooCard from './ZooCard';

interface ZooCardProps {
  id: number;
  name: string;
  location: string;
  description?: string;
}

interface HeaderProps {
  zoos: ZooCardProps[]; // ズーのリストを受け取る
}

const Header: React.FC<HeaderProps> = ({ zoos }) => {
  const [query, setQuery] = useState('');
  const [selectedZoo, setSelectedZoo] = useState<ZooCardProps | null>(null);

  // クエリに基づいてズーをフィルタリング
  const filteredZoos = query === ''
    ? zoos
    : zoos.filter((zoo) =>
        zoo.name.toLowerCase().includes(query.toLowerCase()) ||
        zoo.location.toLowerCase().includes(query.toLowerCase())
      );

  // filteredZoosがundefinedでないことを保証する
  const validFilteredZoos = Array.isArray(filteredZoos) ? filteredZoos : [];

  return (
    <header>
      <div className='container-header header_label'>
        <h1 className='header_title'>Zoo Management</h1>
        <form className='item_center' action="#">
          <Combobox value={selectedZoo} onChange={setSelectedZoo}>
            <div className='relative mt-1'>
              <div 
                className='
                  relative 
                  w-full 
                  cursor-default 
                  
                  rounded-lg 
                  bg-white 
                  text-left 
                  shadow-md 
                  focus:outline-none 
                  focus-visible:ring-100
                  focus-visible:ring-white/75 
                  focus-visible:ring-offset-2 
                  focus-visible:ring-offset-teal-500 
                  sm:text-sm
              '>
                <Combobox.Input
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="検索"
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                />
                <Combobox.Button className='absolute inset-y-0 right-0 flex items-center pr-2'>
                  <ChevronUpDownIcon
                  className="h-50 w-500 text-red-700"
                  aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
              >

                  <Combobox.Options className="absolute mt-1000 max-h-100 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                    {validFilteredZoos.length > 0 ? (
                      validFilteredZoos.map((zoo) => (
                        <Combobox.Option 
                          key={zoo.id} 
                          value={zoo}
                          className={({ active }) => 
                          `relative cursor-default select-none py-2 pl-100 pr-400 ${active ? 'bg-teal-600 text-white': 'text-gray-900'}`
                          }
                          >
                          {zoo.name} - {zoo.location}
                        </Combobox.Option>
                      ))
                    ) : (
                      <div>結果がありません</div>
                    )}
                  </Combobox.Options>
                </Transition>
            </div>
          </Combobox>
        </form>
      </div>

      {/* 選択されたズーの詳細を表示 */}
      {selectedZoo && (
        <ZooCard
          id={selectedZoo.id}
          name={selectedZoo.name}
          location={selectedZoo.location}
          description={selectedZoo.description}
        />
      )}
    </header>
  );
};

export default Header;
