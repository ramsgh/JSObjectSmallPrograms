/**
 * PROGRAM 3: Object Spread Operator (...) & Destructuring
 */

// ============================================================================
// 1. SPREAD OPERATOR (...)
// ============================================================================
console.log('=== 1. OBJECT SPREAD OPERATOR ===');

const itemInfo = { id: 1, name: 'Keyboard' };
const itemPrice = { price: 45, currency: 'USD' };

// Combining objects using the spread operator
const completeItem = {
  ...itemInfo,
  ...itemPrice,
  category: 'Electronics' // Adding a new property at the same time
};
console.log('Combined Object:', completeItem);

// Copying an object safely (Shallow Copy)
const updatedItem = { ...completeItem, price: 50 };
console.log('Original Item Price:', completeItem.price); // 45
console.log('Updated Copy Price:', updatedItem.price);    // 50


// ============================================================================
// 2. OBJECT DESTRUCTURING
// ============================================================================
console.log('\n=== 2. OBJECT DESTRUCTURING ===');

const student = {
  studentId: 'S88',
  name: 'Emma',
  score: 92
};

// Basic destructuring: Extracting properties into standalone variables
const { name, score } = student;
console.log(`Student ${name} scored ${score}`);

// Renaming (Aliasing) & Setting Default Values
const { studentId: id, grade = 'A' } = student;
console.log(`ID: ${id}, Default Grade: ${grade}`);
