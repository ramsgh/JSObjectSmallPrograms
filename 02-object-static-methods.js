/**
 * PROGRAM 2: Built-in Object Static Methods
 * (keys, values, entries, assign, freeze)
 */

const product = {
  id: 'P101',
  title: 'Wireless Mouse',
  price: 25,
  inStock: true
};

// ============================================================================
// 1. Object.keys(), Object.values(), Object.entries()
// ============================================================================
console.log('=== 1. KEYS, VALUES & ENTRIES ===');

// Get all property names (keys) as an array
const keys = Object.keys(product);
console.log('Object.keys():', keys); // ['id', 'title', 'price', 'inStock']

// Get all property values as an array
const values = Object.values(product);
console.log('Object.values():', values); // ['P101', 'Wireless Mouse', 25, true]

// Get key-value pairs (tuples) as an array
const entries = Object.entries(product);
console.log('Object.entries():', entries);
// [ ['id', 'P101'], ['title', 'Wireless Mouse'], ['price', 25], ['inStock', true] ]

// Loop through entries easily
console.log('\nLooping over entries:');
entries.forEach(([key, val]) => {
  console.log(` - ${key}: ${val}`);
});


// ============================================================================
// 2. Object.assign() - MERGING OBJECTS
// ============================================================================
console.log('\n=== 2. Object.assign() ===');

const defaultSettings = { theme: 'light', notifications: true };
const userOverrides = { theme: 'dark' };

// Merges userOverrides into defaultSettings (creates a new combined object)
const finalSettings = Object.assign({}, defaultSettings, userOverrides);
console.log('Merged Settings:', finalSettings); // { theme: 'dark', notifications: true }


// ============================================================================
// 3. Object.freeze() - MAKING OBJECTS IMMUTABLE
// ============================================================================
console.log('\n=== 3. Object.freeze() ===');

const config = Object.freeze({
  apiUrl: 'https://api.example.com',
  maxRetries: 3
});

// Attempting to modify or add properties to a frozen object
config.maxRetries = 10; // Ignored
config.newProperty = 'test'; // Ignored

console.log('Frozen Config (Unchanged):', config);
