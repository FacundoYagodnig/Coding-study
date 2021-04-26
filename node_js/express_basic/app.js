import express from "express";

const app = express();

let cursos = {
  Desarrollo_Front_End: {
    CargaHoraria: "124hs",
    Clases_por_semana: "2",
    Telefono: "1134021220",
  },
  Curso_Back_End: {
    CargaHoraria: "160hs",
    Clases_por_semana: "4",
    Telefono: "1134021220",
  },
  Curso_diseno_UX: {
    CargaHoraria: "84hs",
    Clases_por_semana: "1",
    Telefono: "1134021220",
  },
  Curso_Marketing_Digital: {
    CargaHoraria: "148hs",
    Clases_por_semana: "2",
    Telefono: "1134021220",
  },
};

//direccionamiento y via de acceso de ruta
app.all("/", (req, res) => {
  res.send(`<html>                 
<head><title>Hola express</title></head>
<body>
	<h1> Hola express</h1>
	<a href="cursos"> Go cursos </a>
	
</body>
</html>`);
});

app.get("/cursos", (req, res) => {
  res.send(`<html> 
<head><title>Hola about</title></head>
<body>
	<h1> Hola cursos</h1>
    <a href="data"> Go data</a>


</body>
</html>`);
});

app.get("/data", (req, res) => {
  res.json(cursos);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});
