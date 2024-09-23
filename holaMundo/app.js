const tarea =[
    {
        nombre: "estudiar para el examen de backend"
        fecha: "2024-09-14"
        hecho: false 
    },
    {
        nombre: "ir de compras"
        fecha: "2024-09-25"
        hecho: false 
    },
    {
        nombre: "hacer tareas"
        fecha: "2024-09-22"
        hecho: true 
    },
]; 

const tareasPorRealizar=tareas.filter(tarea=> !tarea.hecho);
console.log(tareasPorRealizar)