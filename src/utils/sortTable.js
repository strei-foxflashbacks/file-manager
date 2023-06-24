const sortTable = (a, b) => {
  const typeA = a.Type.toUppercase();
  const typeB = b.Type.toUppercase();

  return typeA > typeB
          ? 1
          : typeA < typeB
          ? -1
          : 0
}
export default sortTable;