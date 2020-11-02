import Nav from '../assets/components/Nav'
import Header from '../assets/components/Header'
import Ojectives from '../assets/components/Ojectives'
import Cards from '../assets/components/Cards'
import Partners from '../assets/components/Partners'
import NewsCard from '../assets/components/NewsCard'
import Contact from '../assets/components/Contact'
import Footer from '../assets/components/Footer'
import Copyright from '../assets/components/Copyright'

export default function index() {
    return (
        <div>
            <Nav navClass='sticky'/>
            <Nav navClass='hides'/>
            <Header/>
            <Ojectives>
                <Cards/>
            </Ojectives>
            <Partners/>
            <NewsCard/>
            <Contact/>
            <Footer/>
            <Copyright/>
        </div>
    )
}
