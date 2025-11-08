import styled from 'styled-components';

const DARK_BLUE = '#002147';

const FooterBar = styled.footer`
  background: var(--andover-blue);
  color: ${DARK_BLUE};
  padding: 0;
  font-family: var(--andover-font-serif);
  width: 100%;
`;

// Styled component for the main content container to control width and padding
const FooterContentWrapper = styled.div`
  max-width: 1200px; /* Set max-width for the content */
  margin: 0 auto; /* Center the content wrapper */
  padding: 0 5vw;
  padding-bottom: 4.5rem; /* Increased bottom padding for more visual space */

  @media (max-width: 768px) {
    padding: 0 3vw;
    padding-bottom: 3.5rem; /* Adjusted mobile bottom padding */
  }
`;

// Styled component for the Take Action heading
const TakeActionHeading = styled.h3`
  font-style: italic;
  font-family: var(--andover-font-serif);
  text-align: left; /* Left-aligned within the content wrapper */
  margin: 0; /* Remove margin, controlled by parent */
  color: ${DARK_BLUE}; /* Ensure correct color */
  font-size: 2.2rem; /* Increased size significantly */
  padding-top: 0; /* Remove top padding, handled by parent */
  white-space: nowrap; /* Prevent wrapping */

  @media (max-width: 768px) {
    text-align: center; /* Center on mobile */
    font-size: 1.8rem; /* Adjusted mobile size */
  }
`;

const Actions = styled.div`
  margin: 0;
  display: flex;
  justify-content: flex-start; /* Align buttons to the start of the flex container */
  gap: 1.5rem; /* Adjusted gap between buttons */
  margin-left: 70px; /* Increased to move buttons further to the right */
  /* Removed padding-bottom */

  @media (max-width: 768px) {
    gap: 1rem; /* Smaller gap on mobile */
    flex-wrap: wrap; /* Allow buttons to wrap on mobile */
    justify-content: center; /* Ensure centering on mobile */
  }
`;

const ActionBtn = styled.a`
  border: 2px solid ${DARK_BLUE};
  border-radius: 50px;
  padding: 1rem 3rem; /* Increased padding for bigger buttons */
  color: ${DARK_BLUE};
  font-size: 1.3rem; /* Increased font size for buttons */
  font-family: var(--andover-font-serif);
  margin: 0; /* Remove individual margins, rely on parent gap */
  background: none;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
  text-decoration: none; /* Ensure no underline */
  white-space: nowrap; /* Prevent buttons from breaking text */

  &:hover {
    background: ${DARK_BLUE};
    color: var(--andover-blue);
  }
`;

// Styled component for the dotted divider line
const Divider = styled.div`
  border-bottom: 1px dotted var(--andover-accent);
  width: 100%;
  margin: 2.8rem auto; /* Adjusted margin top/bottom for more precise spacing */
`;

// Styled component for the main 3-column grid section
const MainFooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2.1fr 1.8fr; /* Fine-tuned column widths based on image */
  gap: 4.5rem; /* Increased gap between columns for more space */
  padding-bottom: 0; /* Remove bottom padding, handled by wrapper */
  align-items: start; /* Align grid items to the top */

  @media (max-width: 1024px) { /* Adjust columns for smaller desktops/tablets */
    grid-template-columns: 1fr 1fr; /* Stack to 2 columns */
    gap: 2.5rem; /* Adjusted gap for 2 columns */
    padding-bottom: 0;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack columns on mobile */
    gap: 2rem;
    text-align: center; /* Center content on mobile */
    padding-bottom: 0;
  }
`;

// Styled component for the Logo + Branding column
const LogoBranding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align content to the left */

  @media (max-width: 768px) {
    align-items: center; /* Center on mobile */
  }
`;

// Styled component for the Logo (now an actual image)
const FooterLogo = styled.img`
  width: 100px; /* Adjusted size based on image */
  height: 100px; /* Adjusted size based on image */
  margin: 0 0 1rem 0; /* Default margin below logo */
  object-fit: contain; /* Ensure logo is contained */

  @media (max-width: 768px) {
    margin: 0 auto 1rem auto; /* Center on mobile */
  }
`;

// Styled component for the Institution Name
const InstitutionName = styled.div`
  color: ${DARK_BLUE};
  font-family: var(--andover-font-serif);
  margin-bottom: 0; /* Removed bottom margin */
  text-align: left; /* Left align text */

  div:first-child { /* Phillips Academy */
    font-size: 1rem; /* Keep size */
    font-weight: normal; /* Keep normal weight */
    text-transform: none; /* Keep case */
    margin-bottom: 0.2rem; /* Space below first line */
  }

  div:last-child { /* ANDOVER */
    font-size: 1.8rem; /* Larger size based on image */
    font-weight: bold; /* Bolder font based on image */
    text-transform: uppercase; /* Capitalize based on image */
  }

  @media (max-width: 768px) {
    text-align: center; /* Center on mobile */
  }
`;

// Styled component for the Address + Description column
const AddressDescription = styled.div`
  text-align: center; /* Center align content based on image */
  color: ${DARK_BLUE};
  font-family: var(--andover-font-sans);

  p {
    max-width: 400px; /* Limit paragraph width */
    margin: 0 auto 1.5rem auto; /* Center paragraph and add bottom margin */
    font-size: 1rem;
    line-height: 1.6;
    color: ${DARK_BLUE}; /* Ensure correct color */
  }

  div {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${DARK_BLUE}; /* Ensure correct color */
  }

  @media (max-width: 768px) {
    text-align: center; /* Ensure centered on mobile */
  }
`;

const QuickLinks = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column; /* Stack links vertically */
  gap: 0.8rem; /* Space between links */
  align-items: flex-end; /* Align links to the right within column */

  @media (max-width: 768px) {
    align-items: center; /* Center links on mobile */
  }
`;

const QuickLink = styled.a`
  color: ${DARK_BLUE};
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  text-decoration: none; /* Ensure no underline by default */

  &:hover {
    text-decoration: underline;
  }
`;

// Styled component for the social icons container (part of the right column)
const Socials = styled.div`
  margin-top: 2.8rem; /* Adjusted space above social icons for precision */
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
  gap: 1.5rem; /* Space between icons (24px) */

  @media (max-width: 768px) {
    margin-top: 2rem; /* Adjusted mobile top margin */
    justify-content: center; /* Center social icons on mobile */
    gap: 1rem; /* Smaller gap on mobile */
    flex-wrap: wrap; /* Allow icons to wrap */
  }
`;

const SocialIcon = styled.span`
  width: 48px;
  height: 48px;
  display: inline-block;
  background: transparent;
  border-radius: 50%;
  color: var(--andover-blue);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`;

const ActionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem; /* Space between the heading and the buttons */
  padding-top: 4.5rem; /* Match original padding for the whole row */
  padding-bottom: 1.8rem; /* Match original padding for the whole row */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack on mobile */
    align-items: center; /* Center items on mobile */
    gap: 1.5rem; /* Adjusted gap for mobile */
    padding-top: 2.5rem; /* Adjusted mobile top padding */
    padding-bottom: 1.5rem; /* Adjusted mobile bottom padding */
  }
`;

const Footer = () => (
  <FooterBar>
    <FooterContentWrapper> {/* Wrap content for max-width and padding */}
      <ActionRow>
        <TakeActionHeading>Take Action…</TakeActionHeading>
        <Actions>
          <ActionBtn href="https://mymun.com">REGISTER</ActionBtn>
          <ActionBtn href="/volunteer">VOLUNTEER</ActionBtn>
          <ActionBtn href="/donate">GIVE</ActionBtn>
        </Actions>
      </ActionRow>
      <Divider />
      <MainFooterGrid>
        <LogoBranding>
          <FooterLogo src="/dmun-white-logo.png" alt="DMUN Foundation Logo" /> {/* Updated to Header Logo.png */}
          <InstitutionName>
           <div>DMUN Foundation</div> {/* Capitalized based on image */}
          </InstitutionName>
        </LogoBranding>

        <AddressDescription>
          <p>
            The Secretariat of the DMUN Foundation:<br/>
            4th Floor, 12 Gangnamdaero 156-gil, Seoul, Republic of Korea 06035<br/>
            </p>
            <p>
            The Liaison Office of the DMUN Foundation in the Americas:<br/>
            Unit 1814, 50 Causeway St., Boston, MA, USA 02114
          </p>
          <div>enquiries@dmun.org</div>
          <div>Liaison Office: +1 (339) 927 8826</div>
          <div>Secretariat: +82 10 5696 8302</div>
        </AddressDescription>

        <div> {/* Container for Quick Links and Socials in the right column */}
          <QuickLinks> {/* Quick Links */}
            <QuickLink href="/donor-relations">Donor Relations</QuickLink>
            <QuickLink href="/integrity">Integrity</QuickLink>
            <QuickLink href="/newsroom">News</QuickLink>
            <QuickLink href="/Membership">Membership</QuickLink>
            <QuickLink href="https://docs.google.com/document/d/1QTCCh-nEZfUvIFdN0KzOfbDRWMk05jKL6IOv9okRB5c/edit?usp=sharing">Privacy Policy</QuickLink>
            <QuickLink href="https://docs.google.com/document/d/1QTCCh-nEZfUvIFdN0KzOfbDRWMk05jKL6IOv9okRB5c/edit?usp=sharing">Terms of Use</QuickLink>
          </QuickLinks>

          <Socials> {/* Social icons */}
            <SocialIcon as="a" href="https://www.instagram.com/discovermun/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-icon.png" alt="Instagram" />
            </SocialIcon>
            <SocialIcon as="a" href="https://www.linkedin.com/company/dmun-foundation/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.png" alt="LinkedIn" />
            </SocialIcon>
            <SocialIcon as="a" href="https://www.youtube.com/@dmunfoundation" target="_blank" rel="noopener noreferrer">
              <img src="/Youtube-icon.png" alt="Youtube" />
            </SocialIcon>
          </Socials>
        </div>
      </MainFooterGrid>
    </FooterContentWrapper>
    <CopyrightText>© 2025 DMUN Foundation, All Rights Reserved.</CopyrightText>
  </FooterBar>
);

// Add new styled component for copyright text
const CopyrightText = styled.div`
  text-align: center;
  color: var(--andover-accent);
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  padding: 1.5rem 0;
  width: 100%;
  background: var(--andover-blue); /* Match footer background */
`;

export default Footer;