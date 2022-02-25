export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img width="50px" height="30px" src="https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png" />
        <span>Coffee</span>
      </div>

      <button className="action-item active">Dashboard</button>
      <button className="action-item">Settings</button>
      <style jsx>{`
        .logo {
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          margin-bottom: 100px;
        }
        .action-item {
          padding: 15px 5px;
          width: 100%;
          background-color: transparent;
          border: none;
          text-align: left;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 5px;
        }
        .action-item:hover {
          background-color: rgb(235, 235, 235);
        }
        .action-item.active {
          color: rgb(2, 126, 2);
          background-color: rgb(206, 240, 206);
        }
        .action-item.active:hover {
          color: rgb(2, 92, 2);
          background-color: rgb(201, 242, 201);
        }
      `}</style>
    </div>
  );
};
