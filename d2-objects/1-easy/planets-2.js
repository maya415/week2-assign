/*
https://www.schoolsobservatory.org/discover/quick/planet_age
=============================================================
||                  || Mercury || Venus || Earth  || Mars  ||
||------------------||---------||-------||--------||-------||
||   Radius         || 2440    || 6052  || 6378    || 3397 ||
||   yearLength     || 88      || 225   || 365.25  || 687  ||
||   surfaceGravity || 0.38    || 0.91  || 1       || 0.38 ||
||   moons          || 0       || 0     || 1       || 2    ||

In our last task, we created an object for each of the above planets and assigned properties to them. 
For the yearLength, we return a number but no unit.
Create an object for each planet above and set a property of yearLength.
Now create a method (called getYearLength) that returns the yearLength value with the string " (Earth Days)" after it.
eg mercury.yearLength => 88
eg mercury.getYearLength() => 88 (Earth Days)
*/

// Test command (in terminal) "npm run test:d2:easy:planets-2"
module.exports = { mercury, venus, earth, mars };
