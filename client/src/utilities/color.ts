export function obtenerColorContraste(hexColor:string) {
    // Verificar si el valor hexadecimal tiene un signo '#' al principio y eliminarlo si es necesario
    hexColor = hexColor.replace(/^#/, '');
  
    // Verificar si el valor hexadecimal tiene 3 o 6 dígitos y expandirlo si es necesario
    if (hexColor.length === 3) {
      hexColor = hexColor
        .split('')
        .map(char => char + char)
        .join('');
    }
  
    // Convertir el valor hexadecimal a componentes RGB
    const r = parseInt(hexColor.slice(0, 2), 16);
    const g = parseInt(hexColor.slice(2, 4), 16);
    const b = parseInt(hexColor.slice(4, 6), 16);
  
    // Calcular la luminosidad en el espacio de color HSL
    const luminosidad = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
    // Determinar si el color es oscuro o claro
    if (luminosidad > 0.5) {
      return "#000000"; // Devolver negro para colores claros
    } else {
      return "#FFFFFF"; // Devolver blanco para colores oscuros
    }
  }
  