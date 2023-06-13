# Consideraciones a tener en cuenta

Espero esten muy bien, en este challenge debemos considerar el enfoque del aplicativo web, se debe tener en cuenta que se plantearon tres roles Admin, Revisor y Cliente, dichos roles tienen diferentes opciones, lastimosamente me fue imposible completar el desafío al 100% ya que me comunicaron el viernes turnos de 11 horas todo el fin de semana además de este festivo, de antemano una disculpa por eso.

Así que me enfoque en dos cosas que en mi opinión cumplirían con los requerimientos más complicados o más demandantes, que fue la seguridad y a lo que denominé logs que es el historial de acciones de los usuarios.

s.

1. **La seguridad**

   - Las credenciales de los usuarios se encriptan.
   - Cada vez que Inicie sesion se le entrega un token que validara su acceso a las rutas autorizadas por el aplicativo.
   - Si el usuario Inicia Sesion no podrá ir a rutas no autorizadas y tampoco podrá ir al Home, deberá cerrar sesion para llegar al Home, lo anterior quiere decir que el programa cuenta con direccionamiento, esto básicamente demuestra que con ayuda del token y los Guards lo redirigen a my-documents que sería la ventana principal, teniendo como resultado un control total de las rutas que podrá hacer el usuario.
   - El token cambiará cada vez que inicie sesión lo que impide que una vez vencido pueda volver a utilizarlo, esto obliga al usuario a tener todo el tiempo un token válido.

2. **Historial**:
   - El usuario Admin es capaz de ver todas las acciones que hagan los usuarios en una tabla que posee paginación, que tiene toda la información necesaria para identificar el usuario, la fecha, y la acción que realizó.

Ya que me enfoque en esas dos funcionalidades, decidí no meter condicionales al sidebar para que se mostrarán todas las opciones y las vistas que tendrían el resto de usuarios, por lo que se ve la maquetación del todo el programa, modales, posiciones etc, aunque no cuente con todas sus funcionalidades, sin embargo en el back cree algunos cruds que no me dio tiempo a implementar como la creación de revisores por parte del admin.

# Comandos para iniciar el repositorio

1.  **Front-End**

- npm install
- ng serve -o

1.  **Back-End**

- npm install
- npm start run

# Credenciales

usuario: alrigthAdmin@gmail.com
clave: 123456789

# Tecnologías utilizadas

Front; Angular, TypeScript, Bootstrap 5, modales y librerías para tablas y acciones de bootstrap.
Back; NodeJs, MongoDB y Postman para las pruebas.

# Comentario

Reitero mis disculpas y agradezco la oportunidad, muchas gracias por su atención, y agradezco cualquier feedback de vuestra parte, sin mas que decir muchas gracias y quedo atento a cualquier cosa, sin embargo en caso de que vean potencial en mí, como creo que encajaría y aportaría al equipo de trabajo, estoy dispuesto a negociar por debajo del salario ofertado ya que como lo dije en la entrevista mi prioridad en este momento es poder crecer como profesional y persona.

Un saludo.
