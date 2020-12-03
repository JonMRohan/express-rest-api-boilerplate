const { itemsService } = require("../services");
const { createItem } = itemsService;

const postItem = async (req, res, next) => {
  const { item } = req.body;
  try {
    await createItem(item);
    res.sendStatus(201);
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(error);
  }
};

module.exports = {
  postItem,
};
