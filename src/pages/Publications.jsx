import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';
const SUBNAV_GRAY_TEXT = '#555';
const SUBNAV_YELLOW_ICON = '#FFD700';

const HeroBanner = styled.section`
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
`;
const HeroText = styled.h1`
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

// Subnav styles (copied from Research)
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
 
`;
const SubnavContentWrapper = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
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
  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
    margin-top: -0.75rem;
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
`;
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
const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);
// Example icons for Statements and Reports
const StatementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="#FFD700" strokeWidth="2"/><path d="M7 8H17M7 12H17M7 16H13" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
);
const ReportIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="2" width="16" height="20" rx="2" stroke="#FFD700" strokeWidth="2"/><path d="M8 6H16M8 10H16M8 14H12" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/></svg>
);

// Add the BuildingIconSVG used in Research
const BuildingIconSVG = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PublicationsContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 15vw;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`;
const SectionTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${DARK_BLUE};
  margin-bottom: 2rem;
  margin-top: 3rem;
  text-align: left;
`;
const PublicationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;
const PublicationCard = styled.a`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;
const PublicationImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;
const PublicationContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const PublicationTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.6rem;
  color: ${DARK_BLUE};
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-weight: bold;
`;
const PublicationSummary = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: ${DARK_BLUE};
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;
const PublicationDate = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.85rem;
  color: ${DARK_BLUE};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: 0;
`;

// Sample data for Statements and Reports
const statements = 
    [
      {
        id: 's-6',
        image: null,
        title: 'Intervention SDG 6 Water Action Agenda: High-level Launch of the SDG 6 Country Acceleration Case Studies',
        date: '22nd July, 2025',
        link: '/Statement-6.pdf',
      },
      {
        id: 's-5',
        image: null,
        title: 'Intervention Interactive Multistakeholder Hearing on the 30th Anniversary of the Beijing Declaration and Platform for Action',
        date: '18th July, 2025',
        link: '/Statement-5.pdf',
      },
      {
        id: 's-4',
        image: null,
        title: 'Intervention 2025 Sustainability Forum DMUN Foundation Jaewon Choi Executive Director DMUN Foundation CHECK AGAINST DELIVERY SEUL LE TEXTE PRONONCÉ FAIT FOI',
        date: '12th July, 2025',
        link: '/Statement-4.pdf',
      },
      {
        id: 's-3',
        image: null,
        title: 'Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream I of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.',
        summary: 'A joint submission addressing the Draft Issue Note of Workstream I of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.',
        date: '11th July, 2025',
        link: '/Statement-3.pdf',
      },
      {
        id: 's-2',
        image: null,
        title: 'Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream II of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.',
        summary: 'A joint submission addressing the Draft Issue Note of Workstream II regarding taxation of income derived from cross-border services in a digitalized and globalized economy.',
        date: '11th July, 2025',
        link: '/Statement-2.pdf',
      },
      {
        id: 's-1',
        image: null,
        title: ' Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream III of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.',
        summary: 'A joint submission addressing the Draft Outline of Issues Overview and Scope of Workstream III regarding prevention and resolution of tax disputes.',
        date: '11th July, 2025',
        link: '/Statement-1.pdf',
      },
      {
        id: 's0',
        image: null,
        title: 'Joint Statement of Youth for Privacy and the DMUN Foundation for the Eleventh Session of the Open-Ended Working Group on ICTs',
        summary: 'The final report, and the forthcoming permanent mechanism, represent a significant milestone in multilaeral cooperation on ICT security. We commend the recognition of cross-cutting issues like capacity-building, inclusivity,...',
        date: 'J July, 2025',
        link: 'https://docs-library.unoda.org/Open-Ended_Working_Group_on_Information_and_Communication_Technologies_-_(2021)/YfP_and_DMUN_-_Joint_Statement_-_Eleventh_OEWG.pdf',
      },
      {
        id: 's1',
        image: null, // or a relevant image if you have one
        title: 'Intervention H.E. Mr. Jaewon Choi Executive Director DMUN Foundation',
        summary: 'High-Level Opening Plenary Global Youth COnference on Financing for Development',
        date: '28th June, 2025',
        link: '/Statement11.pdf', // This will serve the PDF from the public directory
      },
        {
          id: 's2',
          image: null,
          title: 'MSP3: Investments in reducing risk and building resilience to accelerate progress in sustainable development',
          summary: 'A statement on investing in risk reduction and resilience to accelerate sustainable development progress.',
          date: '5th June, 2025',
          link: 'https://globalplatform.undrr.org/publication/msp3-investments-reducing-risk-and-building-resilience-accelerate-progress-3',
        },
        {
          id: 's3',
          image: null,
          title: 'Joint Written Statement on Technical Assistance and International Cooperation 3',
          summary: '25 years after the adoption of the UNTOC: an assessment of the impact and added value of the Convention in the prevention of and fight against transnational organized crime, including through collaboration with civil societ',
          date: '2nd June, 2025',
          link: 'https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_4_prevention.pdf',
        },
        {
          id: 's4',
          image: null,
          title: 'Joint Written Statement on Technical Assistance and International Cooperation 2',
          summary: 'Intervention on the Exchange of good practices in international cooperation to freeze and confiscate proceeds of crime in the form of virtual currencies.',
          date: '2nd June, 2025',
          link: 'https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_3_prevention.pdf',
        },
        {
          id: 's4',
          image: null,
          title: 'Joint Written Statement on Technical Assistance and International Cooperation',
          summary: 'Intervention on the Prevention of organized crime through public-private partnerships and socioeconomic, cultural and behavioural pathways, with a focus on organized fraud.',
          date: '2nd June, 2025',
          link: 'https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_2_prevention.pdf',
        },
        {
          id: 's6',
          image: null,
          title: 'Joint Constructive Dialogue on the UNTOC Review Process',
          summary: 'A statement emphasizing the urgent need to center youth and community engagement in the UNTOC review process, with recommendations to institutionalize youth participation.',
          date: '2nd June, 2025',
          link: 'https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_1.pdf',
        },
        {
          id: 's7',
          image: null,
          title: 'Statement to the 2025 UN Firearms Protocol Constructive Dialogue',
          summary: 'Highlighting the critical need for youth participation in implementing the UN Firearms Protocol, particularly concerning gender-based armed violence and young victims.',
          date: '30th April, 2025',
          link: 'https://www.unodc.org/documents/organized-crime/constructive-dialogues/FA_2025/Statements/DMUN_Foundation.pdf',
        },
        {
          id: 's8',
          image: null,
          title: 'Statement to the Candidate for President of the 80th UN General Assembly',
          summary: 'A joint question on behalf of seven youth-led organizations, asking the candidate for President of the 80th UNGA how they will ensure genuine youth participation beyond tokenization.',
          date: '15th May, 2025',
          link: 'https://estatements.unmeetings.org/estatements/10.0010/20250515100000000/p_PMmovcqn/eDpSL_pnlhhEC_nyc_en.pdf',
        },
        {
          id: 's9',
          image: null,
          title: 'Written Statement to the 29th Conference of States Parties (CSP29)',
          summary: 'Engaging the Next Generation and Youth Stakeholders: Ensuring a Future Without Chemical Weapons for the Next Generation.',
          date: '1st November, 2024',
          link: 'https://www.opcw.org/sites/default/files/documents/2024/11/Written%20Statement%20of%20the%20DMUN%20Foundation%20to%20the%2029th%20Conference%20of%20States%20Parties%20%28CSP29%29%20of%20the%20Organisation%20for%20the%20Prohibition%20of%20Chemical%20Weapons%20.pdf',
        },
        {
          id: 's10',
          image: null,
          title: 'Inputs for the Elements Paper on Financing for Development',
          summary: 'Submitted by DMUN Foundation, an specially accredited organization to the Fourth International Conference on Financing for Developmentt',
          date: '3nd June, 2024',
          link: 'https://financing.desa.un.org/sites/default/files/2024-10/DMUN_Input%20for%20the%20Elements%20Paper%20on%20Financing%20for%20Development.pdf',
        },
        {
          id: 's11',
          image: null,
          title: 'Joint Submission to the Committee on Economic, Social and Cultural Rights (CESCR)',
          summary: 'A joint written submission by the DMUN Foundation to the UN Committee on Economic, Social and Cultural Rights.',
          date: '1st March, 2024',
          link: 'https://www.ohchr.org/sites/default/files/documents/hrbodies/cescr/cfis/generalcomments/submissions/subm-cescr-written-cso-11-dmun-joint-submission-sion-en.docx',
        }
      ];
      
const reports = [
  {
    id: 'r1',
    image: null,
    title: 'Protecting the Digital Generation: Advancing Public-Private Action Against AI-Driven Trafficking of Women and Youth',
    summary: 'The application of Artificial Intelligence (AI) now stands at the forefront of strategies aimed at combating human trafficking and violence, creating both opportunities and risks. The adverse effects of AI are increasingly recognized, especially its role in online exploitation and human trafficking.',
    date: '18th June, 2025',
    link: 'https://docs.google.com/document/d/1bY_-7_XjuaM1Kyxd1Py8UQyKFrRI-2pewij2elksczs/edit?usp=sharing',
  },
  {
    id: 'r2',
    title: 'State of Youth Stakeholder Participation - 2025',
    image: null,
    summary: 'This report provides a comprehensive assessment of global youth engagement, analyzing both progress and persistent challenges in achieving meaningful participation across all levels of governance. Focusing on the United Nations system, national policies, and grassroots movements, the study examines structural barriers while highlighting innovative approaches that demonstrate the transformative potential of genuine youth inclusion. The analysis draws on policy documents, case studies, and quantitative data to present actionable recommendations for institutional reform.',
    date: '',
    link: 'https://docs.google.com/document/d/1hMRo13E3hTUlIiAAnRymYJyd5sXgQPXB/edit?tab=t.0',
  },
  {
    id: 'r3',
    image: null,
    title: 'Request for Observer Status with the International Seabed Authority',
    summary: 'The Office of the Executive Director of the DMUN Foundation presents its compliments to the Secretariat of the International Seabed Authority and has the honour to formally submit this request for observer status for the DMUN Foundation',
    link: 'https://docs.google.com/document/d/1csf4HCxsSW80xMPJzGSIlJCZPUXVUlhd/edit?tab=t.0',
  },
  {
    id: 'r4',
    title: 'Establishing a Youth Engagement Platform at the World Bank-IMF: A Policy Proposal for Structured Youth-Civil Society Participation',
    summary: 'The proposal suggests creating a Youth Engagement Platform at the World Bank to integrate young leaders from civil society organizations, experts in global development, and academics into policy conversations.',
    link: 'https://docs.google.com/document/d/1BH7VuT8b2sENV0iek04cSVAHWRe4gKilurU_2RI1tiA/edit?tab=t.0',
  },
  {
    id: 'r5',
    title: 'DMUN DELEGATE REPORT – UN OCEAN CONFERENCE, NICE 2025 BY SISAY LUKAS',
    summary: 'UN Ocean Conference, Nice 2025',
    link: '/Report5.pdf',
  },
  {
    id: 'r6',
    title: 'DMUN Annual Meetings 2024',
    summary: 'Online,July 10th 2024',
    link: '/Report6.pdf',
  },
  {
    id: 'r7',
    title: 'DMUN Outcome Report: High-Level Political Forum 2025',
    summary: 'July 2025',
    link: '/Report7.pdf',
  },
  {
    id: 'r8',
    title: 'Commitments + Children and Youth Positions',
    summary: 'August 2025',
    link: '/Report8.pdf',
  },
];

const Publications = () => {
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
      <HeroBanner>
        <HeroText>Publications</HeroText>
      </HeroBanner>
      <SubnavSection>
        <SubnavContentWrapper>
          <YellowIconGraphic>
            <BuildingIconSVG />
          </YellowIconGraphic>
          <SubnavHeading>PUBLICATIONS</SubnavHeading>
          <SubnavLinksContainer>
            <SubnavLink href="#statements" onClick={e => handleSmoothScroll(e, 'statements')}>STATEMENTS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
            <SubnavLink href="#reports" onClick={e => handleSmoothScroll(e, 'reports')}>REPORTS <CaretIcon><ArrowIcon /></CaretIcon></SubnavLink>
          </SubnavLinksContainer>
        </SubnavContentWrapper>
      </SubnavSection>
      <PublicationsContainer>
        <SectionTitle id="statements">Statements</SectionTitle>
        <PublicationsGrid>
          {statements.map((pub) => (
            <PublicationCard key={pub.id} href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.image && <PublicationImage src={pub.image} alt={pub.title} />}
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationSummary>{pub.summary}</PublicationSummary>
                <PublicationDate>{pub.date}</PublicationDate>
              </PublicationContent>
            </PublicationCard>
          ))}
        </PublicationsGrid>
        <SectionTitle id="reports">Reports</SectionTitle>
        <PublicationsGrid>
          {reports.map((pub) => (
            <PublicationCard key={pub.id} href={pub.link} target="_blank" rel="noopener noreferrer">
              {pub.image && <PublicationImage src={pub.image} alt={pub.title} />}
              <PublicationContent>
                <PublicationTitle>{pub.title}</PublicationTitle>
                <PublicationSummary>{pub.summary}</PublicationSummary>
                <PublicationDate>{pub.date}</PublicationDate>
              </PublicationContent>
            </PublicationCard>
          ))}
        </PublicationsGrid>
      </PublicationsContainer>
    </>
  );
};

export default Publications;