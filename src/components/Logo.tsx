interface Props {
  person: {
    name: string;
    age: number;
    isUser: boolean;
  };
}

const logo =
  "https://myoro24.com/static/media/logo-light.4c6ae7b058c28d7ad38b.png";

const Logo = () => {
  return <img src={logo} height="200px" />;
};
export default Logo;
