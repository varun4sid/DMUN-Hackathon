import React from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const LIGHT_BLUE = '#97e1e6';

// New color for the main page background
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

// New colors for subnavigation section
const SUBNAV_GRAY_TEXT = '#555'; // Slightly darker gray for text
const SUBNAV_YELLOW_ICON = '#FFD700'; // A golden yellow for the icon

const AboutHeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/ResearchPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
const AboutHeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`;

// Styled component for the bordered content wrapper
const BorderedContentWrapper = styled.div`
  border-left: 24px solid ${ABBOT_BLUE};
  border-right: 25px solid ${ABBOT_BLUE};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`;

// New styled components for the subnavigation section
const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${ABBOT_BLUE};
  border-right: 33px solid ${ABBOT_BLUE};
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
    border-left: 15px solid ${ABBOT_BLUE};
    border-right: 15px solid ${ABBOT_BLUE};
  }
`;

const SubnavContentWrapper = styled.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`;

const SubnavLink = styled.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE}; /* Darker on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`;

const YellowIconGraphic = styled.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${SUBNAV_YELLOW_ICON};
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 1.5rem auto 0.5rem auto;
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const CaretIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${SUBNAV_GRAY_TEXT}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`;

const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${PAGE_BACKGROUND_COLOR}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`;
const Left = styled.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`;
const Right = styled.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on SectionTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }
`;
const Fact = styled.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  border: none; /* Ensure no border on Fact */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;
const LeadershipSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${DARK_BLUE};
  color: ${LIGHT_BLUE} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${fadeIn} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`;
const LeadershipContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;
const LeadershipTitleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;
const LeadershipTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #fff;
  text-align: center;
  margin: 0;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
const LeadershipSubtitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: ${LIGHT_BLUE};
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 3.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;
const LeadershipCardsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${fadeIn} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
`;
const LeadershipCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${LIGHT_BLUE} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
  @media (max-width: 768px) {
    width: 280px;
  }
`;
const LeaderImg = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({ $isColor }) => ($isColor ? 'none' : 'grayscale(1) contrast(1.1)')};
  border: none; /* Ensure no border on LeaderImg */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
`;
const LeaderName = styled.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;
const LeaderRole = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
const LeaderDesc = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${LIGHT_BLUE} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;
const LeaderLink = styled(Link)`
  color: ${LIGHT_BLUE};
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }

  svg {
    width: 0.8rem; /* Adjusted for smaller arrow size */
    height: auto;
    margin-top: 3px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px) translateY(3px);
  }
`;
const LeaderText = styled.span`
  white-space: nowrap;
`;

const SeeMoreBtn = styled(Link)`
  font-size: 1.1rem;
  padding: 0.7rem 2rem;
  color: #fff;
  background: ${ABBOT_BLUE};
  border: none;
  outline: none;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(68, 184, 243, 0.08);
  margin-top: 1.5rem;
  margin-left: 0;
  display: inline-block;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: #2496c7;
    color: #fff;
    box-shadow: 0 4px 16px rgba(68, 184, 243, 0.15);
    text-decoration: none;
  }
`;

const Research = () => {
  // Smooth scroll handler for in-page links
  const handleSmoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120; // Adjust for fixed headers if needed
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Research</AboutHeroText>
      </AboutHeroWrapper>
      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>RESEARCH</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink as={Link} to="/Publications">PUBLICATIONS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#researchareas" onClick={e => handleSmoothScroll(e, 'researchareas')}>RESEARCH AREAS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#researchbenefits" onClick={e => handleSmoothScroll(e, 'researchbenefits')}>DATA & INSIGHTS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>
      <BorderedContentWrapper>
        <Main>
          <Left>
            <SectionTitle>Our Research</SectionTitle>
            <p>
              DMUN conducts in-depth research to inform our advocacy and programmatic work. Our research initiatives aim to provide valuable insights into youth engagement, education, and global issues.
            </p>
            <p>
              We are dedicated to producing high-quality research that contributes to the understanding of youth perspectives and needs.
            </p>
            <SectionTitle id="researchareas">Research Areas</SectionTitle>
            <p>
              Our research covers a wide range of topics, including:
            </p>
            <ul>
              <li>Youth Engagement in Global Governance</li>
              <li>Educational Access and Equity</li>
              <li>Youth Leadership and Development</li>
              <li>Cross-Cultural Exchange and Dialogue</li>
              <li>Advocacy and Community Action</li>
            </ul>
            <SectionTitle id="researchbenefits">Research Benefits</SectionTitle>
            <p>
              Engaging with our research offers numerous benefits, including:
            </p>
            <p>
              <li>Access to cutting-edge insights on youth issues.</li>
              <li>Opportunities to contribute to ongoing research projects.</li>
              <li>Enhanced understanding of global challenges and solutions.</li>
              <li>Networking with researchers and practitioners in the field.</li>
              <li>Recognition through publications and presentations.</li>
            </p>
            <p>
              <SeeMoreBtn to="/Publications">View all research</SeeMoreBtn>
            </p>
          </Left>
          <Right>
            <SectionTitle>Research Highlights</SectionTitle>
            <Fact>
              <strong>30+</strong> Research publications
            </Fact>
            <Fact>
              <strong>25</strong> Inputs to Multilateral Institutions
            </Fact>
            <Fact>
              <strong>4</strong> Policy Researchers
            </Fact>
            <Fact>
              <strong>100%</strong> Youth Led
            </Fact>
          </Right>
        </Main>
      </BorderedContentWrapper>
      
    </>
  );
};

export default Research; 