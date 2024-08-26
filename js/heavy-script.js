// heavy-script.js
console.log('Heavy script running...');
// Simulate a heavy computation
const start = Date.now();
while (Date.now() - start < 5000) {
    // Busy-wait for 5 seconds
}
console.log('Heavy script finished.');

