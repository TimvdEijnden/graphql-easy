import { executeQuery } from "./graphql";

const getCategories = async () =>
  (
    await executeQuery(`
query {
  categories {
    id
    name
    products {
      id
      image
      name
    }
  }
}
`)
  )?.data?.categories;

export default getCategories;
