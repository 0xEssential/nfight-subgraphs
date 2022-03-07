const allSyncs = async (root, args, context, info) => {

  const parent = await context.ownership.Query.L1_syncStatuses({
    root,
    args: { first: 1, orderBy: 'timestamp', orderDirection: 'desc', where: { fighter: root.id }},
    context,
    info,
    selectionSet: `{ id timestamp status }`

  });

  console.warn(parent)

  const child = await context.savestate.Query.syncStatuses({
    root,
    args: { first: 1, orderBy: 'timestamp', orderDirection: 'desc', where: { fighter: root.id }},
    context,
    info,
    selectionSet: `{ id timestamp status }`
  });

  console.warn(child)
  return [...(child ? child : []), ...(parent ? parent : [])].sort((a,b) => a.timestamp < b.timestamp ? 1 : -1)
}

const latestSync = async (root, args, context, info) => {
  console.warn(args)

  console.warn(root)

  console.warn("CONTEXT", context)

  console.warn("INFO", info)

  const all = await allSyncs(root, args, context, info);

  return all[0];
};

const latestSyncStatus = async (root, args, context, info) => {
  console.warn(info.variableValues)
  console.warn(root.id)
  const latest = await allSyncs(root, args, context, info);
  console.warn("LATEST", latest)
  return latest.status || 'Unsynced';
}


const resolvers = {
  Fighter: {
    syncStatus: latestSync,
    // syncs: allSyncs,
    syncStatusString: latestSyncStatus
  },
};

  module.exports = { resolvers };