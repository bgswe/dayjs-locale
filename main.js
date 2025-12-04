// index.js

import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';
import isoWeek from 'dayjs/plugin/isoWeek.js';

// --- 1. Extend Day.js with necessary plugins ---
dayjs.extend(updateLocale);
dayjs.extend(isoWeek);

// --- Define the date we will test against ---
// Since today is Thursday, December 4, 2025, we'll use that as a reference.
const referenceDate = dayjs('2025-12-04'); // Thursday

console.log(`\n--- Reference Date: ${referenceDate.format('dddd, MMM D, YYYY')} ---`);
console.log('--- Current Day.js Locale: ' + dayjs.locale() + ' ---\n');


// ===================================================
// # A. Default Behavior (Usually Sunday Start)
// ===================================================

console.log('## A. Default (Locale-Dependent) Start');
console.log(`startOf('week'): ${referenceDate.startOf('week').format('ddd, MMM D')}`);
console.log('---');


// ===================================================
// # B. Setting Monday as Start (ISO Week Standard)
// ===================================================

console.log('## B. Using the isoWeek Plugin (Always Monday)');
const isoWeekStart = referenceDate.startOf('isoWeek');
console.log(`startOf('isoWeek'): ${isoWeekStart.format('ddd, MMM D')}`);
console.log('---');


// ===================================================
// # C. Setting Tuesday as Start (Custom Locale)
// ===================================================

// Update the current locale to start on Tuesday (2)
dayjs.updateLocale(dayjs.locale(), {
  weekStart: 2 // 0=Sunday, 1=Monday, 2=Tuesday
});

console.log('## C. Custom Locale Update (Tuesday Start)');
console.log('New weekStart: 2 (Tuesday)');
console.log(`startOf('week'): ${referenceDate.startOf('week').format('ddd, MMM D')}`);
console.log('---');
