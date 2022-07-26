class Category {

    constructor(){}

    static index()
    {
        console.log("All categories");
    }

    static store(request , response)
    {
        console.log("Store category");
    }

    static find(request ,response)
    {
        console.log("the id is ");
    }

    static update(request , response)
    {
        console.log("update");
    }

    static delete(request , response)
    {
        console.log("delete");
    }

}

module.exports = Category