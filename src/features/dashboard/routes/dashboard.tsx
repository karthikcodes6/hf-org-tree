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

  const renderNode = (node) => {
    if (node.children) {
      return (
        <TreeNode data={node} renderNode={renderCard(node.id === activeEmployeeId)}>
          {node.children.map((child) => renderNode(child))}
        </TreeNode>
      );
    } else {
      return <TreeNode data={node} renderNode={renderCard(data.id === activeEmployeeId)} />;
    }
  };

  const handleGotoSearch = () => {
    const id = getIdByName(data, search);
    if (id) {
      setActiveEmployeeId(id);
      document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      setTimeout(() => {
        setActiveEmployeeId("");
      }, 2500);
    } else {
      setActiveEmployeeId("");
    }
  };
  return (
    <Layout>
      <div className="dashboard-container">
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
        <Tree>{renderNode(data)}</Tree>
      </div>
      <style jsx>{`
        .dashboard-container {
          padding: 20px;
        }
      `}</style>
    </Layout>
  );
};

const renderCard = (isActive) => {
  return function card(data) {
    return <Card data={data} isActive={isActive} />;
  };
};
