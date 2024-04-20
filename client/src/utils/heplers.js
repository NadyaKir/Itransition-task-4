export const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-green-500 text-white";
    case "blocked":
      return "bg-red-500 text-white";
    default:
      return "bg-blue-500 text-white";
  }
};
