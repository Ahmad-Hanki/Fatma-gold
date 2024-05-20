import { ReactNode } from "react"
import { cookies } from 'next/headers'
import { redirect } from "next/navigation";

interface DashboardLayoutProps  {
  children: ReactNode
}


const DashboardLayout = ({children}:DashboardLayoutProps) => {
  const cookie = cookies();
  const data = cookie.get('togya');
  if (!data || data.name != 'togya' || data.value != 'togya') {
    redirect('/');
  }
  return children
}

export default DashboardLayout