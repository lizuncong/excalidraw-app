export const getCenter = (pointers) => {
  const allCoords = Array.from(pointers.values());
  return {
    x: sum(allCoords, (coords) => coords.x) / allCoords.length,
    y: sum(allCoords, (coords) => coords.y) / allCoords.length,
  };
};

export const getDistance = ([a, b]) => Math.hypot(a.x - b.x, a.y - b.y);

const sum = (array, mapper) =>
  array.reduce((acc, item) => acc + mapper(item), 0);
