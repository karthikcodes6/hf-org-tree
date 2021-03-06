export const Card = ({ data, isActive }: { data: any; isActive?: boolean }) => {
  return (
    <div className={`styled-node ${isActive ? "active" : ""}`} id={data.id}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={data.avatar} width="50px" height="50px" alt="employee avatar" />
      <div className="right-container">
        <h6>{data.name}</h6>
        <p className="role">{data.role}</p>
        <p>Contact: {data.email}</p>
      </div>
      <style jsx>{`
        .styled-node {
          display: flex;
          border: 1px solid #d9d9d9;
          justify-content: space-between;
          align-items: center;
          border-radius: 6px;
          padding: 10px;
          width: 250px;
          margin: auto;
          overflow: hidden;
          background: white;
        }
        .styled-node.active {
          border: 3px solid #2ecc71;
        }
        .styled-node img {
          object-fit: cover;
          max-width: 100px;
          border-radius: 50%;
        }
        .right-container {
          padding: 5px;
          text-align: left;
        }
        .right-container p {
          font-size: 10px;
          margin: 0;
        }
        .right-container h6 {
          margin: 0;
          margin-bottom: 5px;
        }
        .right-container .role {
          font-size: 12px;
        }
      `}</style>
    </div>
  );
};
