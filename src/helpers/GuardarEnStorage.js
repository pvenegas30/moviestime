export const GuardarEnStorage = (clave, elemento) => {

        //Conseguir los elementos que ya tenemos en el storage
    
        let elementos = JSON.parse(localStorage.getItem(clave));
    
        //Comprobar si es array
    
        if(Array.isArray(elementos)){

          //guardar dentro del array un elemento nuevo

          elementos.push(elemento);
        }else{
    
          //Crear una array con la nuevo elemento
    
          elementos = [elemento];
        }
    
        //Guardar en el LocalStorage
    
        localStorage.setItem(clave, JSON.stringify(elementos));
    
        //Devolver objeto guardado
    
        return elemento;

    
      }
