import styled from 'styled-components';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const DARK_BLUE = '#002147';
const ABBOT_BLUE = '#44b8f3';

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="butt" strokeLinejoin="miter">
    <polyline points="2 2 12 12 22 2"></polyline>
  </svg>
);

const MenuGlyph = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ verticalAlign: 'middle' }}>
    <line x1="3" y1="8" x2="21" y2="8"/>
    <line x1="3" y1="12" x2="21" y2="12"/>
    <line x1="3" y1="16" x2="21" y2="16"/>
  </svg>
);

const SearchGlyph = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="7"/>
    <line x1="16.5" y1="16.5" x2="21" y2="21"/>
  </svg>
);

const HeaderBar = styled.header`
  background: ${props => (props.$transparent ? 'transparent' : ABBOT_BLUE)};
  color: ${props => (props.$transparent ? '#fff' : 'var(--andover-accent)')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  padding: 0 3vw;
  height: 70px;
  margin: 0;
  box-sizing: border-box;
  z-index: 9999 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background 0.3s ease, color 0.3s ease;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  height: 100%;
`;

const Logo = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: inherit;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchToggle = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.35rem;

  &:hover { text-decoration: underline; }
`;

const Search = styled.input`
  border: none;
  border-bottom: 1px solid currentColor;
  background: transparent;
  color: inherit;
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  width: 200px;
  &::placeholder { color: currentColor; opacity: 0.8; }
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration { display: none; }
  &::-ms-clear { display: none; }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = ({ onMenuClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter' && searchValue.trim()) {
      navigate(`/newsroom?search=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const isHome = location.pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsTransparent(false);
      return;
    }
  
    const heroEl = document.querySelector('.dmun-hero-section'); // your actual hero wrapper
    const heroHeight = heroEl ? heroEl.offsetHeight : 0;
  
    const handleScroll = () => {
      if (window.scrollY >= heroHeight) {
        setIsTransparent(false); // Abbott blue after hero ends
      } else {
        setIsTransparent(true); // transparent while over hero
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on mount
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);
  

  return (
    <>
      <HeaderBar $transparent={isHome && isTransparent}>
        <StyledLink to="/">
          <Logo src="/dmun-white-logo.png" alt="DMUN Foundation Logo" />
        </StyledLink>
        
        <Navigation>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink to="/advocacy">Advocacy</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/newsroom">Newsroom</NavLink>
        </Navigation>

        <Right>
          {showSearch && (
            <Search
              autoFocus
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
              onKeyDown={handleSearchKeyDown}
              placeholder="Search..."
            />
          )}
          <SearchToggle onClick={() => setShowSearch(s => !s)}>
            <SearchGlyph /> Search
          </SearchToggle>
          <NavLink as="button" onClick={onMenuClick} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <MenuGlyph /> Menu
          </NavLink>
        </Right>
      </HeaderBar>
    </>
  );
};

export default Header;
