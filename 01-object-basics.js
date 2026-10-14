/**
 * PROGRAM 1: Object Creation, Property Access, Methods, and 'this' Keyword
 */

// ============================================================================
// 1. OBJECT LITERAL CREATION
// ============================================================================
const userLiteral = {
  name: 'Alex',
  role: 'Developer',

  // Method inside object literal using 'this' keyword
  greet: function() {
    console.log(`Hello, I am ${this.name} and I am a ${this.role}.`);
  }
};

console.log('=== 1. OBJECT LITERAL & METHODS ===');
userLiteral.greet(); // Output: Hello, I am Alex and I am a Developer.


// ============================================================================
// 2. CONSTRUCTOR FUNCTION CREATION
// ============================================================================
function UserConstructor(name, role) {
  this.name = name;
  this.role = role;

  this.describe = function() {
    return `${this.name} works as a ${this.role}`;
  };
}

const user1 = new UserConstructor('Sarah', 'Designer');
const user2 = new UserConstructor('Mike', 'Manager');

console.log('\n=== 2. CONSTRUCTOR FUNCTION ===');
console.log(user1.describe()); // Sarah works as a Designer
console.log(user2.describe()); // Mike works as a Manager


// ============================================================================
// 3. DOT NOTATION VS. BRACKET NOTATION
// ============================================================================
console.log('\n=== 3. ACCESSING PROPERTIES ===');

// Dot Notation (Used when property name is fixed)
console.log('Dot Notation:', user1.name); // Sarah

// Bracket Notation (Used when property name is in a variable)
const keyToAccess = 'role';
console.log('Bracket Notation (via variable):', user1[keyToAccess]); // Designer

// Dynamically adding/updating properties
user1.country = 'UK';
user1['age'] = 28;
console.log('Updated User1 Object:', user1);
