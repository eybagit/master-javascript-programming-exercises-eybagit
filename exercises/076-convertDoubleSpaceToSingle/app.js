function convertDoubleSpaceToSingle(Oracion) {
    return Oracion.split("  ").join(" ");
    
}

let output = convertDoubleSpaceToSingle("  string  with  double  spaces  ");
console.log(output); // --> "string with double spaces"
