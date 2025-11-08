import React from 'react';
import styled from 'styled-components';

const PAGE_BACKGROUND_COLOR = '#E7F1FA';
const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const SUBNAV_GRAY_TEXT = '#555';

const PageContainer = styled.div`
  background: ${PAGE_BACKGROUND_COLOR};
  min-height: 100vh;
  padding-bottom: 4rem;
`;

const HeroSection = styled.section`
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
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    pointer-events: none;
  }
`;

const HeroText = styled.h1`
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`;

const Main = styled.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem 0 1.5rem;
`;

const SectionTitle = styled.h2`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  font-size: 2.1rem;
  margin-bottom: 1.2rem;
  text-align: left;
  margin-left: 0.5rem;
`;

const SubTitle = styled.h3`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  font-size: 1.3rem;
  margin: 2.5rem 0 1rem 0;
  text-align: left;
`;

const Paragraph = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1.5rem;
  text-align: left;
`;

const Box = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  margin: 2rem 0;
`;

const List = styled.ul`
  margin: 1.2rem 0 1.5rem 1.5rem;
  padding: 0;
  font-size: 1.08rem;
  color: #222;
`;

const ListItem = styled.li`
  margin-bottom: 0.7rem;
  line-height: 1.7;
`;

const Email = styled.a`
  color: ${ABBOT_BLUE};
  font-weight: 600;
  text-decoration: underline;
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
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
`;

const SubnavContentWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const SubnavHeading = styled.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000;
  font-size: 2.5rem;
  text-align: center;
  margin: -1rem 0 0 0;
  padding-top: 0rem;
  padding-bottom: 2rem;
`;

const SubnavLinksContainer = styled.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
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
    fill: #FFD700;
  }
`;

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
    transition: stroke 0.2s;
  }
  ${SubnavLink}:hover & svg {
    stroke: ${DARK_BLUE};
  }
`;

const PartnershipGrid = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
`;

const PartnershipBox = styled(Box)`
  flex: 1 1 340px;
  min-width: 300px;
  max-width: 420px;
  margin: 0;
`;

const Partner = () => (
  <PageContainer>
    <HeroSection>
      <HeroText>Partner With Us</HeroText>
    </HeroSection>
    <SubnavSection>
      <SubnavContentWrapper>
        <YellowIconGraphic>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </YellowIconGraphic>
        <SubnavHeading>PARTNER</SubnavHeading>
        <SubnavLinksContainer>
          <SubnavLink href="#types">Types of Partnership <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#process">How to Partner <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          <SubnavLink href="#evaluation">Evaluation Criteria <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
        </SubnavLinksContainer>
      </SubnavContentWrapper>
    </SubnavSection>
    <Main>
      <SectionTitle id="types">We offer 2 partnerships. Program & Strategic.</SectionTitle>
      <Paragraph>
        We offer two types of partnerships to organizations aligned with our mission and values:
      </Paragraph>
      <PartnershipGrid>
        <PartnershipBox>
          <SubTitle style={{textAlign: 'center'}}>Program Partnerships</SubTitle>
          <Paragraph style={{textAlign: 'center'}}>
            Program partnerships are designed to collaborate with organizations ​that share our commitment to providing high-quality, inclusive educational experiences. These ​partnerships involve co-developing and co-delivering programs, sharing resources, and ​leveraging each other's strengths to maximize impact.
          </Paragraph>
        </PartnershipBox>
        <PartnershipBox>
          <SubTitle style={{textAlign: 'center'}}>Strategic Partnerships</SubTitle>
          <Paragraph style={{textAlign: 'center'}}>
            Strategic partnerships focus on long-term collaborations aimed at ​achieving shared strategic goals. These partnerships involve joint initiatives and combined ​efforts to drive significant, sustainable change in the education sector. Strategic partners play a ​key role in shaping the direction and impact of our organization, working closely with us to ​achieve mutual objectives.
          </Paragraph>
        </PartnershipBox>
      </PartnershipGrid>

      <SectionTitle id="process" style={{marginTop: '3.5rem'}}>Partnering with us is simple and easy.</SectionTitle>
      <Paragraph>
        We strive to make the partnership process straightforward and accessible:
      </Paragraph>
      <Box>
        <List>
          <ListItem><strong>Contact us:</strong> Email us at <Email href="mailto:development@dmun.org">development@dmun.org</Email>.</ListItem>
          <ListItem><strong>Initial Discussion:</strong> Start with a conversation to explore mutual goals and potential collaboration areas.</ListItem>
          <ListItem><strong>Proposal Development:</strong> Work together to develop a detailed partnership proposal outlining roles, responsibilities, and expected outcomes.</ListItem>
          <ListItem><strong>Ethics & Compliance Submission:</strong> Submit necessary information on legal compliance, fair and ethical business for your organization.</ListItem>
          <ListItem><strong>Board of Trustees Review:</strong> The partnership proposal will be nominated into a draft Board of Trustees resolution, and will be approved by a simple majority vote.</ListItem>
          <ListItem><strong>Agreement:</strong> Formalize the partnership with clear, written agreements to ensure both parties are aligned.</ListItem>
          <ListItem><strong>Implementation:</strong> Begin collaborating, with ongoing support and communication to ensure the partnership's success.</ListItem>
        </List>
      </Box>

      <SectionTitle id="evaluation" style={{marginTop: '3.5rem'}}>Transparency in our partnership evaluation is critical.</SectionTitle>
      <Paragraph>
        Transparency in our partnership evaluation is critical. Here's how we evaluate prospective partners:
      </Paragraph>
      <Box>
        <List>
          <ListItem><strong>Alignment of Values:</strong> Assess if the prospective partner's values and mission align with those of the DMUN Foundation.</ListItem>
          <ListItem><strong>Impact Potential:</strong> Evaluate the potential impact of the partnership on our target communities and overall mission.</ListItem>
          <ListItem><strong>Resource and Capability Assessment:</strong> Examine the resources and capabilities that the partner brings to the table, ensuring they complement our own.</ListItem>
          <ListItem><strong>Track Record:</strong> Consider the partner's past performance and reputation in their field.</ListItem>
          <ListItem><strong>Sustainability:</strong> Ensure the partnership promotes long-term, sustainable outcomes.</ListItem>
          <ListItem><strong>Ethics & Compliance:</strong> Evaluate the organization's compliance on ethical, moral, and fair business practices, and compliance to local, national, and international regulations.</ListItem>
          <ListItem><strong>Transparency:</strong> Evaluate the organization's transparency.</ListItem>
        </List>
      </Box>
    </Main>
  </PageContainer>
);

export default Partner; 