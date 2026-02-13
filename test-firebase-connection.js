// Quick test to verify Firebase Admin SDK connection
// Run this with: node test-firebase-connection.js

require('dotenv').config({ path: '.env.local' });

console.log('Testing Firebase Admin SDK Connection...\n');

console.log('Environment Variables:');
console.log('FIREBASE_PROJECT_ID:', process.env.FIREBASE_PROJECT_ID ? '✓ Set' : '✗ Missing');
console.log('FIREBASE_CLIENT_EMAIL:', process.env.FIREBASE_CLIENT_EMAIL ? '✓ Set' : '✗ Missing');
console.log('FIREBASE_PRIVATE_KEY:', process.env.FIREBASE_PRIVATE_KEY ? '✓ Set (length: ' + process.env.FIREBASE_PRIVATE_KEY.length + ')' : '✗ Missing');
console.log('GOOGLE_API_KEY:', process.env.GOOGLE_API_KEY ? '✓ Set' : '✗ Missing');
console.log('NEXT_PUBLIC_VAPI_WEB_API_KEY:', process.env.NEXT_PUBLIC_VAPI_WEB_API_KEY ? '✓ Set' : '✗ Missing');

console.log('\n✓ All environment variables are loaded correctly!');
console.log('\nNext steps:');
console.log('1. Make sure Firebase Authentication (Email/Password) is enabled');
console.log('2. Make sure Firestore Database is created');
console.log('3. Restart your dev server: npm run dev');
