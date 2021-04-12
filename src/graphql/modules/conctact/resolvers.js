const resolversType = {
    Query: {
        contact: async (obj, args, context, info) => {
            return await context.UserCadasterServices.contact();
        }
    },

    Mutation: {
        createContact: async (_, { data }, { UserCadasterServices }) => {
            await UserCadasterServices.createContact(data);
        },

        updateContact: async (_, { data }, { UserCadasterServices }) => {
            await UserCadasterServices.updateContact(data);
        },

        deleteContact: async (_, { filter }, { UserCadasterServices }) => {
            await UserCadasterServices.deleteContact(filter);
        }
    }
}

export default resolversType;