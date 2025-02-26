import { useLocation } from "react-router";
import Container from "../components/shared/container";
import { Title } from "../components/shared/title";
import { BackButton } from "../components/ui/backButton";
import { ContentArea } from "../components/shared/contentArea";

export const Finalize = () => {
  const location = useLocation();

  return (
    <Container>
      <Title name={"Finalize"} />
      <ContentArea text={location.state.name} />
      <BackButton />
    </Container>
  );
};
