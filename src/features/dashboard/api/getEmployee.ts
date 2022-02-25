export const getEmployee = async () => {
  try {
    const response = await fetch("/api/employee");
    if (response.status === 200) {
      return await response.json();
    }
  } catch (error) {
    throw new Error(error);
  }
  return null;
};
