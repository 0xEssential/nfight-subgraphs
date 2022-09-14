const allSyncs = async (root, args, context, info) => {

  const parent = await context.ownership.Query.syncStatuses({
    root,
    args: { first: 1, orderBy: 'timestamp', orderDirection: 'desc', where: { fighter: root.id }},
    context,
    info,
    selectionSet: `{ id timestamp status }`

  });

  const child = await context.savestate.Query.SS_syncStatuses({
    root,
    args: { first: 1, orderBy: 'timestamp', orderDirection: 'desc', where: { fighter: root.id }},
    context,
    info,
    selectionSet: `{ id timestamp status }`
  });

  return [...(child ? child : []), ...(parent ? parent : [])].sort((a,b) => a.timestamp < b.timestamp ? 1 : -1)
}

const latestSync = async (root, args, context, info) => {
  const all = await allSyncs(root, args, context, info);

  return all[0];
};

const latestSyncStatus = async (root, args, context, info) => {
  const latest = await allSyncs(root, args, context, info);
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