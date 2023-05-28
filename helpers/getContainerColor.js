export const getContainerColor = (type) => {
  const typeColors = {
    fire: "#EB4447",
    water: "#2678D4",
    grass: "#64EDA8",
    electric: "#FEBA0D",
    rock: "#8D8B8D",
    ground: "#DCB980",
    psychic: "#3643A6",
    fighting: "#EA8935",
    bug: "#95D4CC",
    ghost: "#5A32AE",
    normal: "#D4D3B7",
    poison: "#7241F6",
    dragon: "#00A4AA",
    ice: "#375D82",
    default: "#E73359",
  };

  return typeColors[type] || typeColors.default;
};
