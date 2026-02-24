

import { Pagination } from '@/components/CustumPages/Pagination'
import './Home.css'


const HomePage = () => {
  
  return (
    <div className='homepage'>
  <section className='section-1'>
    <div>
    <h1 className='title'>Wear the<br/>
    <em>future</em> <br />
    forward
    </h1>
    <p className='text'>Discover curated fashion by brand and category and find exactly what you’re looking for in seconds with Fashion FWD Picker.</p>
    </div>
    <div className='hero-images'>
      <img className='img1' src="https://plus.unsplash.com/premium_photo-1713586580802-854a58542159?w=400&h=500&fit=crop" alt="fashion" />
      <img className='img2' src="https://images.unsplash.com/photo-1608748010899-18f300247112?w=400&h=500&fit=crop" alt="fashion" />
      <div className='fwd'>Fashion FwD</div>
    </div>
    <hr />

  </section>
  <section>
    <div>
      <Pagination pagesNumber={4}/>
      
    </div>
  </section>


    </div>
  )
}

export default HomePage