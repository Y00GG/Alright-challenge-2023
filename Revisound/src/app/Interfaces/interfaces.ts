

export interface Ilogin {
  correo: string;
  clave: string;
}

export interface IResLogin {
  usuario: Usuario;
  token:   string;
}

export interface Usuario {
  _id:      string;
  nombre:   string;
  apellido: string;
  correo:   string;
  rol:      string;
}

export interface IRESTLogs {
  id:          string;
  fecha:       string;
  tipo:        string;
  descripcion: string;
  estado:      string;
  usuario:     string;
  rol:         string;
}
