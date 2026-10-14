/**
 * PROGRAM 4: Nested Objects and Arrays
 */

const employee = {
  id: 101,
  name: 'Carlos',
  department: 'Engineering',

  // Nested Object
  address: {
    street: '123 Tech Lane',
    city: 'San Francisco',
    zip: '94105'
  },

  // Nested Array of Objects
  projects: [
    { name: 'Mobile App', status: 'Completed' },
    { name: 'Cloud Migration', status: 'In Progress' }
  ]
};

// ============================================================================
// 1. ACCESSING NESTED PROPERTIES
// ============================================================================
console.log('=== 1. ACCESSING NESTED VALUES ===');
console.log('City:', employee.address.city);                   // San Francisco
console.log('First Project Name:', employee.projects[0].name);   // Mobile App
console.log('Second Project Status:', employee.projects[1].status); // In Progress


// ============================================================================
// 2. NESTED DESTRUCTURING
// ============================================================================
console.log('\n=== 2. NESTED DESTRUCTURING ===');

// Extracting 'city' directly from the nested 'address' object
const { name, address: { city, zip } } = employee;
console.log(`${name} lives in ${city} (ZIP: ${zip})`);

// Extracting the first item from the nested 'projects' array
const { projects: [firstProject] } = employee;
console.log('First Project:', firstProject.name, '-', firstProject.status);
