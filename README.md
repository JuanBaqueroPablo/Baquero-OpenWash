# Baquero-OpenWash

Sistema de gestión de turnos para Lava Autos Open Wash.

## Estructura

```
Baquero-OpenWash/
├── Frontend/
├── Backend/
│   ├── index.js
│   ├── package.json
│   └── src/
│       ├── app.js
│       ├── controllers/
│       ├── services/
│       ├── repositories/
│       ├── models/
│       ├── routes/
│       ├── middlewares/
│       ├── responses/
│       ├── exceptions/
│       ├── enums/
│       └── utils/
└── README.md
```

## Instalación

```bash
cd Backend
npm install
```

## Iniciar el servidor

```bash
node index.js
```

El servidor corre en http://localhost:3000

## Endpoints disponibles

| Método | Ruta              | Acción            |
|--------|-------------------|-------------------|
| GET    | /api/turnos       | Obtener todos     |
| GET    | /api/turnos/:id   | Obtener por ID    |
| POST   | /api/turnos       | Crear turno       |
| PUT    | /api/turnos/:id   | Modificar turno   |
| DELETE | /api/turnos/:id   | Eliminar turno    |
