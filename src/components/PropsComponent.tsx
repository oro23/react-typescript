import User from "../interfaces/users";

const PropsComponent = (user: User) => {
  return (
    <>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.username}</p>
    </>
  );
};
export default PropsComponent;
