
import DatabaseModel from "./database.model";
class CustomerModel extends DatabaseModel {



    async getAll() {
        return await this.select({
            tableName: "customers",
            orderByField: "customerID",
        })
    }
    async persist(data){
        return await this.insert("demo",data);

    }





}

export default new CustomerModel();