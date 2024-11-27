export const allProduct = async () => {
  try {
    const response = fetch("/product.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
