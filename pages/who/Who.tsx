import React, { FunctionComponent, useContext, useEffect } from "react";
import MainLayout from "../../layouts/MainLayout";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import {SiteContext} from "../../context/SiteContext";


interface WhoProps {}

const ProfilePic = styled(Image)`
  border-radius: 50%;
`

const Who: FunctionComponent<WhoProps> = () => {
  const { setSelectedNav } = useContext(SiteContext);
  useEffect(() => { setSelectedNav("WHO") }, [setSelectedNav]);
  return (
    <MainLayout title="Who" description="Mehmet is a Senior React Frontend Developer">
      <article style={{ fontSize: 20, padding: 20, lineHeight:1.5, textAlign: "center" }}>
        <ProfilePic
          width={348}
          height={289}
          src="/images/my.png"
          alt="Mehmet Yılmaz Senior Frontend Developer"
        />
        <motion.p  
          initial="hidden"
          animate="show">
          Hi! I&apos;m Mehmet and I&apos;m a Senior Frontend Developer who has about ten years of
          experience.
        </motion.p>

        <p>
          I worked for small, medium and large companies in different fields like
          e-commerce, web development, mobile development, and many more. And
          now working for a NY based CRM product company as Senior React
          Frontend Developer.
        </p>

        <p>
          My tech stack is <strong>React, Redux, TypeScript, HTML, CSS, SASS,
          JavaScript, Dart and Flutter.</strong>
        </p>
      </article>
    </MainLayout>
  );
};

export default Who;
