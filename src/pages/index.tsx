import dynamic from 'next/dynamic';
const Admin = dynamic(() => import('../admin/index'),{ssr: false})
export default function Home() {
  return (
    <Admin />
  )
}
