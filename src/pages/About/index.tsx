import React from 'react'
import home1 from '../../assets/home1.webp'
import home2 from '../../assets/home2.webp'
import home3 from '../../assets/home3.webp'
import { Snackbar, TextField } from '@mui/material'
function Home() {
  const [open, setOpen] = React.useState(false)
  return (
    <>
      <div className='homeMainContainer'>
        <div className='homeWrapper'>
          <h1>Join similar-minded</h1>
          <h1>professionals across the globe!</h1>
          <h3>Help and be helped!</h3>
          <button className='contactButton'>Contact us</button>
        </div>
      </div>
      <div className='aboutUsSection'>
        <h3>About us</h3>
        <div className='aboutInfo'>
          {/* <div className="first"> */}
          <img style={{ width: '500px' }} src={home1} alt='home_one' />
          <div className='firstContent'>
            <h4>Why Join?</h4>
            <p>
              Primary goal of TALENT POOL is to help and decrease the hassle of companies with similar interest of
              hiring and outsourcing with clear monetary benefits.
            </p>
          </div>
          {/* </div>
          <div className="second"> */}
          <div className='firstContent gridRowStart'>
            <h4>Grow with us!</h4>
            <p>
              NAPC is open to new members from all over the world to meet in the virtual realm and share their
              aspirations and knowledge to improve the quality of their professional career and social life in different
              fields.
            </p>
          </div>
          <img style={{ width: '500px' }} src={home2} alt='' />
          {/* </div>
          <div className="third"> */}
          <img style={{ width: '500px' }} src={home3} alt='' />
          <div className='firstContent'>
            <h4>Members Benefits</h4>
            <p>
              We are dedicated to helping working professionals fulfill their goals and expand their horizons beyond the
              limitations of every day working schedules.
            </p>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className='chineseSection'>
        <div className='chineseContent'>
          <p>""</p>
          <h3>Only when all contribute their firewood can they build up a strong fire</h3>
          <p className='borderPara'></p>
          <p>Chinese Proverb</p>
        </div>
      </div>
      <div className='contactUsSection'>
        <h3 style={{ fontSize: '2rem' }}>Contact US</h3>
        <h4>Drop us a line!</h4>
        <form action=''>
          <TextField id='standard-basic' label='Name' variant='standard' />
          <TextField id='standard-basic' label='Email' variant='standard' />
          {/* <Textarea label="Message" minRows={2} /> */}
        </form>
        <button className='applyButton' onClick={() => setOpen(true)}>
          Contact us
        </button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          // onClose={handleClose}
          message='Note archived'
          // action={action}
        />
      </div>
      <div className='betterYet'>
        <div className='headBetterYet'>
          <h4 style={{ fontSize: '1.5rem', paddingBottom: '2rem' }}>Better yet, see us in person!</h4>
          <p>We love our customers, so feel free to visit during normal business hours.</p>
        </div>
      </div>
    </>
  )
}

export default Home
