
const axios = require('axios');
require('dotenv').config();

const listMerchants = async () => {
  const options = {
    method: 'GET',
    url: `${process.env.RAIN_FOREST_PAY_BASE_URL}/merchants`,
    headers: {
      'accept': 'application/json',
      'authorization': `Bearer ${process.env.RAIN_FOREST_PAY_API_KEY}`
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    return {error:true , message:error.response ? error.response.data : error.message}
  }
};

const createMerchant = async (merchantData) => {
    const apiData = {
        name: merchantData.name,
        legal_name: merchantData.legal_name,
        merchant_type: merchantData.merchant_type.toUpperCase(),
        mcc: merchantData.mcc,
        email: merchantData.email,
        website: merchantData.website,
        phone_number: merchantData.phone_number,
        average_ticket: Number(merchantData.average_payment_amount),
        high_ticket: Number(merchantData.maximum_payment_amount),
        average_monthly_volume: Number(merchantData.total_monthly_payments_amount),
        billing_contact: {
          address_line_1: merchantData.address_line_1,
          address_line_2: merchantData.address_line_2,
          city: merchantData.city,
          state: merchantData.state,
          postal_code: merchantData.postal_code,
          country: "US" 
        },
        owner_1: {
          first_name: merchantData.owner_first_name,
          last_name: merchantData.owner_last_name,
          dob: merchantData.owner_dob,
          encrypted_ssn: "SUPywcKsExepLYVgbqfHtOXc2NNM8LOTvsACcR5jkKaGr0lMRY/Lf5xflVXAl/9vuNWEnDy/jh7oDC9uH2j3+ha0uUPBSXz09FSSZ4Y2d71zBze6m+xKXJWTvX53dBZjpp6amuW7GnJNw6UAFEjjTe8Z4rm03T9IRd2VOdkyWl5fNTZyC7hXQpvfO/TjzzBc5T2N5k7KmnQovdQovGQhh4niKHIQntmM6lKyXWrFGlY9Erto30rJLJgR2BHhvEVnFo4EQ/pDWqLwjmqTErmDu4nGtNgpOJMBwQ7xl1Y+vLlT8ZzvPJebzntM/6r9f5TiHCty4Age3M7P6Cu0/Anmg7LrLP19lZf9n0j4cdXPl0sb1l7tjjnlcBUS7wPdrHl+tXGfOojGPB4tXgDzS6qY+cvns+ybEK/T3HU8tCUiPXgN6IpZ2b0GEpfh6BvG+q1Hov68UOkeUmF3keeKMuk1PLL5FcveXSifRnn+fyuAP4D4pBw8itMXsJ5SfkaLOuSXm95m+CP4vOUDAlkG0t0RJckSmG+Ttq2Lu9ZOREWkwDNZ2WyJtvlGa5mOPl7Vlf65U3LJYsZLEzNaeZoV1M6fp3RHZ3t6M3uXmpHDgsHwMSL8z9/ICwpXhBtj7PDeiOv34+dgF5YbLGaHtTkzUPsK8tadzAEyl5yhvVnJ26+Ysho=", // Assuming you handle SSN encryption elsewhere
          ssn_last_4: merchantData.owner_ssn_last_4,
          email: merchantData.owner_email,
          phone_number: merchantData.owner_phone_number,
          address_line_1: merchantData.owner_address_line_1,
          address_line_2: merchantData.owner_address_line_2,
          city: merchantData.owner_city,
          state: merchantData.owner_state,
          postal_code: merchantData.owner_postal_code,
          country: "US" 
        }
      };
    const options = {
      method: 'POST',
      url: `${process.env.RAIN_FOREST_PAY_BASE_URL}/merchants`,
      headers: {
        'accept': 'application/json',
        'authorization': `Bearer ${process.env.RAIN_FOREST_PAY_API_KEY}`,
        'content-type': 'application/json'
      },
      data: apiData
    };
  
    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      // throw new Error(error.response ? error.response.data : error.message);
      return {error:true , message:error.response ? error.response.data : error.message}
    }
  };

module.exports = {
  listMerchants,
  createMerchant
};
