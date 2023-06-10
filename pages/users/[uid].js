const UserPage = (props) => {
  return <div>{props.name}</div>;
};

export default UserPage;

export const getServerSideProps = async (context) => {
  const { params } = context;
  return {
    props: {
      name: params.uid,
    },
  };
};
