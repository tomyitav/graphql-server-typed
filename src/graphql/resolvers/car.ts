const resolveFunctions = {
    Query: {
        car (_, {name}){
            return [{
                _id: "gggggggggggg",
                name: "tomCar"
            }];
        }

    }
}

export default resolveFunctions;