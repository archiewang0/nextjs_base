const UserProfile = (props) => {
  const { username } = props;
  return (
    <div>
      <h1>這裡是UserProfil 頁面</h1>
      <p>{username}</p>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  console.log("context: ", context);
  return {
    props: {
      username: "archie",
    },
  };
};

export default UserProfile;
