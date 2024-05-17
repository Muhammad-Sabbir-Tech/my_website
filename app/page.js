import TopNav from '@/src/common_app_component/TopNav/TopNav';
import ContactSection from '@/src/component/ContactSection/ContactSection';
import HomeAbout from '@/src/component/HomeAbout/HomeAbout';
import HomeBannerComponent from '@/src/component/HomeBanner/HomeBannerComponent';
import PortfolioSection from '@/src/component/PortfolioSection/PortfolioSection';
import ServiceSection from '@/src/component/ServiceSection/ServiceSection';
import TechSection from '@/src/component/TechSection/TechSection';
import React from 'react';

function page(props) {
  return (
    <>
      <TopNav />
      <HomeBannerComponent />
      <ServiceSection />
      <HomeAbout />
      <PortfolioSection />
      <ContactSection />
      <TechSection />
    </>
  );
}

export default page;