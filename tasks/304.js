const whosOnline = (friends) => {
  const result = {};
  for(const { status, username, lastActivity } of friends) {
    if(status === 'offline') {
      result.offline ??= []
      result.offline.push(username)
      continue
    }
    if(lastActivity > 10) {
      result.away ??= []
      result.away.push(username)
      continue
    }
    if(status === 'online') {
      result.online ??= []
      result.online.push(username)
    }
  }
  return result
}

const friends = [{
  username: 'David',
  status: 'online',
  lastActivity: 12
}, {
  username: 'Lucy',
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob',
  status: 'online',
  lastActivity: 104
}]

console.log(whosOnline(friends))
// {
//   online: ['David'],
//   offline: ['Lucy'],
//   away: ['Bob']
// }