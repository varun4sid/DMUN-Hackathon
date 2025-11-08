import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3';
const DARK_BLUE = '#002147';
const PAGE_BACKGROUND_COLOR = '#E7F1FA';

const NewsroomContainer = styled.div`
  background-color: ${PAGE_BACKGROUND_COLOR};
  padding: 4rem 15vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`;

const PageTitle = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  color: ${DARK_BLUE};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`;

const NewsCard = styled(Link)`
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

const NewsImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const NewsTitle = styled.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.6rem;
  color: ${DARK_BLUE};
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-weight: bold;
`;

const NewsSummary = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: ${DARK_BLUE};
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const NewsDate = styled.p`
  font-family: var(--andover-font-sans);
  font-size: 0.85rem;
  color: ${DARK_BLUE};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: 0;
`;

const articles = [
  {
    id: '8',
    image: '/Article8img.jpeg',
    title: 'Executive Director Highlights Critical Role of Multi-Stakeholder Collaboration and Youth Empowerment at FfD4 Multistakeholder Hearing',
    summary: 'Mr. Jaewon Choi, Executive Director of the DMUN Foundation, emphasized the importance of multi-stakeholder partnerships and youth engagement at the FfD4 Multistakeholder Hearing in New York, a key preparatory event for the 2025 FfD4 conference.',
    date: 'June 22, 2025',
  },
  {
    id: '7',
    image: '/Article7img.jpeg',
    title: 'DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee  to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation',
    date: 'August 10th, 2024',
  },
  {
    id: '1',
    image: '/Article-1.jpeg',
    title: 'YouthCubed Nominates 2 Global Youth ​Representative for the Summit of the Future',
    summary: 'We\'re proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.',
    date: 'August 7 2024',
  },
  {
    id: '4',
    image: '/Article-4.jpeg',
    title: "Founder's Analysis: End of Online MUN?",
    summary: "Learn more about our Executive Director & Founder, Mr. Jaewon Choi's analysis on the future of virtual Model UN.",
    date: 'July 22, 2024',
  },
  {
    id: '5',
    image: '/online.jpeg',
    title: 'Executive Director Jaewon Choi Elevates Youth Voices at HLPF 2024',
    summary: 'Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF)',
    date: 'July 17, 2024',
  },
  {
    id: '6',
    image: '/Article6img.jpeg',
    title: 'Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development',
    date: 'March 15th, 2024',
  },
  {
    id: '3',
    image: '/Article-3.jpeg',
    title: 'COP28 UAE',
    summary: 'Learn more about our engagement at COP28 UAE as a ​youth-led civil society stakeholder.',
    date: 'Dec 13, 2023',
  },
  {
    id: '2',
    image: '/Article-2.jpeg',
    title: 'DMUN Foundation @ FfD4',
    summary: 'Learn more about how we have been invited by the UNGA ​President to participate in the Fourth International ​Conference on Financing for Development.',
    date: 'July 19, 2023',
  },
];

const pageData = [
  {
    title: 'Home',
    path: '/',
    content: [
      'Representing Youth, Building Leaders.',
      'At a Glance',
      'Programs',
      'Advocacy',
      'Research',
      'Integrity',
      'DMUN NEWS',
      'Upcoming Events',
      'Access to DMUN is completely free',
      'DMUN is built by students, for students',
      'Our online platform connects students across the globe',
    ].join(' '),
  },
  {
    title: 'About',
    path: '/about',
    content: [
      'About Us',
      'Our Mission',
      'Our History and Origins',
      'Our Philosophy',
      'Annual Reports',
      'Impact',
      'Leadership',
      'Meet the dedicated individuals who guide our mission',
      'Total participants in our program',
      'Raised for the Foundation',
      'Countries represented',
      'Intergovernmental bodies and conferences engaged',
      'Inputs, statement, and interventions produced',
      'Programs operated',
    ].join(' '),
  },
  {
    title: 'Programs',
    path: '/programs',
    content: [
      'Programs',
      'Model UN Workshops',
      'Leadership Training',
      'Global Citizen Seminars',
      'Youth Exchange Initiatives',
      'Youth Leadership',
      'Community Service',
      'Global Education',
      'Program Highlights',
      'Program Impact',
    ].join(' '),
  },
  {
    title: 'Advocacy',
    path: '/advocacy',
    content: [
      'Advocacy',
      'What We Advocate For',
      'Our Advocacy Strategies',
      'Ethical Advocacy Statement',
      'Get Involved',
      'Ways to Take Action',
      'Support Our Mission',
      'Donate Online',
    ].join(' '),
  },
  {
    title: 'Research',
    path: '/research',
    content: [
      'Research',
      'Our Research',
      'Research Areas',
      'Research Benefits',
      'Research Highlights',
      'Research publications',
      'Citations in academic literature',
      'International research collaborations',
      'Research impact score',
      'Data & Insights',
      'Publications',
    ].join(' '),
  },
  {
    title: 'Integrity',
    path: '/integrity',
    content: [
      'Integrity',
      'Ethics, Integrity, and Transparency',
      'We must do our work, the right way.',
      'Procedures and Mandates',
      'Diversity, Equity, and Inclusion',
      'Documentation of Compliance Requirements',
      'Database of Compliance and Integrity Forms',
      'Ethical Advocacy Policy',
      'Academic Integrity Policy',
      'Diversity, Equity, and Inclusion and Non-Discrimination Policy',
      'Universal Code of Conduct',
      'Statement on Anti-Corruption',
      'Statement on Our Efforts to Prevent Human Trafficking, Involuntary Labor, and Modern Slavery',
      'Statement on Compliance of International and National Regulations',
      'Guidelines for Partners of the Foundation',
      'Declaration on Political Independence and Neutrality',
      'Temporary Procedures on Artificial Generative Intelligence',
      'Form E1',
      'Form E2',
      'Form E3',
      'Form E4',
      'Form E5',
      'Form E6',
      'Form E7',
      'Form E8',
    ].join(' '),
  },
  {
    title: 'Mandate',
    path: '/mandate',
    content: [
      'Mandate',
      'Mission & Vision',
      'Strategic Goals',
      'Core Values',
      'Our Constitution',
    ].join(' '),
  },
  {
    title: 'Donor Relations',
    path: '/donor-relations',
    content: [
      'Donor Relations',
      'Donor Integrity',
      'Donor Transparency',
      'Partner',
      'If you donate to an organization, you deserve to know where and how your contributions are used.',
      'We ensure complete transparency in our financial operations.',
      'We actively communicate donor impact.',
      'Our donor relations team is always ready for questions.',
    ].join(' '),
  },
  {
    title: 'Donate',
    path: '/donate',
    content: [
      'Donate',
      'How to Give',
      'Why Give to Us?',
      'Where Are My Funds Used?',
      'How Are Donors Honored?',
      'Your support enables us to continue our mission of empowering youth',
      'Donate Online',
    ].join(' '),
  },
  {
    title: 'Volunteer',
    path: '/volunteer',
    content: [
      'Volunteer',
      'Why Volunteer',
      'Values of Volunteering',
      'Apply Now',
      'Volunteering with us offers a unique opportunity',
      'Volunteer Application',
    ].join(' '),
  },
  {
    title: 'Membership',
    path: '/Membership',
    content: [
      'Membership',
      'Categories of Membership',
      'Individual Members',
      'Organizational Members',
      'Honorary Members',
      'Admission Process',
      'Membership Application Form',
      'Foundation program',
      'Membership Committee',
      'Board of Trustees',
    ].join(' '),
  },
  {
    title: 'Take Action',
    path: '/take-action',
    content: [
      'Take Action',
      'Get Involved',
      'Ways to Take Action',
      'Support Our Mission',
      'Donate Online',
      'Volunteer',
      'Advocacy',
      'Programs',
    ].join(' '),
  },
  {
    title: 'Newsroom',
    path: '/newsroom',
    content: [
      'Newsroom',
      'Latest News',
      'Articles',
      'Press Releases',
      'Events',
      'Updates',
    ].join(' '),
  },
  {
    title: 'Article Page',
    path: '/newsroom/:id',
    content: [
      'Article',
      'News',
      'Press Release',
      'Event',
      'Update',
    ].join(' '),
  },
  {
    title: 'Test Page',
    path: '/test',
    content: [
      'Test Page',
      'Sample Content',
      'Testing',
    ].join(' '),
  },
];

// Add Newsroom articles as searchable content
const articleData = articles.map(article => ({
  title: article.title,
  path: `/newsroom/${article.id}`,
  content: [article.title, article.summary || '', article.date || ''].join(' '),
}));

const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const Newsroom = () => {
  const query = useQuery();
  const searchTerm = query.get('search')?.toLowerCase() || '';

  if (searchTerm) {
    // Search all pages and articles
    const allData = [...pageData, ...articleData];
    const results = allData.filter(item => item.content.toLowerCase().includes(searchTerm));
    return (
      <NewsroomContainer>
        <PageTitle>Search Results for "{searchTerm}"</PageTitle>
        {results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <NewsGrid>
            {results.map((item, idx) => (
              <NewsCard key={item.path + idx} to={item.path}>
                <NewsContent>
                  <NewsTitle>{item.title}</NewsTitle>
                  <NewsSummary>{item.path}</NewsSummary>
                </NewsContent>
              </NewsCard>
            ))}
          </NewsGrid>
        )}
      </NewsroomContainer>
    );
  }

  return (
    <NewsroomContainer>
      <PageTitle>Newsroom</PageTitle>
      <NewsGrid>
        {articles.map((article) => (
          <NewsCard key={article.id} to={`/newsroom/${article.id}`}>
            <NewsImage src={article.image} alt={article.title} />
            <NewsContent>
              <NewsTitle>{article.title}</NewsTitle>
              <NewsSummary>{article.summary}</NewsSummary>
              <NewsDate>{article.date}</NewsDate>
            </NewsContent>
          </NewsCard>
        ))}
      </NewsGrid>
    </NewsroomContainer>
  );
};

export default Newsroom; 