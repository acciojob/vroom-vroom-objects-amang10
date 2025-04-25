function Car(make, model) {
  this.make = make;
  this.model = model;
}

Car.prototype.getMakeModel = function () {
  return ${this.make} ${this.model};
};

function SportsCar(make, model, topSpeed) {
  // Inherit properties from Car
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit methods from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method specific to SportsCar
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;