import React, { useState } from 'react'
import './Home.scss'
import { withHeader } from '../Header/Header'
import { Carousel } from 'react-responsive-carousel'
import paper from '../../images/paper.gif'
import doc from '../../images/doc.png'
import idea from '../../images/idea.png'
import price from '../../images/shopping.svg'
import diamond from '../../images/diamond.svg'
import shield from '../../images/weapons.svg'
import gmail from '../../images/gmail.svg'
import facebook from '../../images/facebook.svg'
import phone from '../../images/phone.svg'
import multimedia from '../../images/multimedia.svg'
import insta from '../../images/insta.svg'
import Modal from '../Modal'
import TNC from './TNC'
import Revision from './Revision'
import Plagarism from './Plagarism'
import Cookie from './Cookie'

const Home = () => {
  const [showPortal, setShowPortal] = useState(false)
  const [mode, setMode] = useState('')
  const QuoteLink = () => (<a onClick={() => {
    setShowPortal(true)
    setMode('contact')
  }}><img src={multimedia}/><span style={{ verticalAlign: 'top', padding: 10 }}>Contact US/Get quote</span></a>)
  return (<div className="homeContainer"><Carousel showArrows={false} showThumbs={!1}interval={5000}autoPlay={!0}infiniteLoop={!0}><div className="carousal-container" style={{ backgroundColor: '#dde4ec' }}>
    <div className="block" style={{ display: 'flex', justifyContent: 'unset' }}>
      <img src={paper}/>
      <p className="legends">Let's  make Original Research,  Plagiarism Free</p>
    </div>
  </div>
  <div className="carousal-container" style={{
    backgroundColor: '#f7f7f7'
  }}>
    <div className="block" style={{ display: 'flex', justifyContent: 'unset' }}>
      <img src={doc} />
      <p className="legends">We help you to make Research in a systematic and professional way</p>
    </div>
  </div>
  <div className="carousal-container" style={{ backgroundColor: '#003d4c' }}>
    <div className="block" style={{ display: 'flex', justifyContent: 'unset' }}>
      <img src={idea} />
      <p className="legends" style={{ color: '#fff' }}>Convert your ideas into realization</p>
    </div>
  </div>
  </Carousel>
  <div className="card">
    <p>
      <b className="bigText">Xplore Research Solutions</b> has emerged as industry leaders in the delivery
of services to customers worldwide in technological, non-technical, writing
and record correction over the last two decades. We are specialized in
offering exclusive and best services to customers meeting their needs and
wants in research work. Furthermore we provide inclusive services through
the provision of all kinds of writing, specied, undened or responsive
services to consumers.
    </p>
  </div>
  <div className="card">
    <h2>Why us?</h2>
    <div className="flex">
      <div className="flex1">
        <img className="icon" src={price} />
        <h3>Best price gaurantee</h3>
        <p>
        It is shocking how often people are willing to believe that the highest prices ensure the best value.
 We at Xplore delivery services with high quality service at an affordable price.
        </p>
      </div>
      <div className="flex1">
        <img src={diamond} />
        <h3>Professional services</h3>
        <p>
        We are specialized in
offering exclusive and best services to customers meeting their needs and
wants in research work. Furthermore we provide inclusive services through
the provision of all kinds of writing.
        </p>
      </div>
      <div className="flex1">
        <img src={shield} />
        <h3>Plagiarism-free Guarantee.</h3>
        <p>
            Our skilled, disciplined writers
still write papers from scratch. We run several qualified plagiarism testing systems which will
never miss a plagiarized paper to ensure our customers health.
        </p>
      </div>
    </div>
  </div>

  <div className="card">
    <div style={{ float: 'right' }}>
      <QuoteLink/>
    </div>
    <h2>Our services</h2>
    <div className="flex box">
      <div className="flex1">
        <h3>Research services</h3>
        <ul>
          <li>Research proposal</li>
          <li>Research consultation</li>
          <li>Research Assistance</li>
          <li>Writing research Papers  for (Scopus, Web of Science, UGC and Australian Business Deans Council indexed Journals)</li>
        </ul>
      </div>
      <div className="flex1">
        <h3>Ph.D services</h3>
        <ul>
          <li>Ph.D proposal</li>
          <li>Ph.D consultation</li>
          <li>Topic selection</li>
          <li>Thesis assistance</li>
          <li>Publication Assistance</li>
          <li>Thesis Editing</li>
          <li>Thesis writing</li>
        </ul>
      </div>
      <div className="flex1">
        <h3>Additional services</h3>
        <ul>
          <li>Plagiarism checking using Turnitin software</li>
          <li>Plagiarism reduction</li>
        </ul>
      </div>
    </div>
  </div>
  {showPortal && <Modal open={showPortal} easyClose onRequestClose={() => { setShowPortal(false) }}>
    {mode === 'TNC' && (<TNC/>)}
    {mode === 'contact' && (
      <div>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeVmfymHxsFdG2j7JpO13sKQoBN3U-1X0HDnKTzMnz29pvE7g/viewform?embedded=true" width="100%" height="400px" frameBorder="0" marginHeight="0" marginWidth="0">Loading…</iframe>
        {/*
        <div>
          <img src={multimedia}style={{ width: 40 }}/><b style={{
            verticalAlign: 'top',
            padding: 28,
            fontSize: 20,
            fontWeight: 'normal'
          }}>Contact US/Get quote</b>
        </div>
        <form style={{
          margin: '0px auto',
          width: 300
        }} action='/sendEmail' method='post'>
          <div>
            <h4>Select service</h4>

            <select name="service" value="" style={{ height: 36 }}>
              {[
                'Research consultation',
                'Research Assistance',
                'Writing research Papers',
                'Ph.D proposal',
                'Ph.D consultation',
                'Topic selection',
                'Thesis assistance',
                'Publication Assistance',
                'Thesis Editing',
                'Thesis writing          ',
                'Plagiarism checking using Turnitin software',
                'Plagiarism removing'
              ].map(service => (<option key={service} value={service}>{service}</option>))}
            </select>
          </div>
          <div>
            <h4>Comments</h4>
            <textarea name="comments" />
          </div>
          <div>
            <h4>Accept terms & conditions <input type="checkbox" required={true}/> </h4>
          </div>

          <button type="submit">Confirm</button>
        </form>
       */}
      </div>
    )}
    {mode === 'revision' && (<Revision />)}
    {mode === 'plagarism' && (<Plagarism />)}
    {mode === 'cookie' && (<Cookie />)}
  </Modal>}

  <footer>
    <div className="block" style={{ height: '100%', padding: '0 20px' }}>
      <div className="flex footerlink" style={{
        justifyContent: 'space-evenly'
      }}>
        <div style={{ marginBottom: 10 }}>
          <QuoteLink/>
        </div>
        <div>
          <a href="mailto:xploreresearch@gmail.com">
            <img src={gmail} />
          </a>
          <a href="https://www.facebook.com/Xplore-Research-Solutions-100625354994062/?modal=admin_todo_tour">
            <img src={facebook} />
          </a>
          <a href="tel:+918129994662">
            <img src={phone} />
          </a>
          <a href="https://www.instagram.com/p/B__i2DwAHqy/?igshid=vloy9aaz1de5">
            <img src={insta} />
          </a>
        </div>
      </div>

      <div className="flex small links" style={{ justifyContent: 'space-between' }}>
        <a onClick={() => {
          setShowPortal(true)
          setMode('TNC')
        }}>Terms & conditions</a>
        <a onClick={() => {
          setShowPortal(true)
          setMode('revision')
        }}
        >Revision Policy</a>
        <a onClick={() => {
          setShowPortal(true)
          setMode('plagarism')
        }}>Plagiarism Gaurantee</a>
        {/* <a onClick={() => {
          setShowPortal(true)
          setMode('cookie')
        }}>Cookie Policy</a> */}
      </div>
    </div>
    <div className="copyright">© Copyrights reserved</div>
  </footer>
  </div>
  )
}
const HomeWithHeader = withHeader(Home)
export default HomeWithHeader
