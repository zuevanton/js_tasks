function myLanguages(results) {
  return Object.keys(results)
    .filter(item => results[item] >= 60)
    .sort((a, b) => results[b] - results[a])
}