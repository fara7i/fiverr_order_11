'use client'

import React from 'react'
import Link from 'next/link'
import { Play } from 'lucide-react'

// Hero Section 
const Hero = () => {


  React.useEffect(() => {

  
    //document.querySelectorAll('[data-fill]').forEach(elem => {
    //  elem.style.width = elem.getAttribute("data-fill");
    //});

    //var heroTextHolder = document.querySelector(".hero-section-text-holder")
    //heroTextHolder.style.transform = "translate3d(-0.6788px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
    //heroTextHolder.style["transform-style"] = "preserve-3d";


  }, [])

 

  return (
    <section id="hero">
      
      <div className="czd2q c92f3 cmhb9 c1plj">
          <div className="c1r3i c8lmj cew09 c09hn">

              {/*-- Hero content --*/}
              <div className="ckv2s cxdxt co6hs c8zhu chdqp">
                  
                   

                  {/*-- Content --*/}
                  <div className="cpo9b c2igy c7z56 c5ymx c4u1v cy5hl">
                      <h1 className="cps50 cbhe1 c21u3 cyb9k c41dw aos-init aos-animate" data-aos="fade-down">Your website, reimagined</h1>
                      <p className="text-gray-600 c0atf czz36 aos-init aos-animate" data-aos="fade-down" data-aos-delay="150">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                      
                      <form className="c2bi2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="300">
                          <div className="cw3my cd663 cks70 c2k38 c54sb c5a8a cmhb9 cnc7y">
                              <input type="tel" className="c3mdo cltj3 cog1o cs8sl csrqa" placeholder="Phone number" aria-label="Phone number" />
                              <a className="text-white bg-teal-500 cvy08 c2npy ctr9b" href="#0">Request code</a>
                          </div>
                          {/*-- Success message --*/}
                          {/*-- <p className="text-center md:text-left mt-2 opacity-75 text-sm">Thanks for subscribing!</p> --*/}
                      </form>
                      <ul className="text-gray-600 c0atf csd7z cd663 c2k38 cmhb9 c6xwf c2bi2 aos-init aos-animate" data-aos="fade-down" data-aos-delay="450">
                          <li className="cxdxt csrqa cnc7y">
                              <svg className="text-teal-400 c4u31 c2npy cui34 c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                              </svg>
                              <span>Lorem ipsum is placeholder text commonly.</span>
                          </li>
                          <li className="cxdxt csrqa cnc7y">
                              <svg className="text-teal-400 c4u31 c2npy cui34 c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                              </svg>
                              <span>Excepteur sint occaecat cupidatat.</span>
                          </li>
                          <li className="cxdxt csrqa cnc7y">
                              <svg className="text-teal-400 c4u31 c2npy cui34 c39kt cwc3u" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
                              </svg>
                              <span>Lorem ipsum is placeholder text commonly.</span>
                          </li>
                      </ul>
                  </div>

                  
                  {/*-- Mobile mockup --*/}
                  <div className="cw9gd c8udt cob0z c5ymx aos-init aos-animate" x-data="{ modalExpanded: false }" data-aos="fade-up" data-aos-delay="450">
                      <div className="cw3my cxdxt czak8 czjaw">
                          {/* Glow illustration */}
                          <svg className="cey85 cimtg cgk3d cy5gd cdwzm codcr" aria-hidden="true" width="678" height="634" viewBox="0 0 678 634" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="240" cy="394" r="240" fill="url(#piphoneill_paint0_radial)" fillOpacity=".4"></circle>
                              <circle cx="438" cy="240" r="240" fill="url(#piphoneill_paint1_radial)" fillOpacity=".6"></circle>
                              <defs>
                                  <radialGradient id="piphoneill_paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 -77 317) scale(189.054)">
                                      <stop stopColor="#667EEA"></stop>
                                      <stop offset="1" stopColor="#667EEA" stopOpacity=".01"></stop>
                                  </radialGradient>
                                  <radialGradient id="piphoneill_paint1_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 99 339) scale(189.054)">
                                      <stop stopColor="#9F7AEA"></stop>
                                      <stop offset="1" stopColor="#9F7AEA" stopOpacity=".01"></stop>
                                  </radialGradient>
                              </defs>
                          </svg>
                          {/* Image inside mockup size: 290x624px (or 580x1248px for Retina devices) */}
                          <img className="cgk3d" src="https://preview.cruip.com/appy/images/mockup-image-01.jpg" width="290" height="624" alt="Features illustration" />
                          {/* iPhone mockup */}
                          <img className="cey85 csd7z cvjv9 czjaw cas9o cmhb9 cb1y1" src="https://preview.cruip.com/appy/images/iphone-mockup.png" width="344" height="674" alt="iPhone mockup" />
                          {/* Play button */}
                          <a className="cmemh clq5w ccb29 ceo83 cgk3d" href="#0" aria-controls="modal">
                              <img src="https://preview.cruip.com/appy/images/play-button.svg" width="96" height="96" alt="Play" />
                          </a>
                      </div>

                      {/*
                      <!-- Modal backdrop -->
                      <div className="c1qic c6w2k c5nz7 c2ysc cvtns cjbau" x-show="modalExpanded" x-transition:enter="ceo83 cqlpw cvsbb" x-transition:enter-start="comu3" x-transition:enter-end="cmyvu" x-transition:leave="ceo83 cqlpw cph81" x-transition:leave-start="cmyvu" x-transition:leave-end="comu3" aria-hidden="true" style="display: none;"></div>

                      <!-- Modal dialog -->
                      <div id="modal" className="cr227 cw3my cxdxt cgdju c92f3 c2ysc cvtns cjbau cnc7y c1plj" role="dialog" aria-modal="true" aria-labelledby="modal-headline" x-show="modalExpanded" x-transition:enter="ceo83 ccb29 cvsbb" x-transition:enter-start="comu3 cjuqe" x-transition:enter-end="cmyvu cjg5g" x-transition:leave="ceo83 ccb29 cvsbb" x-transition:leave-start="cmyvu cjg5g" x-transition:leave-end="comu3 cjuqe" style="display: none;">
                          <div className="cyrrf crdbk czd2q c6zr7 cs8sl" @click.outside="modalExpanded = false" @keydown.escape.window="modalExpanded = false">
                              <div className="czjaw cvl7d">
                                  <video x-init="$watch('modalExpanded', value => value ? $el.play() : $el.pause())" className="cgk3d c1zcx cs8sl" width="1920" height="1080" loop="" controls="">
                                      <source src="./videos/video.mp4" type="video/mp4">
                                      Your browser does not support the video tag.
                                  </video>
                              </div>
                          </div>
                      </div> 
                      */}

                  </div>
                  

              </div>

          </div>
      </div>

    </section>
  )
}

export default Hero
