const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');



router.get('/', (req, res) => {
  // Handle GET request and send a fixed response
  const response = {
    operation_code: 1,
  };
  res.status(200).json(response);
});

  




router.use(bodyParser.json());

// Define the POST endpoint
router.post('/', (req, res) => {
  // Handle POST request and generate the response
  const { data } = req.body;
  
  // Generate the user_id (full_name_ddmmyyyy) using a hypothetical user data
  const user = {
    full_name: 'John Doe',
    dob: '17091999',
    email: 'john@xyz.com',
    roll_number: 'ABCD123',
  };
  const user_id = `${user.full_name}_${user.dob}`;
  
  // Extract numbers and alphabets from the input data
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => isNaN(item) && item.length === 1);
  
  // Find the highest alphabet (case insensitive) from the input array of alphabets
  const highest_alphabet = [...alphabets].sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' })).pop();
  
  // Construct the response
  const response = {
    is_success: true,
    user_id,
    email: user.email,
    roll_number: user.roll_number,
    numbers,
    alphabets,
    highest_alphabet: [highest_alphabet],
  };
  
  res.json(response);
});


  module.exports=router;