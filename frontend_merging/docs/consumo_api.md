# Protocolo de Consumo de API Simulada

## 1. Introducción
Este documento describe el protocolo que seguirá el **frontend** para consumir la API expuesta por el equipo de **backend**.  
El objetivo es definir un estándar común para el uso de **fetch** (o **axios** si se decide), manejo de promesas, y la estructura esperada en las respuestas.

---

## 2. Tecnologías a utilizar
- **fetch API** (nativa en navegadores modernos).
- Alternativamente, se podrá usar **axios** en caso de necesitar:
  - Cancelación de requests.
  - Interceptores de peticiones/respuestas.
  - Compatibilidad con navegadores más antiguos.

---

## 3. Convenciones generales
- Todos los requests se harán con **JSON** en el `body` y con cabecera `Content-Type: application/json`.
- Las respuestas del backend serán interpretadas en formato JSON.
- Cada request deberá manejar tanto el **estado exitoso** como los **errores**.

---

## 4. Manejo de Promesas
### 4.1 Con `fetch`
```javascript
fetch("https://api.miapp.com/users", {
  method: "GET",
  headers: { "Content-Type": "application/json" }
})
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log("Usuarios:", data);
  })
  .catch(error => {
    console.error("Error al consumir la API:", error);
  });
````

### 4.2 Con `async/await`

```javascript
async function getUsers() {
  try {
    const response = await fetch("https://api.miapp.com/users");
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    const data = await response.json();
    console.log("Usuarios:", data);
  } catch (error) {
    console.error("Error al consumir la API:", error);
  }
}
```

### 4.3 Con `axios`

```javascript
import axios from "axios";

async function getUsers() {
  try {
    const { data } = await axios.get("https://api.miapp.com/users");
    console.log("Usuarios:", data);
  } catch (error) {
    console.error("Error al consumir la API:", error);
  }
}
```

---

## 5. Ejemplo de Request/Response con mocks de backend

### 5.1 Registro de Usuario

**Request:**

```http
POST /auth/register
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "correo": "juan@example.com",
  "rol": "estudiante",
  "password": "123456"
}
```

**Response (200 – Éxito):**

```json
{
  "success": true,
  "message": "Usuario registrado correctamente",
  "user": {
    "id": 1,
    "nombre": "Juan Pérez",
    "correo": "juan@example.com",
    "rol": "estudiante"
  }
}
```

**Response (400 – Error):**

```json
{
  "success": false,
  "message": "El correo ya está en uso"
}
```

---

### 5.2 Login de Usuario

**Request:**

```http
POST /auth/login
Content-Type: application/json

{
  "correo": "juan@example.com",
  "password": "123456"
}
```

**Response (200 – Éxito):**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "nombre": "Juan Pérez",
    "rol": "estudiante"
  }
}
```

**Response (401 – Credenciales incorrectas):**

```json
{
  "success": false,
  "message": "Credenciales inválidas"
}
```

---

## 6. Estructura recomendada del frontend

El frontend debe mantener un archivo de utilidades para consumir la API:

```
/js/api/
  auth.js   -> login, registro
  users.js  -> CRUD de usuarios
/js/main.js -> inicialización
```

Ejemplo en `/js/api/auth.js`:

```javascript
export async function login(correo, password) {
  const response = await fetch("/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ correo, password })
  });
  return response.json();
}
```