import styled from 'styled-components';
import TiltedCard from '../components/TiltedCard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SplitText from '../components/SplitText';
import { Link } from 'react-router-dom';

const ABBOT_BLUE = '#44b8f3'; // The new primary color
const DARK_BLUE = '#002147'; // Keeping for high contrast on light backgrounds
const LIGHT_BLUE = '#97e1e6'; // Assuming a light blue color for the filled part or other accents

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4, // Even faster duration for section entry
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.05 // Even smaller stagger for children
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3, // Even faster duration for individual items
      ease: "easeOut"
    }
  }
};

// Main content frame with refined structure
const MainContentFrame = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  border-left: 0;
  border-right: 0;
  box-sizing: border-box;
  /* overflow: hidden; */ /* Temporarily removed to diagnose folder visibility */
  background-color: white;
  @media (max-width: 600px) {
    border-left: 0;
    border-right: 0;
  }
`;

// Content wrapper for the actual content (excluding hero)
const ContentWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
    width: 100vw;
  }
`;

const HeroWrapper = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh + 70px);
  min-height: calc(100vh + 70px);
  margin-top: -70px;
  background: url('/hero-home.jpeg') center/cover no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 768px) {
    min-height: calc(100vh + 70px);
    height: calc(100vh + 70px);
    padding: 0;
    align-items: center;
    justify-content: center;
    background-position: center center;
    background-size: cover;
    text-align: center;
    h1, h2, h3, h4, h5, h6, p, span, div {
      text-align: center !important;
      word-break: break-word;
    }
  }
`;

const StatsSection = styled.section`
  margin: 4rem 0;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  border: 2px dotted ${ABBOT_BLUE};
  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.5rem 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border-width: 1.5px;
  }
`;

const StatBox = styled.div`
  border-right: 1px dashed ${ABBOT_BLUE};
  border-bottom: 1px dashed ${ABBOT_BLUE};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--andover-font-serif);
  color: ${DARK_BLUE};
  text-align: center;
  grid-column: ${props => props.gridColumn || 'span 3'};
  grid-row: ${props => props.gridRow || 'auto'};

  @media (max-width: 768px) {
    grid-column: span 3;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    grid-column: unset !important;
    grid-row: unset !important;
    width: 100%;
    border-right: none;
    border-bottom: 1px dashed ${ABBOT_BLUE};
    border-radius: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.7rem 0.2rem;
    font-size: 0.98rem;
    min-width: 0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`;


const StatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.8rem;
  color: ${DARK_BLUE};
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${DARK_BLUE};
  font-family: 'Roboto', var(--andover-font-sans);
`;

const StatLabel = styled.div`
  font-size: 1rem;
  text-align: center;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
`;

// SVG Pie Chart component for animation
const StatPieChartSVG = ({ percentage }) => {
  const radius = 45; // Radius of the circle
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="100" height="100" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)', marginBottom: '0.8rem' }}>
      {/* Background circle */}
      <circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={DARK_BLUE} /* Use dark blue for the unfilled part */
        strokeWidth="10"
      />
      {/* Animated circle */}
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        fill="none"
        stroke={ABBOT_BLUE} /* Use Abbot Blue for the filled part */
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray={circumference}
        initial={{ strokeDashoffset: circumference }}
        animate={{ strokeDashoffset: strokeDashoffset }}
        transition={{ duration: 0.5, ease: 'easeOut' }} /* Reduced duration for faster animation */
      />
    </svg>
  );
};

const StatPieChartLabel = styled.div`
  font-size: 1.3rem;
  font-family: 'Roboto', var(--andover-font-sans);
  font-weight: 700;
  color: ${DARK_BLUE};
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
  text-align: center;
`;

const StatPieChartSubLabel = styled.div`
  font-size: 0.8rem;
  color: ${DARK_BLUE};
  text-align: center;
  font-family: var(--andover-font-sans);
`;

// Placeholder icons
const GlobeIcon = () => <span>🌐</span>;
const USAIcon = () => <span>🇺🇳</span>;
const BuildingIcon = () => <span>🏛️</span>;
const BookIcon = () => <span>📖</span>;
const HandsIcon = () => <span>✋</span>;
const CityIcon = () => <span>🏙️</span>;
const TownIcon = () => <span>🏘️</span>;
const MoneyIcon = () => <span role="img" aria-label="money">💸</span>;

// Array of stat data
const statsData = [
  // First row
  { id: 1, type: 'pie', percentage: 46, label: 'Members', number: '26,927', pieLabel: '49% Male, 48% Female, 3% Others', gridColumn: 'span 3', gridRow: '1' },
  { id: 2, type: 'icon', icon: <GlobeIcon />, label: 'Countries', number: '161', gridColumn: 'span 3', gridRow: '1' },
  { id: 3, type: 'icon', icon: <USAIcon />, label: 'Intergovermental Bodies Engaged', number: '37', gridColumn: 'span 3', gridRow: '1' },
  { id: 4, type: 'icon', icon: <BuildingIcon />, label: 'Year of Founding', number: '2021', gridColumn: 'span 3', gridRow: '1' },
  // Second row
  { id: 6, type: 'icon', icon: <HandsIcon />, label: 'Inputs,Statements<br/>and Interventions Produced in 2024', number: '32', gridColumn: 'span 3', gridRow: '2' },
  { id: 7, type: 'icon', icon: <BookIcon />, label: 'Programs', number: '12', gridColumn: 'span 3', gridRow: '2' },
  { id: 8, type: 'icon', icon: <CityIcon />, label: 'Raised in 2024', number: '$24K', gridColumn: 'span 3', gridRow: '2' },
  { id: 5, type: 'icon', icon: <MoneyIcon />, label: 'Membership Fee', number: '$0', gridColumn: 'span 3', gridRow: '2' },
];

const DayLifeSection = styled(motion.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 1rem 0.2rem;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
  }
`;

const DayLifeTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  text-align: center;
`;

const Circles = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  justify-items: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// Styled components for Day in the Life text elements
const DayInLifeText = styled.div`
  grid-column: span 4;
  text-align: center;
  color: ${DARK_BLUE};
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-column: span 12;
  }
  @media (max-width: 600px) {
    grid-column: span 1;
    padding: 0.7rem 0.2rem;
    font-size: 0.98rem;
  }

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${DARK_BLUE};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1.1rem;
    margin: 0;
    color: ${DARK_BLUE};
    line-height: 1.6;
  }
`;

// New styled component for consistent padding and alignment within GlanceSectionContainer
const GlanceContentArea = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3rem;
  padding: 0 4rem;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
`;

const GlanceSectionContainer = styled(motion.section)`
  margin: 4rem 0; /* Add margin to the section */
  background: white; /* Add white background */
  border-radius: 1rem; /* Add rounded corners */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Add shadow */
  overflow: hidden;
`;

const GlanceImageColumn = styled.div`
  grid-column: span 6;
  min-width: 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    @media (max-width: 768px) {
      max-width: 100vw;
      width: 100vw;
      height: auto;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
`;

const GlanceContentColumn = styled.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
  @media (max-width: 600px) {
    grid-column: span 1;
    gap: 1rem;
  }
`;

const GlanceHeader = styled.div`
  text-transform: uppercase; /* Equivalent to uppercase */
  font-size: 0.875rem; /* Equivalent to text-sm */
  letter-spacing: 0.05em; /* Equivalent to tracking-wider */
  color: #a0a0a0; /* Equivalent to text-gray-400 */
  margin-bottom: 2rem; /* Space below the header */
`;

const GlanceTextBlock = styled.div`
  cursor: pointer;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 300ms ease-in-out;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  border-left: ${({ $isHovered }) => ($isHovered ? `4px solid ${ABBOT_BLUE}` : `1.5px solid #e0e0e0`)};

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    letter-spacing: -0.025em;
    margin-bottom: 0.75rem;
    transition: color 300ms ease-in-out;
  }
/* This is the new part for the link */
  h3 a {
    color: inherit;
    text-decoration: none;
  }
  p {
    font-size: 1rem;
    color: #777;
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  &:hover {
    border-color: ${ABBOT_BLUE};
    background-color: #f9f9f9;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    h3 {
      color: ${ABBOT_BLUE};
    }
  }
`;

const NewsSection = styled(motion.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    margin: 1.5rem 0;
  }
`;

const NewsTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
`;

const NewsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const NewsCard = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  }
`;

const NewsImg = styled.div`
  background: url(${props => props.imageSrc || 'https://via.placeholder.com/260x140?text=News'}) center/cover no-repeat;
  height: 140px;

  @media (max-width: 600px) {
    height: 120px;
  }
`;

const NewsContent = styled.div`
  padding: 1.5rem;
  color: ${DARK_BLUE};

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: ${DARK_BLUE};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1rem;
    margin: 0;
    color: ${DARK_BLUE};
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    padding: 0.7rem 0.2rem;
    h3 { font-size: 1rem; }
    p { font-size: 0.95rem; }
  }
`;

const EventsSection = styled(motion.section)`
  margin: 4rem 0 0 0; /* Removed bottom margin */
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    margin: 1.5rem 0 0 0;
  }
`;

const EventsTitle = styled.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
`;

const EventsGrid = styled.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const EventCard = styled.a`
  display: block;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease-in-out;
  color: ${DARK_BLUE};
  text-decoration: none;
  background: #fff; /* Or use ${DARK_BLUE} for a dark card */
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-10px);
    color: #000;
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem;
    padding: 0.5rem 0.2rem;
    width: 100%;
  }
`;

const EventCardContent = styled.div`
  padding: 0; /* Or a small value if you want a little horizontal gap */
  position: static; /* Remove absolute positioning if present */
  background: white;

  @media (max-width: 600px) {
    padding: 0.5rem 0.2rem;
  }
`;
const EventTitle = styled.h4`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;



const EventMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: var(--andover-font-sans);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  color:rgb(54, 59, 54);

  @media (max-width: 600px) {
    font-size: 0.85rem;
    gap: 0.2rem;
    margin-bottom: 0.5rem;
  }
`;

const ApplyButton = styled.div`
  background-color: rgba(165, 156, 156, 0.9);
  color: ${DARK_BLUE};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  width: fit-content;
  margin-top: 1rem;

  &:hover {
    background-color: white;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
    margin-top: 0.5rem;
  }
`;

const eventsData = [
  {
    title: 'DMUN Moot Court 2025',
    date: 'Jun 28, 2025',
    mode: 'Online',
    imageUrl: '/moot-court.jpeg',
    link: 'https://mymun.com/conferences/dmun-moot-court-2025'
  },
  {
    title: 'The DMUN Foundation Sustainability Forum',
    date: 'Jul 12, 2025',
    mode: 'Online',
    imageUrl: '/sustainability-forum.jpeg',
    link: 'https://mymun.com/conferences/dmunsf-2025'
  },
  {
    title: 'DMUN ANNUAL MEETINGS 2025',
    date: 'Jul 19, 2025',
    mode: 'Online',
    imageUrl: '/annual-meetings.jpeg',
    link: 'https://mymun.com/conferences/dmun-debate-2025'
  },
  {
    title: 'DMUN Debate 2025',
    date: 'Jul 15, 2025',
    mode: 'Online',
    imageUrl: '/debate.jpeg',
    link: 'https://mymun.com/conferences/dmun-debate-2025'
  }
];
// Data for the interactive section (Placeholder)
const glanceData = [
  { id: 1, title: 'Programs', path: '/programs', subtext: 'Our immersive initiatives empower students to engage with diplomacy, leadership, and public speaking — preparing them for impact far beyond the classroom.', imageUrl: '/programshome.jpeg' },
  { id: 2, title: 'Advocacy', path: '/advocacy', subtext: 'We champion youth voices by equipping students with the tools to articulate ideas, challenge norms, and represent communities with confidence and clarity.', imageUrl: 'advocacy.jpeg' },
  { id: 3, title: 'Research', path: '/research', subtext: 'From policy papers to global simulations, students explore complex issues through inquiry, collaboration, and innovation — fostering real-world readiness.', imageUrl: '/researchhome.jpeg' },
  { id: 4, title: 'Integrity', path: '/integrity', subtext: 'Grounded in ethics and empathy, our mission is to cultivate principled leaders who lead with purpose and act with responsibility in every forum they enter.', imageUrl: '/integrityhome.jpeg' },
];

// Data for the interactive section (Placeholder)
// Paste this code around line 535
const newsData = [
  {
    id: 1,
    title: 'YouthCubed Nominates 2 Global Youth Representatives for the Summit of the Future',
    summary: 'View photos, videos and a recap of the Summit of the Future.',
    imageUrl: '/Article-1.jpeg',
    path: '/newsroom/1'
  },
  {
    id: 2,
    title: 'DMUN Foundation @ FfD4',
    summary: 'Learn more about our invitation by the UNGA President to participate in the Fourth International Conference on Financing for Development.',
    imageUrl: '/Article-2.jpeg',
    path: '/newsroom/2'
  },
  {
    id: 3,
    title: 'COP28 UAE',
    summary: 'Learn more about our engagement at COP28 UAE as a youth-led civil society stakeholder.',
    imageUrl: '/Article-3.jpeg',
    path: '/newsroom/3'
  }
];

const Home = () => {
  const [activeImage, setActiveImage] = useState(glanceData[0].imageUrl);
  const [hoveredItemId, setHoveredItemId] = useState(null);

  return (
    <MainContentFrame>
      <HeroWrapper className="dmun-hero-section">
      <div className="dmun-hero-text" style={{ textAlign: 'center' }}>
  <SplitText
    text="Representing Youth,"
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="words, chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    style={{
      position: 'relative',
      zIndex: 3,
      color: '#FFFFFF',
      fontSize: '6vw',
      fontFamily: 'Benton Sans Bold, var(--andover-font-sans)',
      fontWeight: 700,
      letterSpacing: '3px',
      textShadow: 'none',
      textTransform: 'uppercase',
      lineHeight: 1.2,
    }}
  />
  <br />
  <SplitText
    text="Building Leaders."
    delay={100}
    duration={0.6}
    ease="power3.out"
    splitType="words, chars"
    from={{ opacity: 0, y: 40 }}
    to={{ opacity: 1, y: 0 }}
    threshold={0.1}
    rootMargin="-100px"
    style={{
      position: 'relative',
      zIndex: 3,
      color: '#FFFFFF',
      fontSize: '6vw',
      fontFamily: 'Benton Sans Bold, var(--andover-font-sans)',
      fontWeight: 700,
      letterSpacing: '3px',
      textShadow: 'none',
      textTransform: 'uppercase',
      lineHeight: 1.2,
      marginTop: '-5vw',
    }}
  />
</div>
      </HeroWrapper>

      <ContentWrapper>
        <StatsSection>
          {statsData.map((stat) => (
            <StatBox
              key={stat.id}
              style={{ gridColumn: stat.gridColumn, gridRow: stat.gridRow }}
            >
              {stat.type === 'pie' && (
                <>
                  <StatPieChartSVG percentage={stat.percentage} />
                  <StatPieChartLabel>{stat.pieLabel}</StatPieChartLabel>
                  {stat.subLabel && <StatPieChartSubLabel>{stat.subLabel}</StatPieChartSubLabel>}
                </>
              )}
              {stat.type === 'icon' && <StatIcon>{stat.icon}</StatIcon>}
              {(stat.type === 'icon' || stat.type === 'text' || stat.type === 'pie') && (
                <>
                  {(stat.type === 'icon' || stat.type === 'text') && (
                    <StatNumber dangerouslySetInnerHTML={{ __html: stat.number }} />
                  )}
                  {(stat.type === 'icon' || stat.type === 'text') && (
                    <StatLabel dangerouslySetInnerHTML={{ __html: stat.label }} />
                  )}
                  {/* Handle the specific case for the first pie chart that also has a main number and label */}
                  {stat.id === 1 && (
                    <>
                      <StatNumber dangerouslySetInnerHTML={{ __html: stat.number }} />
                      <StatLabel dangerouslySetInnerHTML={{ __html: stat.label }} />
                    </>
                  )}
                </>
              )}
            </StatBox>
          ))}
        </StatsSection>

        <GlanceSectionContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <GlanceContentArea>
            <GlanceImageColumn>
              <img src={activeImage} alt="" />
            </GlanceImageColumn>
            <GlanceContentColumn>
              <GlanceHeader>At a Glance</GlanceHeader>
              {glanceData.map((item) => (
                <GlanceTextBlock
                  key={item.id}
                  $isHovered={hoveredItemId === item.id}
                  onMouseEnter={() => {
                    setActiveImage(item.imageUrl);
                    setHoveredItemId(item.id);
                  }}
                  onMouseLeave={() => {
                    setActiveImage(glanceData[0].imageUrl);
                    setHoveredItemId(null);
                  }}
                >
                  <h3>
                    <Link to={item.path}>{item.title}</Link>
                  </h3>
                  <p>{item.subtext}</p>
                </GlanceTextBlock>
              ))}
            </GlanceContentColumn>
          </GlanceContentArea>
        </GlanceSectionContainer>

        <DayLifeSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <DayLifeTitle>The DMUN Difference</DayLifeTitle>
          <Circles>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/dmundifference.jpeg"
                imageAlt="Student 1"
                title="Free" 
                text="The day begins bright and early with morning classes and engaging discussions."
                containerHeight="300px" 
                containerWidth="300px" 
                imageHeight="300px" 
                imageWidth="300px"
                rotateAmplitude={5} /* Reduced rotation */
                scaleOnHover={1.05} /* Subtle scale on hover */
                boxShadow="0 8px 16px rgba(0,0,0,0.2)" /* Clearer shadow */
                borderRadius="10px" /* Sharper corners */
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/online.jpeg"
                imageAlt="Student 2"
                title="Free" 
                text="After classes, students participate in a wide range of extracurricular activities."
                containerHeight="300px" 
                containerWidth="300px" 
                imageHeight="300px" 
                imageWidth="300px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                boxShadow="0 8px 16px rgba(0,0,0,0.2)"
                borderRadius="10px"
              />
            </motion.div>
            <motion.div variants={itemVariants}> {/* Apply itemVariants to TiltedCard wrapper */}
              <TiltedCard 
                imageSrc="/youth-led.jpeg"
                imageAlt="Student 3"
                title="Evening Programs" 
                text="Evenings are filled with study groups, club meetings, and social events."
                containerHeight="300px" 
                containerWidth="300px" 
                imageHeight="300px" 
                imageWidth="300px"
                rotateAmplitude={5}
                scaleOnHover={1.05}
                boxShadow="0 8px 16px rgba(0,0,0,0.2)"
                borderRadius="10px"
              />
            </motion.div>
          </Circles>
           {/* Adding placeholder text elements for the Day in the Life section */}
          <DayInLifeText>
            <h3>Free</h3>
            <p>Access to DMUN is completely free — because opportunity should never come with a price tag. We believe every student deserves a seat at the table, regardless of background.</p>
          </DayInLifeText>
          <DayInLifeText>
            <h3>Youth Led</h3>
            <p>DMUN is built by students, for students. From designing agendas to leading sessions, young voices shape every step — making leadership real, not rehearsed.</p>
          </DayInLifeText>
           <DayInLifeText>
            <h3>Online</h3>
            <p>Our online platform connects students across the globe in real time. With accessibility at its core, DMUN removes barriers and brings diplomacy to your screen.</p>
          </DayInLifeText>
        </DayLifeSection>
        <NewsSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <NewsTitle><Link to="/newsroom" style={{color: 'black', textDecoration: 'none'}}>DMUN NEWS</Link></NewsTitle>
          <NewsGrid>
            {newsData.map(article => (
              <NewsCard key={article.id}>
                <NewsImg imageSrc={article.imageUrl} />
                <NewsContent>
                  <h3>
                    <Link to={article.path} style={{color: 'inherit', textDecoration: 'none'}}>{article.title}</Link>
                  </h3>
                  <p>{article.summary}</p>
                </NewsContent>
              </NewsCard>
            ))}
          </NewsGrid>
        </NewsSection>
        <EventsSection
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <EventsTitle>Upcoming Events</EventsTitle>
          <EventsGrid>
            {eventsData.map((event, index) => (
              <EventCard key={index} href={event.link} imageSrc={event.imageUrl}>
                <EventCardContent>
                  <EventTitle>
                    {event.title}
                  
                  </EventTitle>
                  <EventMeta>
                    <span>{event.mode}</span>
                    <span>{event.date}</span>
                  </EventMeta>
                  <ApplyButton>Apply Now</ApplyButton>
                </EventCardContent>
              </EventCard>
            ))}
          </EventsGrid>
        </EventsSection>
      </ContentWrapper>
    </MainContentFrame>
  );
};

export default Home; 

// --- MOBILE-ONLY LAYOUT FIXES ---
const mobileGlobal = `
  @media (max-width: 768px) {
    & {
      max-width: 100vw !important;
      box-sizing: border-box;
      padding-left: 0 !important;
      padding-right: 0 !important;
      margin-left: 0 !important;
      margin-right: 0 !important;
    }
    display: block !important;
    flex-direction: column !important;
    align-items: stretch !important;
    img {
      max-width: 100vw !important;
      width: 100vw !important;
      height: auto !important;
      object-fit: cover !important;
      display: block;
      margin: 0 auto;
    }
    h1, h2, h3, h4, h5, h6, p, span, div {
      text-align: center !important;
      word-break: break-word;
    }
  }
`;
// Add mobileGlobal to the end of every styled-component definition in this file. 