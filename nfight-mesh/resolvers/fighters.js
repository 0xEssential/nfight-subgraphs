const fighters = async (root, args, context, info) => {
console.warn(args);
  
const child = await context.savestate.Query.SS_fighters({
  root,
  args,
  context,
  info,
});

const {...parentArgs } = args
const registered = parentArgs?.where?.registered;
parentArgs.where = parentArgs.where ? { ...parentArgs.where, registered: undefined} : parentArgs;

const parent = await context.ownership.Query.fighters({
    root,
    args: parentArgs,
    context,
    info,
  });


// console.warn("PARENT:", parent)
// console.warn("CHILD:", child)


const crossChain = child.reduce((fighters, fighter) => {
  const mainnetIndex = parent.findIndex((pFighter) => pFighter.id === fighter.id);
  if (mainnetIndex > -1) {
    const mainnetFighter = parent.splice(mainnetIndex, 1)[0];

    return [
      ...fighters,
      {
        ...mainnetFighter,
        registered: false,
        ...fighter,
        ...(mainnetFighter?.owner && {owner: mainnetFighter.owner}),
        ...(mainnetFighter?.project && {project: mainnetFighter.project})
      }
    ]
  }
  console.warn(fighter);
  if (fighter?.project?.chainId == '137') {
    return [
      ...fighters,
     fighter,
    ]
  }

  return fighters;
}, [])

if(registered) return crossChain;

return [...crossChain, ...parent];
};

const resolvers = {
  Query: {
    fighters
  },
};

module.exports = { resolvers };