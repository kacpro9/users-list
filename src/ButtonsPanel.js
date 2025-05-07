import "./ButtonsPanel.css";

const ButtonsPanel = (props) => {
  return (
    <div className="buttonsPanel">
      <button onClick={() => props.showUserType("admin")}>Show Admins</button>
      <button onClick={() => props.showUserType("user")}>Show Users</button>
      <button onClick={() => props.showUserType("all")}>Show All</button>
    </div>
  );
};

export default ButtonsPanel;
