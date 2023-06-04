class CrudReposirtory{
    constructor(model)
    {
        this.model = model;
    }

    async create(data){
        try {
            const result = await  this.model.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in the crud repository");
            throw {error};
        }
    }

    async destroy(modelId){
        try {
            const result = await this.model.destroy({
                where :{
                    id : modelId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in the crud repository");
            throw {error};
        }
    }

    async get(id){
        try {
            const response =  await this.model.findByPk(id);
            return response;
        } catch (error) {
            console.log("something went wrong in the crud repository");
            throw {error};
        }
    }
    async update(id,data)
    {
        try {
            const  city  = await this.model.update(data,{
                where : {
                    id : id,
                }
               });

            return city;
        } catch (error) {
            console.log("something went wrong in the crud repository");
            throw {error};
        }

    }
    async getAll(){
        try {
            const response =  await this.model.findAll();
            return response ;
        } catch (error) {
            console.log("something went wrong in the crud repository");
            throw {error};
        }
    }

}
module.exports =  CrudReposirtory;