import { TreeNode, Tree } from "src/components/OrgTree";

export const Dashboard = () => {
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

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <div>
          <h3>Sidebar</h3>
        </div>
        <div>
          <Tree>{renderNode(data)}</Tree>
        </div>
      </div>
    </div>
  );
};

function renderCard(data) {
  return (
    <div className="styled-node">
      <img src={data.image} />
      <div className="right-container">
        <p>{data.name}</p>
        <p>{data.designation}</p>
        <p>{data.contact}</p>
      </div>
      <style jsx>{`
        .styled-node {
          display: flex;
          border: 1px solid #000;
          max-width: 200px;
          margin: auto;
        }
        .styled-node img {
          max-width: 30%;
          object-fit: cover;
        }
        .right-container {
          padding: 5px;
          text-align: left;
          margin-left: 20px;
        }
        .right-container p {
          font-size: 10px;
          margin: 0;
        }
      `}</style>
    </div>
  );
}

const data = {
  name: "Root",
  designation: "CEO",
  image:
    "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
  contact: "hello@mail.com",
  children: [
    {
      name: "Child 1",
      designation: "CEO",
      contact: "hello@mail.com",
      image:
        "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
      children: [
        {
          name: "Grand Child",
          designation: "CEO",
          image:
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        },
      ],
    },
    {
      name: "Child 2",
      contact: "hello@mail.com",
      designation: "CEO",
      image:
        "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
      children: [
        {
          name: "Grand Child",
          designation: "CEO",
          contact: "hello@mail.com",
          image:
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
          children: [
            {
              name: "Great Grand Child 1",
              designation: "CEO",
              contact: "hello@mail.com",
              image:
                "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
            },
            {
              name: "Great Grand Child 2",
              designation: "CEO",
              contact: "hello@mail.com",
              image:
                "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
            },
          ],
        },
      ],
    },
    {
      name: "Child 3",
      designation: "CEO",
      contact: "hello@mail.com",
      image:
        "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
      children: [
        {
          name: "Grand Child 1",
          designation: "CEO",
          contact: "hello@mail.com",
          image:
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        },
        {
          name: "Grand Child 2",
          designation: "CEO",
          contact: "hello@mail.com",
          image:
            "https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=",
        },
      ],
    },
  ],
};
