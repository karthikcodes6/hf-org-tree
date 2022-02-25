import { TreeNode, Tree } from "src/components/OrgTree";
import { useEffect, useState } from "react";
import { Layout } from "src/components/Layout";

import { getEmployee } from "../api/getEmployee";
import { Card } from "../components/Card";

export const Dashboard = () => {
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");

  async function fetchEmployee() {
    const employee = await getEmployee();
    setData(employee);
  }

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const renderNode = (node) => {
    if (node.children) {
      return (
        <TreeNode data={node} renderNode={renderCard}>
          {node.children.map((child) => renderNode(child))}
        </TreeNode>
      );
    } else {
      return <TreeNode data={node} renderNode={renderCard} />;
    }
  };

  const handleGotoSearch = () => {
    const id = getId(data, search);
    if (id) {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
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

const getId = (node, name) => {
  let foundNode = null;
  const findNode = (node) => {
    if (node.name.toLowerCase().startsWith(name?.toLowerCase() || "")) {
      foundNode = node;
    } else if (node.children) {
      node.children.forEach((child) => {
        findNode(child);
      });
    }
  };
  findNode(node);
  return foundNode?.id || null;
};

function renderCard(data) {
  return <Card data={data} />;
}
