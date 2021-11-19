// getCars return all cars in garage
const Cars = require('../models/Cars.model');

const resolvers = {
  Query: {
    getAllCars: async (_parent, _args) => {
      return await Cars.find({});
    },
    getCar: async (_parent, args) => {
      return await Cars.findById(args.id);
    },
  },
  Mutation: {
    addCar: async (parent, args) => {
      const newCar = new Cars({
        model: args.model,
        year: args.year,
        company: args.company,
      });
      return newCar.save();
    },
    removeCar: async (parent, args) => {
      return await Cars.findByIdAndDelete(args.id);
    },
    updateCar: async (parent, args) => {
      const updatedCar = await Cars.findOneAndUpdate(
        {
          _id: args.id,
        },
        {
          $set: {
            model: args.model,
            year: args.year,
            company: args.company,
          },
        },
        { new: true }
      );
      return updatedCar;
    },
  },
};

module.exports = resolvers;
