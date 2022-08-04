import grid from './images/grid.png'
const HeroSection = () => {
  return (
    <section className='hero'>
      <img src={grid} alt='grid' className='grid' />
      <h1 className='title'>Online Experience</h1>
      <p className='desc'>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  )
}

export default HeroSection
