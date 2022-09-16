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


const crossChain = parent.reduce((fighters, fighter) => {
  const mainnetIndex = child.findIndex((pFighter) => pFighter.id === fighter.id);
  // if (mainnetIndex > -1) {
    const childFighter = child.splice(mainnetIndex, 1)[0];

    return [
      ...fighters,
      {
        ...fighter,
        ...childFighter,
        ...(fighter?.owner && {owner: fighter.owner}),
        ...(fighter?.project && {project: fighter.project})
      }
    ]
  // }
  console.warn(fighter);
  // if (fighter?.project?.chainId == '137') {
  //   return [
  //     ...fighters,
  //    fighter,
  //   ]
  // }

  // return fighters;
}, [])

if(registered) return crossChain;

return [...crossChain, ...child];
};

const resolvers = {
  Query: {
    fighters
  },
};

module.exports = { resolvers };