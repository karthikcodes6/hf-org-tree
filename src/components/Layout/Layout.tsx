import { Sidebar } from "src/components/Sidebar";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">{children}</div>
      <style jsx global>{`
        html {
          box-sizing: border-box;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
          padding: 0;
          font-size: 16px;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
            "Segoe UI Emoji", "Segoe UI Symbol";
          background: #f3f3f3;
        }
        input,
        textarea {
          font-size: 16px;
        }
        button {
          cursor: pointer;
        }
      `}</style>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: row;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
        }

        .sidebar,
        .content {
          display: flex;
          flex-direction: column;

          min-height: 500px;
        }

        .sidebar {
          flex-grow: 1;
          min-width: 250px;
          background-color: #fff;
          padding: 20px;
        }

        .content {
          flex-grow: 5;
          min-width: 630px;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};
