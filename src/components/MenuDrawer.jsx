import styled, { keyframes, css } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DARK_BLUE = '#002147';
const ABBOT_BLUE = '#44b8f3';
const SUBNAV_GRAY_TEXT = '#555';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  animation: ${slideIn} 0.4s cubic-bezier(0.4,0,0.2,1);
  font-family: var(--andover-font-serif);
  background: var(--andover-blue);
  color: ${DARK_BLUE};
  overflow-y: hidden; /* prevent double scroll */
  flex-direction: column; /* so children can flex */
`;

const MenuContent = styled.div`
  width: 100%;
  padding: 4rem 5vw;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 1; /* take all available height */
  overflow-y: auto; /* scrolling happens here */
  -webkit-overflow-scrolling: touch; /* iOS momentum scroll */

  @media (max-width: 768px) {
    padding: 2rem 3vw;
    gap: 2rem;
  }
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const InstitutionName = styled.h1`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 700;
  color: ${DARK_BLUE};
  margin: 0;
  text-transform: uppercase;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: ${DARK_BLUE};
  font-size: 1.2rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;

  &:hover {
    color: ${DARK_BLUE};
  }
`;

const XIcon = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 0.2rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ActionButton = styled(Link)`
  border: 1px solid ${DARK_BLUE};
  background: none;
  color: ${DARK_BLUE};
  border-radius: 25px;
  padding: 0.75rem 1.5rem;
  font-size: 1.5rem;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  text-align: center;

  &:hover {
    background: ${DARK_BLUE};
    color: var(--andover-blue);
  }
    @media (max-width: 768px) {
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
}
`;

const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const MenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const SectionTitle = styled.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.1rem;
  font-weight: 700;
  color: ${DARK_BLUE};
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const MenuLink = styled(Link)`
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  color: ${DARK_BLUE};
  text-decoration: none;
  font-weight: 400;
  padding: 0.3rem 0;
  line-height: 1.4;

  &:hover { 
    color: ${DARK_BLUE};
    text-decoration: underline;
  }
    @media (max-width: 768px) {
  font-size: 1.8rem; /* for MenuLink */
}
  @media (max-width: 480px) {
  font-size: 1.4rem; /* for MenuLink */
}

`;

const BottomSection = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
  }
`;

const ContactInfo = styled.div`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  line-height: 1.6;

  @media (max-width: 480px) {
  font-size: 0.8rem;
  word-break: break-word;
}
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SocialIcon = styled.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  background: transparent;
  border-radius: 50%;
  color: ${DARK_BLUE};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${ABBOT_BLUE};
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
@media (max-width: 480px) {
  width: 32px;
  height: 32px;

  img {
    width: 20px;
    height: 20px;
  }
}

`;

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const MenuDrawer = ({ open, onClose }) => {
  const navigate = useNavigate();

  return (
    <Overlay open={open}>
      <MenuContent>
        <HeaderSection>
          <InstitutionName>DMUN Foundation</InstitutionName>
          <CloseBtn onClick={onClose}>
            <XIcon>✕</XIcon>
            Close
          </CloseBtn>
        </HeaderSection>

        <ActionButtons>
          <ActionButton to="/volunteer" onClick={onClose}>Volunteer</ActionButton>
          <ActionButton to="/donate" onClick={onClose}>Donate</ActionButton>
          <ActionButton to="/partner" onClick={onClose}>Partner With Us</ActionButton>
          <ActionButton to="/about" onClick={onClose}>Contact Us</ActionButton>
        </ActionButtons>

        <MegaMenuGrid>
          <MenuSection>
            <MenuLink to="/" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Home</MenuLink>
            <MenuLink to="/about" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>About</MenuLink>
            <MenuLink to="/programs" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Programs</MenuLink>
            <MenuLink to="/advocacy" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Advocacy</MenuLink>
            <MenuLink to="/research" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Research</MenuLink>
          </MenuSection>

          <MenuSection>
            <MenuLink to="/integrity" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Integrity</MenuLink>
            <MenuLink to="/take-action" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Take Action</MenuLink>
            <MenuLink to="/newsroom" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Newsroom</MenuLink>
            <MenuLink to="/donate" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Donate</MenuLink>
            <MenuLink to="/volunteer" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Volunteer</MenuLink>
          </MenuSection>

          <MenuSection>
            <MenuLink to="/partner" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Partner</MenuLink>
            <MenuLink to="/donor-relations" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Donor Relations</MenuLink>
            <MenuLink to="/mandate" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Our Mission</MenuLink>
            <MenuLink to="/membership" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Membership</MenuLink>
            <MenuLink to="/publications" onClick={() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); onClose(); }}>Publications</MenuLink>
          </MenuSection>
        </MegaMenuGrid>

        <BottomSection>
          <ContactInfo>
            <div>DMUN Foundation</div>
            <div>4th Floor, 12 Gangnamdaero 156-gil, Seoul, Republic of Korea 06035</div>
            <div>Unit 1814, 50 Causeway St., Boston, MA, USA 02114</div>
            <div>enquiries@dmun.org</div>
            <div>+1 (339) 927 8826 | +82 10 5696 8302</div>
          </ContactInfo>
          <Socials>
            <SocialIcon as="a" href="https://www.instagram.com/discovermun/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" />
            </SocialIcon>
            <SocialIcon as="a" href="https://www.linkedin.com/company/dmun-foundation/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon as="a" href="https://www.youtube.com/@dmunfoundation" target="_blank" rel="noopener noreferrer">
              <img src="/Youtube-icon.png" alt="YouTube" />
            </SocialIcon>
          </Socials>
        </BottomSection>
      </MenuContent>
    </Overlay>
  );
};

export default MenuDrawer;
