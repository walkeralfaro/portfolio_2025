import Footer from "@/components/app/footer"
import Header from "@/components/app/header"
import MainSection from "@/components/app/main-section"
// import { CloudFusionBackground, } from "@/components/ui/background/color-wave-background"

export default function App() {

  return (
    <>
      {/* <CloudFusionBackground
        light={["#a78bfa", "#f472b6", "#60fae5"]}
        dark={["#6366f1", "#a855f7", "#14b8a6"]}
      /> */}
      <div className="min-h-dvh flex flex-col">
        <Header />
        <div className="grow">
          <MainSection />
        </div>
        <Footer />
      </div>
    </>
  )
}