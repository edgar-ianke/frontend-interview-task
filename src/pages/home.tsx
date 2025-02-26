import Container from "../components/shared/container";
import Table from "../components/shared/table";
import { Title } from "../components/shared/title";
import { useTableData } from "../utils/hooks/useTableData";

export const Home = () => {
    const tableData = useTableData()
    
    return (
        <Container>
          <Title name={'Dashboard'} />
          <Table data={tableData} />
        </Container>
    );
  }
