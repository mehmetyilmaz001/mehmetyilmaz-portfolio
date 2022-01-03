import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import styled from "styled-components";
import Container from "./Container";
import Nav from "./Nav";



interface HeaderProps {
    
}

const HeaderContainer = styled(Container)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    padding-top: 1.5rem;

    .effect{
        position: absolute;
        width: 400px;
        height: 400px;
        background: radial-gradient(41.29% 41.29% at 39.17% 50.25%, #FFDC44 40.22%, #FFCF00 100%);
        top: -54px;
        left: -40px;
    }
`
 
const Header: FunctionComponent<HeaderProps> = () => {
    return (  
        <header>
            <HeaderContainer className="header-container">
                <div className="effect" />
                <Link href={'/'} passHref>
                    <Image width={165} height={98} src="/images/logo.svg" alt="mehmetyilmaz.dev" />
                </Link>
                <Nav />

                
            </HeaderContainer>
        
        </header>
    );
}
 
export default Header;