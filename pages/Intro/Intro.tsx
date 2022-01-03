import { FunctionComponent } from "react";
import CodeBlock from "../../components/CodeBlock/CodeBlock";
import MainLayout from "../../layouts/MainLayout";
import Image from "next/image";
import { IconContainer, IntroContainer, MainTitle, MessageTitle } from "./Intro.styled";

const iconLinkList = [
    { name: "Github", url: "https://github.com/mehmetyilmaz001" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/mehmetyilmaz001/" },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/users/3337076/mehmet",
    },
  ];

interface IntroProps {}

const Intro: FunctionComponent<IntroProps> = () => {
  return (
    <MainLayout title="Intro" description="">
      <IntroContainer>
        <div>
          <MainTitle>
            Mehmet Yılmaz <br /> Senior Frontend Developer
          </MainTitle>
          <MessageTitle>Turns user stories into working features.</MessageTitle>

          <IconContainer>
            {iconLinkList.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={"_blank"}
                rel="noreferrer"
              >
                <Image
                  width={30}
                  height={30}
                  src={`/images/icons/${link.name
                    .toLowerCase()
                    .replace(/\s/g, "")}.svg`}
                  alt={link.name}
                  title={link.name}
                />
              </a>
            ))}
          </IconContainer>
        </div>

        <div>
          <CodeBlock />
        </div>
      </IntroContainer>
    </MainLayout>
  );
};

export default Intro;
