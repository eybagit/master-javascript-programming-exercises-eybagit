function PhoneNumberFormatter(numeros) {
  this.numeros = numeros;
}

PhoneNumberFormatter.prototype.render = function() {
  const codigoArea = this.parenthesize(this.getAreaCode());
  const codigoCentral = this.getExchangeCode();
  const numeroLinea = this.getLineNumber();
  return `${codigoArea} ${codigoCentral}-${numeroLinea}`;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  return this.slice(0, 3);
};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  return this.slice(3, 6);
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  return this.slice(6, 10);
};

PhoneNumberFormatter.prototype.parenthesize = function(texto) {
  return '(' + texto + ')';
};

PhoneNumberFormatter.prototype.slice = function(inicio, fin) {
  return this.numeros.slice(inicio, fin).join('');
};

const telefono = new PhoneNumberFormatter([6,5,0,8,3,5,9,1,7,2]);
console.log(telefono.render()); // --> "(650) 835-9172"