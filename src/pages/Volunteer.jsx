import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  background: #e7f1fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const SUBNAV_GRAY_TEXT = '#555'; // Slightly darker gray for text
const SUBNAV_YELLOW_ICON = '#FFD700'; // A golden yellow for the icon
const PAGE_BACKGROUND_COLOR = '#E7F1FA';
const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const LIGHT_BLUE = '#97e1e6';
const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);
const CaretIcon = styled.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;

  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${SUBNAV_GRAY_TEXT};
    transform: translateY(-1px);
  }
`;
const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 0.8rem;
  font-weight: 400;
`;
const Section = styled.section`
  max-width: 1100px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 1.5rem;
  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 0 0.5rem;
  }
`;
const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`;
const SubnavLink = styled.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: ${DARK_BLUE};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`;
const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0 0 0;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
  }
`;
const SectionTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 2.6rem;
  color: #000;
  text-align: center;
  margin-bottom: 1.5rem;
  scroll-margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;
const SubnavContentWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;
const SubTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin: 3rem 0 1rem;
  scroll-margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 2rem 0 0.5rem;
  }
`;
const YellowIconGraphic = styled.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
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
const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: #222;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`;
const Card = styled.div`
  background: #ffffff;
  border: 1px solid #d4e4f4;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 768px) {
    padding: 1.2rem 0.7rem;
  }
`;
const CardTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.7rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;
const CardText = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  color: #333;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
const Email = styled.a`
  color: #0077cc;
  font-weight: 600;
  text-decoration: underline;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;
const VolunteerButton = styled.a`
  display: inline-block;
  margin: 3rem auto 0 auto;
  background: #44b8f3;
  color: #fff;
  font-family: var(--andover-font-sans);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2.8rem;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(68, 184, 243, 0.15);
  transition: background 0.3s ease;

  &:hover {
    background: #002147;
  }
`;

const VolunteerHeader = styled.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/VolunteerPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* z-index removed to avoid stacking above header */
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    /* z-index removed to avoid stacking above header */
    pointer-events: none;
  }
`;
const VolunteerHeaderText = styled.h1`
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
`;

const Volunteer = () => (
  <PageContainer>
  
    <VolunteerHeader>
      <VolunteerHeaderText>Volunteer</VolunteerHeaderText>
    </VolunteerHeader>
    <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>Volunteer</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink href="#why">Why Volunteer <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#value">Values of Volunteering <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#apply">Apply Now<CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>
    <Section>
      <SectionTitle id="why">Why volunteer for us?</SectionTitle>
      <Paragraph>
        Volunteering with us offers a unique opportunity to make a meaningful impact on a global scale. As a volunteer, you will help shape the next generation of leaders by contributing to programs that educate and inspire youth worldwide. You'll gain valuable experience in areas like education, governance, and nonprofit management while collaborating with passionate individuals and organizations dedicated to positive change.
        Your efforts directly contribute to making education accessible and empowering young people globally, making a real difference in their lives and futures.
        Join us to be part of a mission that transforms lives and builds a brighter future.
      </Paragraph>

      <SubTitle id="value">Values of Volunteering</SubTitle>
      <Paragraph>
        Your time volunteering for the DMUN Foundation is rewarding. We provide exceptional personal development and career development opportunities with an altruistic mindset.
      </Paragraph>

      <Grid>
        <Card>
          <CardTitle>Skill Development</CardTitle>
          <CardText>
            Through hands-on experience in areas such as education, nonprofit management, and global advocacy, volunteers acquire and hone valuable skills. These experiences enhance their professional and personal growth, equipping them with tools that are beneficial in any future endeavor.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Career Development</CardTitle>
          <CardText>
            Volunteering with us offers valuable career development opportunities by providing hands-on experience in project management, education, and advocacy. You'll build a strong professional network, enhance your leadership skills, and gain cultural competency by working with diverse international teams.
          </CardText>
        </Card>
        <Card>
          <CardTitle>Meaningful Work</CardTitle>
          <CardText>
            Volunteering with us provides the opportunity to engage in truly meaningful work. By contributing your time and skills, you directly impact the lives of young people, helping to shape their futures and empower them as global citizens.
          </CardText>
        </Card>
      </Grid>

      <Paragraph>
        For institutional giving or assets or securities donation, please contact our development office at <Email href="mailto:give@dmun.org">give@dmun.org</Email>
      </Paragraph>

      <SubTitle id="apply">iVolunteer Application</SubTitle>
      <div id="apply" style={{ textAlign: 'center', scrollMarginTop: '100px' }}>
        <VolunteerButton
          href="https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGFfN2BURUtCOURWRzI5Q1dVTUtaNzg0TVk4NEdTUy4u&route=shorturl"
          target="_blank"
          rel="noopener noreferrer"
        >
          VOLUNTEER
        </VolunteerButton>
      </div>
    </Section>

  
  </PageContainer>
);

export default Volunteer;
