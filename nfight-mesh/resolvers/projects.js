const projects = async (root, args, context, info) => {

  const parent = await context.ownership.Query.nftprojects({
      root,
      args,
      context,
      info,
      selectionSet: `{ id chainId contractAddress }`

    });

  const child = await context.savestate.Query.nftprojects({
    root,
    args,
    context,
    info,
    selectionSet: `{ id chainId contractAddress }`

  });

  console.warn(child)

  console.warn(parent)

  const latest = [...(child.length ? child : []), ...(parent.length ? parent : [])];

  return latest;
};


const resolvers = {
  Query: {
    projects
  },
};

  module.exports = { resolvers };