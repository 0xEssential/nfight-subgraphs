const projects = async (root, args, context, info) => {

  const parent = await context.ownership.Query.nftprojects({
      root,
      args,
      context,
      info,
    });

  const child = await context.savestate.Query.projects({
    root,
    args,
    context,
    info,
  });

  const latest = [...(child.length ? child : []), ...(parent.length ? parent : [])];

  return latest;
};


const resolvers = {
  Query: {
    projects
  },
};

  module.exports = { resolvers };