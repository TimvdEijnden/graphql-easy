import { executeQuery } from "./graphql";

const getCategories = async () =>
  (
    await executeQuery(`
query {
  categories {
    id
    name
  }
}
`)
  )?.data?.categories;

export default getCategories
