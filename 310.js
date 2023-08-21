function removeDuplicateWords (s) {
  // const set = new Set(s.split(' '))
  // return Array.from(set).join(' ')
  return [...new Set(s.split(' '))].join(' ')
}