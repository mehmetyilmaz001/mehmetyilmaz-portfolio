import { FunctionComponent, useContext, useEffect } from "react";
import { SiteContext } from "../../context/SiteContext";
import MainLayout from "../../layouts/MainLayout";

interface WorkProps {}

const Work: FunctionComponent<WorkProps> = () => {
  const { setSelectedNav } = useContext(SiteContext);
  useEffect(() => {
    setSelectedNav("WORK");
  }, [setSelectedNav]);
  return <MainLayout title="Work" description=""></MainLayout>;
};

export default Work;
