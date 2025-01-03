import { exec } from "child_process";

// Ruta del entorno virtual y comando para ejecutar el servidor
const activateEnvironmentOfPython = ".\\backend\\env\\Scripts\\Activate.ps1";
const runBackend = "python .\\backend\\manage.py runserver ${PORT:-80}";

// Comando corregido para PowerShell
const command = `pwsh -c "& { . ${activateEnvironmentOfPython}; ${runBackend} }"`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error al ejecutar el script del backend: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error en el backend: ${stderr}`);
    return;
  }
  console.log(`Backend iniciado correctamente:\n${stdout}`);
});
