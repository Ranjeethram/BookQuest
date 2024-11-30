import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookQuest</h2>
            <p className='fs-17'>In a world brimming with countless books, finding the one that resonates with you can feel like searching for a needle in a haystack. Enter BookQuest, the ultimate companion for book enthusiasts. Whether you're hunting for the latest bestsellers, timeless classics, or hidden literary gems, BookQuest ensures your search is seamless and delightful. With its intuitive interface and powerful search tools, this app transforms browsing into an adventure, guiding you to your next favorite read with just a few taps.</p>
            <p className='fs-17'>BookQuest doesn’t just stop at helping you find books; it curates a personalized experience. Leveraging smart recommendations and user reviews, it understands your preferences and introduces you to stories you never knew you needed. Dive into a universe of knowledge, passion, and imagination—all at your fingertips. With BookQuest, discovering books is no longer a chore; it’s an inspiring journey waiting to unfold.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
