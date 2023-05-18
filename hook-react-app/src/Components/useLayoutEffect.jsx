import { useState, useLayoutEffect } from 'react';

function ExampleComponent() {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    // Actualizar el ancho inicial
    updateWidth();
    // Agregar un listener para actualizar el ancho cuando la ventana se redimensione
    window.addEventListener('resize', updateWidth);
    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);
  // La dependencia vacía asegura que el efecto solo se ejecute una vez

  return <div>El ancho de la ventana es: {width}px</div>;
}

export default ExampleComponent;
