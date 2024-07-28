'use client';

import { useState } from 'react';
import DashboardView from '@/components/DashboardView';
import TemplateList from '@/components/TemplateList';
import SearchDashboard from '@/components/Search';

export default function Dashboard() {

  const [ searchInput, setSearchInput ] = useState<string>();
  
  return (
    <>
      <SearchDashboard onSearchInput={setSearchInput}/>
      <TemplateList searchInput={searchInput as string}/>
    </>
    
  )
}
