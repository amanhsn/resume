'use client';
import React from 'react';
import './globals.css';
import Image from 'next/image';
import amanImage from '../public/aman.jpg'; // Import the image
import { useState, useEffect } from 'react';


function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString()); // Format the time as a string
  }, []);
}

const Resume = () => {
  return (
    <div className="Wrapper">
      <div className="inWrapper">
        <div className="profileHeader" bis_skin_checked="1">
          <div
            data-status="false"
            data-editable="false"
            className="profilePhoto"
            bis_skin_checked="1"
          >
            <div
              className="profilePhotoDetail"
              data-size="large"
              style={{ width: '92px', height: '92px', margin: 0 }}
              bis_skin_checked="1"
            >
              {/* Use Next.js Image component */}
              <Image
                src={amanImage.src} // Use the imported image's src
                alt="Aman Hussain"
                width={92} // Explicitly set the width
                height={92} // Explicitly set the height
                style={{ opacity: 1 }}
                priority // Optional: Optimize loading for important images
              />
            </div>
          </div>
          <div className="profileInfo" bis_skin_checked="1">
            <div className="profileInfoName" bis_skin_checked="1">
              <h2>Aman Hussain</h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }} bis_skin_checked="1">
              <p>Product Designer in Islamabad, PK.</p>
            </div>
            <div className="profileBadge" bis_skin_checked="1">
              <div data-custom-domain="false" className="badgeLink" bis_skin_checked="1">
                <a className="MegaLink_megalink__u_TFB" href="http://behance.me/amanhsn" target="_blank" rel="noopener noreferrer" data-hover="false">
                  amanhsn.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <section data-print="true" id="Profile_aboutID__Z2GAs" style={{opacity: 1}}>
        <h3>About</h3>
        <div className="Profile_about__Q_Z_r" bis_skin_checked="1">
        <p>Product Designer with expertise in Experience and Interface Design, dedicated to creating intuitive and impactful solutions that address real-world challenges. My design philosophy is rooted in a deep understanding of user needs and behaviors, allowing me to craft experiences that are both aesthetically pleasing and highly functional.</p>
        </div>
        </section>
        <section data-print="true" id="contact" style={{opacity: 1}}>
        <div className="Profile_breakInside__ZPmEM" bis_skin_checked="1">
        <h3>Contact</h3>
        <div className="ContactItem_contact__9zpDH" bis_skin_checked="1">
        <div className="ContactItem_platform__6b5md" bis_skin_checked="1">
        <span>Email</span></div><div className="ContactItem_platformLink___dB19" bis_skin_checked="1">
        <div bis_skin_checked="1">
        <a className="MegaLink_megalink__u_TFB" href="mailto:syedamanhsn@gmail.com" target="_blank" rel="noopener noreferrer me" data-hover="true">syedamanhsn@gmail.com</a>
        <span style={{whiteSpace: 'nowrap'}}>﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee">
        </path></svg></span></div></div></div></div>
        <div className="ContactItem_contact__9zpDH" bis_skin_checked="1">
        <div className="ContactItem_platform__6b5md" bis_skin_checked="1">
        <span>Behance</span>
        </div>
        <div className="ContactItem_platformLink___dB19" bis_skin_checked="1">
        <div bis_skin_checked="1">
        <a className="MegaLink_megalink__u_TFB" href="https://behance.com/amanhsn" target="_blank" rel="noopener noreferrer me" data-hover="true">amanhsn</a>
        <span style={{whiteSpace: 'nowrap'}}>﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee">
        </path></svg></span></div></div></div>
        <div className="ContactItem_contact__9zpDH" bis_skin_checked="1">
        <div className="ContactItem_platform__6b5md" bis_skin_checked="1">
        <span>LinkedIn</span></div><div className="ContactItem_platformLink___dB19" bis_skin_checked="1">
        <div bis_skin_checked="1">
        <a className="MegaLink_megalink__u_TFB" href="https://linkedin.com/in/amanhsn" target="_blank" rel="noopener noreferrer me" data-hover="true">Aman Hussain</a>
        <span style={{whiteSpace: 'nowrap'}}>﻿<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path></svg></span></div></div></div>
        </section>
        <section data-print="true" id="work-experience" style={{ opacity: 1 }}>
  <div className="Profile_breakInside__ZPmEM" bis_skin_checked="1">
    <h3>Work Experience</h3>

    {/* Job 1 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2024 — Now</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">
            UI/UX Designer<span> at Elite IT</span>
          </div>
          <div className="ProfileItem_location__5TQPF" bis_skin_checked="1">Remote, Manchester, UK</div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
          <p>At Elite, I transitioned between working as a Interface, Experience & Product Designer successfully managing client projects & internal products. Developed the company's founding design system and implemented it across several projects and established smoother handoffs to devs by 75%.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* Job 2 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2024 — Now</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div className="ProfileItem_title__rsz3J" bis_skin_checked="1">
            <a className="MegaLink_megalink__u_TFB ProfileItem_titleLink__qXU7l" href="http://oryns.framer.website" target="_blank" rel="noopener noreferrer" data-hover="true">
              Freelance Product Designer<span> at Oryns</span>
            </a>
            <span style={{ whiteSpace: 'nowrap' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path>
              </svg>
            </span>
          </div>
          <div className="ProfileItem_location__5TQPF" bis_skin_checked="1">Islamabad</div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>At Oryns, I've worked with a wide variety of clients including established companies and startup founders, successfully producing MVPs and refactoring existing designs, wearing several hats - UI/UX & Product Design.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* Job 3 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2023 — 2024</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">UI/UX Design Intern<span> at PreMed.PK</span></div>
          <div className="ProfileItem_location__5TQPF" bis_skin_checked="1">Remote, Karachi, PK</div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>Worked on PreMed.PK's MVP for Medical School in Pakistan called 'medschool.pk', designed the brand's identity, logo & developed the design system. PreMed.PK was later Featured on SharkTank Pakistan.</p>
          </div>
        </div>
      </div>
    </div>
    {}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
  <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
    <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
      <span>2023 — 2024</span>
    </div>
    <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
      <div bis_skin_checked="1">Frontend Developer<span> at Syslify</span></div>
      <div className="ProfileItem_location__5TQPF" bis_skin_checked="1">Remote, Accrington, UK</div>
      <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
        <p>At Syslify, I worked on the frontend for a AWS WAF Viewer & the company's internal product, Deal Pakki, a c2c marketplace, collaborated with designers to develop the UI for the MVP.  </p>
      </div>
      <div className="ProfileItem_images__Z9kAd" bis_skin_checked="1"></div>
    </div>
  </div>
  <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
    <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
      <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
        <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>
  </div>
  </section>
        <section data-print="true" id="work-experience" style={{ opacity: 1 }}>
  <div className="Profile_breakInside__ZPmEM" bis_skin_checked="1">
    <h3>Case Studies</h3>

    {/* Case Studies */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>Jan 2025</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div className="ProfileItem_title__rsz3J" bis_skin_checked="1">
            <a className="MegaLink_megalink__u_TFB ProfileItem_titleLink__qXU7l" href="https://www.behance.net/gallery/217896347/Clinio-Case-Study?" target="_blank" rel="noopener noreferrer" data-hover="true">
              Clinio™  Case Study
            </a>
            <span style={{ whiteSpace: 'nowrap' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path>
              </svg>
            </span>
          </div>
          <div className="ProfileItem_location__5TQPF" bis_skin_checked="1">In Progress</div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>Clinio is an EU-based healthcare platform, focusing on connecting patients to medical practioners whilst mantaining privacy by utilizing blockchain technology.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* CS 2 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>Sep 2024</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div className="ProfileItem_title__rsz3J" bis_skin_checked="1">
            <a className="MegaLink_megalink__u_TFB ProfileItem_titleLink__qXU7l" href="https://www.behance.net/gallery/209704693/Product-Design-Case-Study-Expert-Mock" target="_blank" rel="noopener noreferrer" data-hover="true">
              Expert Mock Case Study
            </a>
            <span style={{ whiteSpace: 'nowrap' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path>
              </svg>
            </span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>
            ExpertMock is an interview preparation assistant designed to help you excel in your next interview. It offers mock interviews evaluated by technical recruiters and self-assessment interviews assessed by Al.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* CS 3 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>Jul 2024</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div className="ProfileItem_title__rsz3J" bis_skin_checked="1">
            <a className="MegaLink_megalink__u_TFB ProfileItem_titleLink__qXU7l" href="https://www.behance.net/gallery/202794443/Product-Case-Study-Share-Ease" target="_blank" rel="noopener noreferrer" data-hover="true">
              ShareEase Case Study
            </a>
            <span style={{ whiteSpace: 'nowrap' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path>
              </svg>
            </span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>Share Ease is a mobile app that aims to smoothen out the process of splitting the bill to save the user from 'awkward coversations about money'.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* CS 4 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>Dec 2023</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div className="ProfileItem_title__rsz3J" bis_skin_checked="1">
            <a className="MegaLink_megalink__u_TFB ProfileItem_titleLink__qXU7l" href="https://www.behance.net/gallery/189745989/UX-Case-Study-Soft-Swirl-Mobile-App" target="_blank" rel="noopener noreferrer" data-hover="true">
              Soft Swirl Case Study
            </a>
            <span style={{ whiteSpace: 'nowrap' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3C3.22386 3 3 3.22386 3 3.5C3 3.77614 3.22386 4 3.5 4V3ZM8.5 3.5H9C9 3.22386 8.77614 3 8.5 3V3.5ZM8 8.5C8 8.77614 8.22386 9 8.5 9C8.77614 9 9 8.77614 9 8.5H8ZM2.64645 8.64645C2.45118 8.84171 2.45118 9.15829 2.64645 9.35355C2.84171 9.54882 3.15829 9.54882 3.35355 9.35355L2.64645 8.64645ZM3.5 4H8.5V3H3.5V4ZM8 3.5V8.5H9V3.5H8ZM8.14645 3.14645L2.64645 8.64645L3.35355 9.35355L8.85355 3.85355L8.14645 3.14645Z" fill="#eee"></path>
              </svg>
            </span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>Exemplar Case Study for Soft Swirl, an ice cream franchise in Pakistan - for Google UX Design Professional Certificate.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
        <section data-print="true" id="education" style={{ opacity: 1 }}>
  <div className="Profile_breakInside__ZPmEM" bis_skin_checked="1">
    <h3>Education</h3>

    {/* ED 1 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2022 — 2026</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">
            Bachelors of Computer Science (BSCS)<span> at NUST</span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
          <p>At NUST, I've been part of several societies & events.</p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* ED 2 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2017 — 2021</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">
          O/A Levels<span> at Sadiq Public School Bahawalpur</span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p>Achieved 10A* & 2As.</p>
          </div>
        </div>
      </div>
    </div>
    {}
  </div>
  </section>
  <section data-print="true" id="certifications" style={{ opacity: 1 }}>
  <div className="Profile_breakInside__ZPmEM" bis_skin_checked="1">
    <h3>Certifications</h3>

    {/* ED 1 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2023</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">
            Foundations of UX Design<span> by Google</span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
          <p></p>
          </div>
        </div>
      </div>
      <div className="ReplyContainer_replyContainer__5_fvu" bis_skin_checked="1">
        <div className="Popover_popoverWrap__WBCCw" bis_skin_checked="1">
          <button className="Button_button__AQ1KL" data-style="light" data-loading="false">
            <div className="Button_icon___WOGE" style={{ margin: '0px auto' }} bis_skin_checked="1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2927 19.1631C11.824 19.1631 12.2068 18.7725 12.2068 18.249V15.2646H12.4333C15.4646 15.2646 17.3708 16.0303 18.738 18.585C19.0115 19.085 19.3708 19.1631 19.699 19.1631C20.113 19.1631 20.5037 18.7881 20.5037 18.1162C20.5037 12.3428 18.0583 8.74121 12.4333 8.74121H12.2068V5.78809C12.2068 5.26465 11.824 4.83496 11.2771 4.83496C10.8943 4.83496 10.6365 4.99902 10.2224 5.38965L4.05835 11.1553C3.75366 11.4443 3.65991 11.7334 3.65991 11.999C3.65991 12.2568 3.76147 12.5537 4.05835 12.835L10.2224 18.6553C10.5974 19.0068 10.9099 19.1631 11.2927 19.1631Z" fill="#888"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* ED 2 */}
    <div className="ReplyContainer_replyContainerWrap__eWAYB" data-confirm="false" data-reply="false" data-admin="false" data-noreply="false" data-desktop="true" bis_skin_checked="1">
      <div className="ProfileItem_experience__YXtvH" data-flag="profileItem" bis_skin_checked="1">
        <div className="ProfileItem_duration__utkpJ" bis_skin_checked="1">
          <span>2023</span>
        </div>
        <div className="ProfileItem_experienceContent__0E9pa" bis_skin_checked="1">
          <div bis_skin_checked="1">
          Frontend Developer Certificate<span> by META</span>
          </div>
          <div className="ProfileItem_description__9_b0E" bis_skin_checked="1">
            <p></p>
          </div>
        </div>
      </div>
    </div>
    {}
  </div>
  </section>
      </div>
    </div>
  );
};

export default Resume;