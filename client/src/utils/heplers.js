export const getStatusColor = (status) => {
  switch (status) {
    case "active":
      return "bg-green-500 text-white";
    case "inactive":
      return "bg-yellow-500 text-gray-800";
    case "blocked":
      return "bg-red-500 text-white";
    default:
      return "";
  }
};
