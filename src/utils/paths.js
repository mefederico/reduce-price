// Utilidad para construir rutas con la base del proyecto
export function getPath(path) {
  const basePath = import.meta.env.BASE_URL || '/';
  
  // Asegurarse de que path comienza con / y que no hay doble /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Si basePath ya termina con /, no agregar otro
  const basePathNormalized = basePath.endsWith('/') 
    ? basePath.slice(0, -1) 
    : basePath;
    
  return `${basePathNormalized}${normalizedPath}`;
}

// Exportación por defecto para compatibilidad
export default { getPath }; 