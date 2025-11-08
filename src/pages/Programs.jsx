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
  background: url('/ProgramPageHeader.jpeg') center/cover no-repeat;
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
  border-left: 31px solid ${ABBOT_BLUE};
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
  max-width: 1200px; /* Max width for content alignment */
  margin: 0 auto;
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
  font-size: 2.2rem;
  color: ${DARK_BLUE}; /* Dark blue for heading */
  margin-bottom: 0.8rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
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
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${LIGHT_BLUE} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
const SeeMoreBtn = styled.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${LIGHT_BLUE};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${LIGHT_BLUE} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${LIGHT_BLUE};
    color: ${DARK_BLUE} !important;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem 2rem;
    max-width: 20rem;
  }
`;
const LeadershipSubtitle = styled.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1rem;
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
const LeaderLink = styled.a`
  color: ${LIGHT_BLUE} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const slideDown = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ProgramGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 3rem 0;
  justify-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
  }
`;

const Programs = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Programs</AboutHeroText>
      </AboutHeroWrapper>
      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>PROGRAMS</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink href="#model-un-workshops">What Makes Us Unique <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#leadership-training">Unbiased & Independent <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#seminars">Seminars <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#community-projects">Community Projects <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>
      <BorderedContentWrapper>
        <Main>
          <Left>
            <SectionTitle>Our Programs</SectionTitle>
            <p>
              DMUN offers a diverse range of programs designed to empower youth with the skills and knowledge needed to become effective global leaders. Our initiatives focus on interactive learning, practical application, and fostering a deep understanding of international relations.
            </p>
            <p>
              We are committed to providing accessible and high-quality educational experiences that prepare young individuals for meaningful engagement in the world.
            </p>

            <SectionTitle id="model-un-workshops">What Makes Our Programs Unique</SectionTitle>
            <ul style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
              <li><strong>Academic Excellence:</strong> We prioritize academic excellence by providing meticulously crafted programs that challenge and inspire students to excel. Our programs are designed to be approachable for all, while allowing for rigorous academic inquiry.</li>
              <li><strong>Global and Inclusive:</strong> Our programs are accessible to everyone, regardless of socioeconomic background, ensuring that diverse voices are heard and valued. We foster a rich, multicultural environment that promotes cross-cultural understanding.</li>
              <li><strong>Real Impact:</strong> The discussions and outcomes of each program are infused into real-world impact, through our engagement in multilateral bodies and institutions, allowing for tangible impact.</li>
              <li><strong>Continued Growth:</strong> Beyond the initial conference experience, we offer a range of follow-up programs, resources, and opportunities designed to support continued learning and growth. Our alumni network provides a platform for former participants to stay connected, share experiences, and collaborate on initiatives.</li>
            </ul>

            <SectionTitle id="leadership-training">Unbiased & Independent</SectionTitle>
            <ul style={{ marginBottom: '2rem', marginTop: '0.5rem' }}>
              <li>Our strict policies on our education programs ensures that our decisions and actions are driven solely by our mission to empower young leaders and foster global understanding.</li>
              <li>We do not receive funding from any national government or intergovernmental organization.</li>
              <li>No donor can influence the educational materials provided to participants in our program.</li>
              <li>Our programs are developed under an independent group of subject matter experts nominated by our members.</li>
              <li>All of our programs are evaluated by an independent members at an annual basis to confirm program integrity.</li>
            </ul>

            <ProgramGallery>
              {[
                "https://mymun.com/dmun",
                "https://mymun.com/conferences/dmunp-2025",
                "https://mymun.com/conferences/dmun-model-eu-2025",
                "https://mymun.com/conferences/dmun-moot-court-2025",
                "https://mymun.com/conferences/dmun-debate-2025",
                "https://mymun.com/conferences/dmun-arab-league-2025",
                "https://mymun.com/conferences/dmun-model-league-of-nations-2026",
                "https://mymun.com/conferences/dmun-annual-meetings-2025",
                "https://mymun.com/conferences/khni-dmun-youth-representatives-i-2025",
                "https://mymun.com/conferences/dmun-crisis-2025",
                "https://mymun.com/conferences/dmun-model-african-union-2025",
                "https://mymun.com/conferences/dmunsf-2025",
                "https://mymun.com/conferences/khni-dmun-youth-inputs-i-2025"
              ].map((link, i) => {
                const imgNum = i + 1;
                const ext = imgNum <= 5 ? 'jpeg' : 'png';
                return (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      background: '#fff',
                      borderRadius: '18px',
                      boxShadow: '0 4px 16px #0001',
                      padding: '2rem 1rem',
                      width: '100%',
                      maxWidth: '320px'
                    }}
                  >
                    <img
                      src={`/Logo${imgNum}.${ext}`}
                      alt={`Program Logo ${imgNum}`}
                      style={{
                        width: '200px',
                        height: '200px',
                        objectFit: 'contain',
                        marginBottom: '1.5rem',
                        borderRadius: '16px',
                        background: '#f7f7f7',
                        boxShadow: '0 2px 8px #0001'
                      }}
                    />
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none', width: '100%' }}
                    >
                      <button
                        style={{
                          background: '#44b8f3',
                          color: 'white',
                          border: 'none',
                          borderRadius: '8px',
                          padding: '0.9rem 0',
                          fontWeight: 700,
                          fontFamily: 'var(--andover-font-sans)',
                          cursor: 'pointer',
                          fontSize: '1.15rem',
                          width: '100%'
                        }}
                      >
                        Register
                      </button>
                    </a>
                  </div>
                );
              })}
            </ProgramGallery>

            <SectionTitle>Program Categories</SectionTitle>
            <p>
              Our programs are broadly categorized into:
            </p>
            <ul>
              <li>Model UN Simulation & Training</li>
              <li>Youth Leadership & Development</li>
              <li>Global Issues & Policy Workshops</li>
              <li>Cross-Cultural Exchange & Dialogue</li>
              <li>Advocacy & Community Action</li>
            </ul>
            <SectionTitle>Program Benefits</SectionTitle>
            <p>
              Participating in DMUN programs offers numerous benefits, including:
            </p>
            <p>
              <li>Global collaboration with delegates from diverse regions and backgrounds.</li>
              <li>Enhancement of public speaking, negotiation, and leadership skills.</li>
              <li>Engagement in real-time debate on current global challenges.</li>
              <li>Flexible participation from anywhere at minimal cost.</li>
              <li>Access to expert mentorship and valuable recognition through certifications.</li>
            </p>
            <p>
              <a href="https://mymun.com/dmun"><button >Register Now</button></a>
            </p>
          </Left>
        </Main>
      </BorderedContentWrapper>
    </>
  );
};

export default Programs;
          
            
        
