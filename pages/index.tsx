import { Box, Container, Stack } from "@mui/material";

const Home = () => {
  return (
    <Stack>
      <Stack flexDirection={"column"}>
        <Stack>
          <Stack className="container">Popular Properties</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Agents</Stack>
        </Stack>
        <Stack>
          <Stack className="container">Top Properties</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
