import { FunctionComponent, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import theme from "../../style/theme";
import {SiteContext} from "../../context/SiteContext";

interface NavProps {}

export const navItems = ["HOME", "WHO", "WORK"];

const NavContainer = styled.nav`
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.2rem;

    li {
      display: flex;
      flex-direction: column;
      ${theme.fonts.adventPro};
      position: relative;
      font-size: 1.2rem;

      .pointer {
        position: absolute;
        opacity: 0;
        color: white;
        transition: all 0.2s ease-in-out;
        transform: rotate(90deg);
        left: 0;
        right: 0;
        bottom: -1.5rem;
        height: 23px;
        width: 23px;
        margin: auto;
      }

      :hover, &.selected {
          .pointer {
            opacity: 1;
          }
       }

      a {
        color: ${({ theme }) => theme.link};
        position: relative;

        :hover {
          color: black;
        }
      }
    }
  }
`;

const Nav: FunctionComponent<NavProps> = () => {
  const { selectedNav } = useContext(SiteContext);
  return (
    <NavContainer>
      <ul>
        {navItems.map((item, i) => (
          <li key={i} className={selectedNav === item ? "selected": ""}>
            <Link href={item === 'HOME' ? '/' : item.toLowerCase()} passHref>
              {item}
            </Link>
            <div className="pointer">{'}'}</div>
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Nav;
