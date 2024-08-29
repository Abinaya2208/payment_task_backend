
const merchantService = require('../services/merchantService');

const listMerchants = async (req, res, next) => {
  try {
    const merchants = await merchantService.listMerchants();
    if(merchants.error){
      res.status(500).json({
        success: false,
        message: merchants.message || 'Internal Server Error',
      });
      return;
    }
    res.status(200).json({ success: true, data: merchants });
  } catch (error) {
    next(error);
  }
};
const createMerchant = async (req, res, next) => {
    try {
      const merchant = await merchantService.createMerchant(req.body);
      if(merchant.error){
        res.status( 500).json({
          success: false,
          message: merchant.message || 'Internal Server Error',
        });
        return;
      }
      res.status(201).json({ success: true, data: merchant });
    } catch (error) {
      next(error);
    }
  };
  

module.exports = {
  listMerchants,
  createMerchant
};
