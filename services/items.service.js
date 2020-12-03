const { itemsDatabase } = require("../database");

const createItem = async (item) => {
  try {
    return await itemsDatabase(item);
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = {
  createItem,
};
