import { TreeNode, Tree } from "src/components/OrgTree";
import { useEffect, useState } from "react";
import { Layout } from "src/components/Layout";

import { getEmployee } from "../api/getEmployee";
import { Card } from "../components/Card";
import { getIdByName } from "../utils/getIdByName";

export const Dashboard = () => {
  const [data, setData] = useState<any>({});
  const [search, setSearch] = useState("");
  const [activeEmployeeId, setActiveEmployeeId] = useState("");

  async function fetchEmployee() {
    const employee = await getEmployee();
    setData(employee);
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleChange = (e) => {
    setActiveEmployeeId("");
    setSearch(e.target.value);
  };

  const handleGotoSearch = () => {
    const id = getIdByName(data, search);
    if (id) {
      setActiveEmployeeId(id);
      document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
    } else {
      setActiveEmployeeId("");
    }
  };
  return (
    <Layout>
      <div className="dashboard-container">
        <div className="section-one">
          <input
            value={search}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleGotoSearch();
              }
            }}
          />
          <button onClick={handleGotoSearch}>Go</button>
        </div>
        <div className="tree-container">
          <Tree>{renderNode(data, activeEmployeeId)}</Tree>
        </div>
      </div>
      <style jsx>{`
        .dashboard-container {
          padding: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        input {
          margin-right: 5px;
        }
        .tree-container {
          overflow: auto;
          margin: 20px 0;
        }
        .section-one {
          flex: 0 5%;
          align-items: center;
          display: flex;
        }
      `}</style>
    </Layout>
  );
};

const renderNode = (node, activeId) => {
  if (node.children) {
    return (
      <TreeNode data={node} renderNode={renderCard(node.id === activeId)}>
        {node.children.map((child) => renderNode(child, activeId))}
      </TreeNode>
    );
  } else {
    return <TreeNode data={node} key={node.id} renderNode={renderCard(node.id === activeId)} />;
  }
};

const renderCard = (isActive) => {
  return function card(data) {
    return <Card data={data} isActive={isActive} />;
  };
};
