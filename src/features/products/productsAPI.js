import customAxios from "../../utiles/axios.config";

export const fetchProducts = async () => {
    const res = await customAxios.get("products.json");
    const data = await res.data;
    return data
}
export const addProduct = async (newData) => {
     await customAxios.post("products.json", newData)
}
export const removeProduct = async (selectedData) => {
    await customAxios.delete("products.json", selectedData)
}