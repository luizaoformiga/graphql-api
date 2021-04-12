import database from '../../database';

class UserCadasterServices {
    constructor(service) {
      this.service = service;
    }

    contact = async () => await UserCadasterServices.contact();

    createContact = async (_, { data }) => {
        await(await this.service("contact").insert(data).returning("*"))[0];
    }

    updateContact = async (_, { data }) => {
        await(await this.service("contact").where({ id }).update(data).returning("*"))[0];
    }

    deleteContact = async (_, { filter }) => {
        if(filter.id) {
            return await this.service('contact').where({ id: filter.id }).delete();
        }

        if(filter.email) {
            return await this.service('contact').where({ email: filter.email }).delete();
        }

        throw new Error('Please, must for params');        
    }
}

export default new UserCadasterServices(database);