document.addEventListener('DOMContentLoaded', () => {
    const area = document.getElementById('openNotebook');
    
    // Verifique se o elemento foi encontrado
    if (area) {
      area.addEventListener('click', (event) => {
          event.preventDefault(); // Evita a navegação padrão do link
          alert('Abrindo o caderno...'); // Substituir por lógica dinâmica
      });
    } else {
      console.error("Elemento com id 'openNotebook' não encontrado.");
    }
  
    const map = document.querySelector('map');
    const img = document.querySelector('img');
  
    function adjustCoords() {
      const originalWidth = 1600; // Largura original da imagem
      const originalHeight = 1600; // Altura original da imagem
  
      const scaleX = img.clientWidth / originalWidth;
      const scaleY = img.clientHeight / originalHeight;
  
      const areas = map.querySelectorAll('area');
      areas.forEach(area => {
          const coords = area.dataset.originalCoords.split(',').map(Number);
          const adjustedCoords = coords.map((c, i) =>
              i % 2 === 0 ? c * scaleX : c * scaleY
          );
          console.log("Coords ajustados para área:", adjustedCoords.join(', '));
          area.coords = adjustedCoords.join(',');
      });
    }
  
    window.addEventListener('resize', adjustCoords);
    img.addEventListener('load', adjustCoords);
  });
  