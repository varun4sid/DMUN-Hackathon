import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PAGE_BACKGROUND_COLOR = '#E7F1FA'; // Light blue from screenshot
const TEXT_COLOR = '#000000';
const DARK_BLUE = '#002147';
const SUBNAV_GRAY_TEXT = '#555';
const SUBNAV_YELLOW_ICON = '#FFD700';

const DonorRelationsPageContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
`;

const HeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/DonorRelationsPageHeader.jpg') center/cover no-repeat;
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
`;

const HeroText = styled.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
`;

const SubnavSection = styled.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2.5rem 0;
  box-sizing: border-box;
`;

const SubnavContentWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: ${DARK_BLUE};
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0;
  text-transform: uppercase;
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin: 1.5rem 0;
`;

const SubnavLink = styled(Link)`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${SUBNAV_GRAY_TEXT};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${DARK_BLUE};
  }
`;

const CaretIcon = styled.span`
  display: inline-block;
  vertical-align: middle;
  svg {
    width: 1rem;
    height: auto;
    stroke: ${SUBNAV_GRAY_TEXT};
    transition: stroke 0.2s ease-in-out;
  }
  ${SubnavLink}:hover & svg {
    stroke: ${DARK_BLUE};
  }
`;

const BuildingIconSVG = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const YellowIconGraphic = styled.div`
  width: 80px;
  height: 80px;
  color: ${SUBNAV_YELLOW_ICON};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const BodyContentWrapper = styled.div`
    padding: 2rem 10vw;
`;

const ContentSection = styled.section`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`;

const ContentImage = styled.img`
  width: 50%;
  max-width: 600px;
  object-fit: cover;
  filter: grayscale(100%);

  @media (max-width: 992px) {
    width: 100%;
  }
`;

const ContentTextWrapper = styled.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`;

const StandaloneContentSection = styled.section`
    text-align: center;
    margin-bottom: 5rem;
`;

const MainContentTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 1.5rem;
  text-align: center;
`;

const LeftAlignedTitle = styled(MainContentTitle)`
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  text-align: left;
`;

const ImpactCard = styled.div`
  border: 2px solid ${TEXT_COLOR};
  padding: 2.5rem;
`;

const CardTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const EmailLink = styled.a`
  color: ${DARK_BLUE};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


const DonorRelations = () => {
    const handleScrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
      <DonorRelationsPageContainer>
        <HeroWrapper>
            <HeroText>Donor Relations</HeroText>
        </HeroWrapper>

        <SubnavSection>
          <SubnavContentWrapper>
            <YellowIconGraphic><BuildingIconSVG /></YellowIconGraphic>
            <SubnavHeading>DONOR RELATIONS</SubnavHeading>
            <SubnavLinksContainer>
              <SubnavLink to="/integrity">DONOR INTEGRITY <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
              <SubnavLink to="/donor-relations">DONOR RELATIONS <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
              <SubnavLink 
                to="#questions" 
                onClick={(e) => {
                  e.preventDefault();
                  handleScrollToSection('questions-section');
                }}
              >
                DONOR TRANSPARENCY <CaretIcon><ArrowIcon/></CaretIcon>
              </SubnavLink>
              <SubnavLink to="https://donorbox.org/giving-dmun">Donate Online <CaretIcon><ArrowIcon/></CaretIcon></SubnavLink>
            </SubnavLinksContainer>
          </SubnavContentWrapper>
        </SubnavSection>
  
        <BodyContentWrapper>
            <ContentSection>
            <ContentImage src="/Children.jpeg" alt="Happy children" />
            <ContentTextWrapper>
                <LeftAlignedTitle>If you donate to an organization, you deserve to know where and how it is used.</LeftAlignedTitle>
                <Paragraph>
                If you donate to an organization, you deserve to know where and how your contributions are used.
                </Paragraph>
                <Paragraph>
                At the DMUN Foundation, we ensure complete transparency in our financial operations. Donors receive detailed reports on the allocation and impact of their donations, including specific programs and initiatives funded.
                </Paragraph>
                <Paragraph>
                We are committed to maintaining trust with our supporters by providing clear, accessible information on our financial stewardship and the tangible outcomes achieved through their generosity.
                </Paragraph>
            </ContentTextWrapper>
            </ContentSection>
    
            <StandaloneContentSection>
            <MainContentTitle>We actively communicate donor impact.</MainContentTitle>
            <Paragraph style={{ maxWidth: '800px', margin: '0 auto 3rem auto' }}>
                At the DMUN Foundation, we believe that if you donate to an organization, you deserve to know where and how your contributions are used. Our commitment to transparency and accountability ensures that donors are regularly informed about the impact of their contributions.
            </Paragraph>
            <ImpactGrid>
                <ImpactCard>
                <CardTitle><strong>Regular Updates</strong></CardTitle>
                <Paragraph>
                    We provide frequent updates through newsletters, emails, and our website, sharing stories of impact, progress, and developments within our programs. This keeps our donors engaged and connected to our mission.
                </Paragraph>
                </ImpactCard>
                <ImpactCard>
                <CardTitle><strong>Detailed Reports</strong></CardTitle>
                <Paragraph>
                    Donors receive comprehensive reports outlining the allocation of funds and the specific programs and initiatives they support. These reports highlight the tangible outcomes and successes achieved through their contributions.
                </Paragraph>
                </ImpactCard>
                <ImpactCard>
                <CardTitle><strong>Feedback Mechanisms</strong></CardTitle>
                <Paragraph>
                    We actively seek and incorporate feedback from our donors to improve our programs and communication strategies. This ensures that our donors' voices are heard and valued.
                </Paragraph>
                </ImpactCard>
                <ImpactCard>
                <CardTitle><strong>Personal Engagement</strong></CardTitle>
                <Paragraph>
                    Donors are invited to events, webinars, and meetings where they can interact with our team, beneficiaries, and other supporters. This engagement fosters a sense of community and shared purpose.
                </Paragraph>
                </ImpactCard>
            </ImpactGrid>
            </StandaloneContentSection>
    
            <StandaloneContentSection id="questions-section">
            <MainContentTitle>Our donor relations team is always ready for questions.</MainContentTitle>
            <Paragraph style={{ maxWidth: '800px', margin: '0 auto 1.5rem auto' }}>
                Our donor relations team is always ready to answer questions and provide additional information. We are dedicated to ensuring that donors feel valued and informed, and we are here to assist with any inquiries. Your support is vital to our success, and we are committed to demonstrating the significant impact of your generosity. Feel free to reach out to us with any questions or for more information on how your contributions are making a difference.
            </Paragraph>
            <Paragraph>
                Email us: <EmailLink href="mailto:development@dmun.org">development@dmun.org</EmailLink>
            </Paragraph>
            </StandaloneContentSection>
        </BodyContentWrapper>
      </DonorRelationsPageContainer>
    );
  };
  
  export default DonorRelations; 