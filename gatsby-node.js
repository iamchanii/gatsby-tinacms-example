exports.onCreateNode = ({
  node,
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type === 'PagesJson') {
    node.description = node.description || '';

    const textNode = {
      id: createNodeId(`${node.id} markdown field`),
      children: [],
      parent: node.id,
      internal: {
        content: node.description,
        mediaType: `text/markdown`, // Important!
        contentDigest: createContentDigest(node.description),
        type: `${node.internal.type}Markdown`,
      },
    };

    createNode(textNode);

    // Add link to the new node
    createNodeField({
      node,
      name: `markdownContent___NODE`, // Before the ___NODE: Name of the new fields
      value: textNode.id, // Connects both nodes
    });
  }
};
