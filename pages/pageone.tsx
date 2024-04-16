import { GetServerSideProps } from "next";

type Props = {
  nodeEnv: string;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      nodeEnv: process.env.NEXT_PUBLIC_WHATEVER || "not defined", // provide a default value in case it's not defined
    },
  };
};

const Home: React.FC<Props> = ({ nodeEnv }) => {
  return (
    <div>
      <p>{nodeEnv}</p>
    </div>
  );
};

export default Home;
