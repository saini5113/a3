function loadImage(imagePath) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    
    image.onload = () => {
      
      resolve(image);
    };
    
    image.onerror = () => {
      
      reject(new Error(`Failed to load image: ${imagePath}`));
    };
    
    
    image.src = imagePath;
  });
}


const imageElement = document.getElementById('myImageElement'); 

const imagePath = 'path/to/your/image.jpg';

loadImage(imagePath)
  .then((loadedImage) => {
   
    imageElement.appendChild(loadedImage);
    console.log('Image loaded successfully');
  })
  .catch((error) => {
    console.error(error.message);
  });





