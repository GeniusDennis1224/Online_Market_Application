const Product = require("./../models/productModel");
const { query } = require("express");

exports.getAllProducts = async (req, res) => {
  // Get the query from the route
  try {
    let products;

    console.log(req.query);
    console.log(req.query.category);

    if (req.query.category !== null && req.query.category !== undefined) {
      /* products = await Product.find({
        name: { $regex: /req.query.name/i },
      }); */
      products = await Product.find(req.query);
    } else {
      products = await Product.find();
    }

    //const products = await query;

    res.status(200).json({
      status: "Reading Data Successful!",
      results: products.length,
      data: {
        products,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail to load data from database",
      message: err,
    });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    //In MongoDB, .findOne({_id: req.params.id})

    res.status(200).json({
      status: "Successfully find the document",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "Fail to find the data",
      message: err,
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);

    res.status(200).json({
      status: "Successfully created a new product",
      data: {
        product: newProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail to create the intended new product",
      message: err,
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: "Update the document successfully",
      data: {
        updatedProduct,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail to update the document",
      message: err,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productToDelete = await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "Successfully deleted the product",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail to delete the intended product",
      message: err,
    });
  }
};

exports.deleteAllProducts = async (req, res) => {
  try {
    await Product.deleteMany();

    res.status(200).json({
      status: "Successfully deleted all products",
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: "Fail to delete all products",
      message: err,
    });
  }
};
