const DNAPairs = {
  'A': 'T',
  'T': 'A',
  'C': 'G',
  'G': 'C'
}
function DNAStrand(dna){
  return dna.replace(/./g, match => DNAPairs[match])
}
// A <-> T
// C <-> G
console.log(DNAStrand("AAAA")) // TTTT
// console.log(DNAStrand("GTAT")) // CATA