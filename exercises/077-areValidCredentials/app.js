const areValidCredentials = (nombre, contraseña) => nombre.length>3 && contraseña.length >= 8;

console.log(areValidCredentials("SiTengoMasDe3Letras", "TengoMasDe8Elementos"));
