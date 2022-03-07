const nFighter = async (root, args, context, info) => {

  const parent = await context.ownership.Query.fighter({
      root,
      args,
      context,
      info,
    });

  const child = await context.savestate.Query.fighter({
    root,
    args,
    context,
    info,
  });


  return {
    ...child,
    ...parent
  };
};


const resolvers = {
  Query: {
    nFighter
  },
};

module.exports = { resolvers };