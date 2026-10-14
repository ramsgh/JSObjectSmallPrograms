/**
 * PROGRAM 5: JSON (JavaScript Object Notation)
 * (JSON.stringify & JSON.parse)
 */

// Standard JavaScript Object
const order = {
  orderId: 'ORD-9921',
  customer: 'Liam',
  items: ['Laptop', 'Mouse'],
  total: 1250,
  isPaid: true
};

// ============================================================================
// 1. JSON.stringify() -> Converts JS Object to JSON Text String
// ============================================================================
console.log('=== 1. JSON.stringify() ===');

const jsonString = JSON.stringify(order);
console.log('Raw JSON String (Type:', typeof jsonString, '):');
console.log(jsonString);

// Pretty-printed JSON (Indented with 2 spaces)
const prettyJson = JSON.stringify(order, null, 2);
console.log('\nPretty-Printed JSON String:');
console.log(prettyJson);


// ============================================================================
// 2. JSON.parse() -> Converts JSON Text String back to JS Object
// ============================================================================
console.log('\n=== 2. JSON.parse() ===');

// Imagine receiving this JSON string from a database or web server
const receivedJsonText = '{"orderId":"ORD-9921","customer":"Liam","total":1250,"isPaid":true}';

// Converting the string into a real JavaScript Object
const parsedOrder = JSON.parse(receivedJsonText);

console.log('Parsed JS Object (Type:', typeof parsedOrder, '):');
console.log('Customer Name:', parsedOrder.customer); // Liam
console.log('Total Amount:', parsedOrder.total);      // 1250
