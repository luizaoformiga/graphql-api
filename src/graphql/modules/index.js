import join from 'path';
import { loadFilesSync, mergeTypeDefs, mergeResolvers } from 'graphql-tools';

const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.gql"));
const allResolvers = loadFilesSync(join(__dirname, "modules", "**", "resolvers.js"));

const typDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

export default { typDefs, resolvers }