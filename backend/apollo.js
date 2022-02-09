const { ApolloServer, gql } = require("apollo-server");
const fixedCategories = require("./data/categories");
const fixedProducts = require("./data/products");

const categories = [...fixedCategories];
const products = [...fixedProducts];

// The GraphQL schema
const typeDefs = gql`
  type Query {
    categories: [Category]
    products: [Product]
    category(id: Int!): Category
    product(id: Int!): Product
  }
  type Category {
    id: Int
    name: String
    products: [Product]
  }
  type Product {
    id: Int
    name: String
    image: String
    price: Float
  }
  type Mutation {
    addCategory(name: String!): Category
    addCategoryWithProduct(
      categoryName: String!
      product: ProductInput
    ): Category
  }
  input ProductInput {
    name: String
    image: String
    price: Float
  }
`;

// Resolve the products based on their id
const resolveCategories = (categories) =>
  categories.map((category) => ({
    ...category,
    products: category.products?.map((product) =>
      products.find((p) => p.id === product)
    ),
  }));

// Reuse creation of category
const createCategory = (name) => {
  const newCategory = { id: categories.length + 1, name, products: [] };
  categories.push(newCategory);
  return newCategory;
};

const resolvers = {
  // A map of functions which return data for the schema.
  Query: {
    categories: () => resolveCategories(categories),
    products: () => products,
    category: (_, { id }) => categories.find((p) => p.id === id),
    product: (_, { id }) => products.find((p) => p.id === id),
  },
  // A map of function which are called to update the 'database'
  Mutation: {
    addCategory: (_, { categoryName }) => createCategory(categoryName),
    addCategoryWithProduct: (_, { categoryName, product}) => {
      const category = createCategory(categoryName);
      category.products.push({ id: products.length + 1, ...product})
      return category;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
