import React from 'react';
import styled from 'styled-components';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

const AboutHeroWrapper = styled.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/Youth-Advocacy.png') center/cover no-repeat;
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
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2.5rem auto;
  max-width: 1200px;
  padding: 0 2rem;
  background-color: ${PAGE_BACKGROUND_COLOR};
`;

const Section = styled.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid ${ABBOT_BLUE};
  padding-bottom: 0.5rem;
`;

const MembershipCategory = styled.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryTitle = styled.h3`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CategoryList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: "•";
    color: ${ABBOT_BLUE};
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`;

const AdmissionProcess = styled.div`
  background: ${PAGE_BACKGROUND_COLOR};
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`;

const Membership = () => {
  return (
    <>
      <AboutHeroWrapper>
        <AboutHeroText>Membership</AboutHeroText>
      </AboutHeroWrapper>
      
      <Main>
        <Section>
          <SectionTitle>Categories of Membership</SectionTitle>
          
          <MembershipCategory>
            <CategoryTitle>Individual Members</CategoryTitle>
            <CategoryList>
              <CategoryItem>Youth or adult individuals who support the mission and values of the Foundation</CategoryItem>
              <CategoryItem>Have the right to vote on membership matters, serve on certain committees, and stand for election as officers</CategoryItem>
            </CategoryList>
          </MembershipCategory>
          
          <MembershipCategory>
            <CategoryTitle>Organizational Members</CategoryTitle>
            <CategoryList>
              <CategoryItem>Youth-led organizations, academic clubs, or civil society groups that align with the Foundation's mission</CategoryItem>
              <CategoryItem>Must apply, demonstrate alignment with core values, and agree to a memorandum of understanding detailing roles and responsibilities</CategoryItem>
              <CategoryItem>Shall designate one representative to serve as a liaison to the Foundation</CategoryItem>
              <CategoryItem>Have the right to vote on membership matters, serve on certain committees, and stand for election as officers</CategoryItem>
            </CategoryList>
          </MembershipCategory>
          
          <MembershipCategory>
            <CategoryTitle>Honorary Members</CategoryTitle>
            <CategoryList>
              <CategoryItem>Individuals recognized for extraordinary contributions to the Foundation or to youth empowerment more broadly</CategoryItem>
              <CategoryItem>Nominated by the Board of Trustees and approved by a simple majority of the Board</CategoryItem>
              <CategoryItem>Have the right to vote on membership matters, serve on certain committees, and stand for election as officers</CategoryItem>
            </CategoryList>
          </MembershipCategory>
        </Section>

        <Section>
          <SectionTitle>Admission Process</SectionTitle>
          <AdmissionProcess>
            <CategoryList>
              <CategoryItem>Individual Membership: Register for a Foundation program to be considered for membership</CategoryItem>
              <CategoryItem>Organizational Membership: Submit an application determined by the Trustees to the Membership Committee</CategoryItem>
              <CategoryItem>The Membership Committee reviews applications within 60 days and recommends approval or denial to the Board of Trustees</CategoryItem>
              <CategoryItem>Upon Board approval, the applicant becomes a Member in good standing</CategoryItem>
            </CategoryList>
          </AdmissionProcess>
        </Section>
        <Section>
          <SectionTitle>Membership Application Form</SectionTitle>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <iframe 
          width="640px" 
          height="480px" 
          src="https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGFfN2BUNzFJSFBYV0NaRUNPOTVHUjFLWUY0M1BNVi4u&embed=true" 
          frameBorder="0" 
          marginWidth="0" 
          marginHeight="0" 
          style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }} 
          allowFullScreen 
          webkitallowfullscreen="true" 
          mozallowfullscreen="true" 
          msallowfullscreen="true"
          title="Membership Form"
        />
          </div>
        </Section>
      </Main>
    </>
  );
};

export default Membership; 