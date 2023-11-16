import routes from "~react-pages";
import { useNavigate, useRoutes } from "react-router-dom";
import { Button } from "antd";

const MainBox = () => {
  const nav = useNavigate();
  return (
    <div>
      <Button
        onClick={() => {
          nav(`/home`);
        }}
      >
        去home页面
      </Button>
      {useRoutes(routes)}
    </div>
  );
};

export default MainBox;
