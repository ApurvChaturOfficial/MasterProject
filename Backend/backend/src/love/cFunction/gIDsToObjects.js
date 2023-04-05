
const idsToObjects = async (list, model, label, next) => {
    const objects = [];

    for (const each of list) {
        const object_retrieve = await new Promise(async resolve => {
            resolve(await model.findById(each._id))
        });

        // Not Found
        if (!object_retrieve) next(new ErrorHandler(`${label} Not Found`, 404))

        objects.push(object_retrieve);
    }
    return objects
}

module.exports = idsToObjects;
