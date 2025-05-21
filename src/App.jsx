import Header from "./components/Header"
import Hero from "./components/Hero"
import ReviewCarousel from "./components/ReviewCarousel"
import Services from "./components/Services"
import AboutUs from "./components/AboutUs"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="h-[1600px]">
      <Header></Header>
      <Hero></Hero>
      <ReviewCarousel></ReviewCarousel>
      <Services></Services>
      <AboutUs></AboutUs>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}