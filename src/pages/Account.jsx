
import Header from '../components/Header/Header'
import SectionCard from '../components/SectionCard/SectionCard'
import SectionSend from '../components/SectionSend/SectionSend'
import SectionExtract from '../components/SectionExtract/SectionExtract'


function Home() {
 
  return (
    <>
      <div className='Home'>
        {/* HEADER componente */}
        <Header/>
          <main>
            <SectionCard />
            <SectionSend />
            <SectionExtract/>
          </main>
      </div>
    </>
  )
}

export default Home