const API_BASE_URL = "https://saas-platform-backend.onrender.com/api/public";

export const getAttributeStats = async (attributeId: string) => {
  const response = await fetch(`${API_BASE_URL}/attributes/${attributeId}/stats`);
  if (!response.ok) {
    throw new Error("Failed to fetch attribute stats");
  }
  return response.json();
};

export const getUniqueAttributeValues = async (attributeId: string) => {
  const response = await fetch(`${API_BASE_URL}/attributes/${attributeId}/unique-values`);
  if (!response.ok) {
    throw new Error("Failed to fetch unique attribute values");
  }
  return response.json();
};
