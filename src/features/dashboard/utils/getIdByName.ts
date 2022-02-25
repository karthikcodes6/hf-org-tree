export const getIdByName = (node, name = "") => {
  let foundNode = null;
  const findNode = (node) => {
    if (node.name.toLowerCase().includes(name?.toLowerCase() || "")) {
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
