import useStore from '@/helpers/store'
import dynamic from 'next/dynamic'
import Go from '@/components/dom/go'

const TurbineScene = dynamic(() => import('@/components/canvas/TurbineScene'), {
  ssr: false,
})

const Page = ({ title }) => {
  useStore.setState({ title })
  return (
    <>
      <TurbineScene r3f />
      <Go />
    </>
  )
}

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'TurbineScene',
    },
  }
}
