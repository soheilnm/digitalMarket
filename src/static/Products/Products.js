
import { Layout } from 'antd'
import Sidebar from './Sider'
import Contents from './Content'
import { useEffect , useState } from 'react'
const { Content } = Layout
export default function Products() {

  return (
    <div>        
        <Layout>
          <Sidebar/>
          <Contents/>
        </Layout>
    </div>
  )
}
