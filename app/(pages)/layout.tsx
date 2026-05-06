import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav variant="solid" />
      <main>{children}</main>
      <Footer />
    </>
  )
}
