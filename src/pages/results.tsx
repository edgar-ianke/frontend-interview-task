import { useLocation, useNavigate } from "react-router";
import Container from "../components/shared/container";
import { Title } from "../components/shared/title";
import { BackButton } from "../components/ui/backButton";
import { ContentArea } from "../components/shared/contentArea";


export const Results = () => {
    const location = useLocation();

    return (
        <Container>
          <Title name={'Results'} />
          <ContentArea text={location.state.name} />
          <BackButton />
        </Container>
    );
  }
