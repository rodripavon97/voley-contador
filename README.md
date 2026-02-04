# VoleyPoints

Aplicación de marcador en vivo para partidos de voleibol con soporte para Android mediante Capacitor.

## Características

- 📱 Aplicación móvil para Android
- ⏱️ Cronómetro integrado
- 🏐 Dos modos de juego:
  - **Corto**: Sets a 15 puntos (ideal para desempates)
  - **Estándar**: Sets a 25 puntos (formato oficial)
- 💾 Persistencia de datos en localStorage
- 🎯 Lógica de dominio separada para cálculos del partido
- 🌙 Interfaz moderna con soporte para tema oscuro

## Requisitos

- Node.js (v18 o superior)
- pnpm
- Android Studio (para desarrollo en Android)
- JDK 17 o superior

## Instalación

```bash
# Instalar dependencias
pnpm install
```

## Desarrollo

### Modo Web

```bash
# Servidor de desarrollo
pnpm dev
```

### Modo Android

```bash
# Compilar y sincronizar con Android
pnpm android
```

Este comando:
1. Compila la aplicación web
2. Sincroniza los archivos con Capacitor
3. Abre Android Studio

### Otros comandos útiles

```bash
# Compilar para producción
pnpm build

# Solo sincronizar con Capacitor (sin abrir Android Studio)
pnpm sync

# Copiar archivos web a plataformas nativas
pnpm cap:copy

# Linter
pnpm lint
```

## Arquitectura

```
src/
├── domain/          # Lógica de dominio pura
│   ├── match.ts     # Reglas del partido y cálculos
│   └── gameMode.ts  # Configuración de modos de juego
├── hooks/           # React hooks personalizados
│   ├── useMatchState.ts
│   ├── useGameConfiguration.ts
│   ├── useMatchPersistence.ts
│   └── useTimer.ts
├── components/      # Componentes React
├── pages/          # Páginas de la aplicación
└── types/          # Definiciones de tipos TypeScript
```

## Capacitor

La aplicación utiliza Capacitor para crear una aplicación nativa de Android a partir del código web.

### Configuración

El archivo `capacitor.config.ts` contiene la configuración:

```typescript
{
  appId: 'com.voleypoints.app',
  appName: 'VoleyPoints',
  webDir: 'dist'
}
```

### Plugins instalados

- `@capacitor/core`: Core de Capacitor
- `@capacitor/android`: Plataforma Android
- `@capacitor-community/sqlite`: Base de datos SQLite (para futuras mejoras)

## Persistencia de datos

Actualmente, los datos se guardan en localStorage:

- **Configuración del juego**: Modo seleccionado (15 o 25 puntos)
- **Estado del partido**: Puntuación actual y sets completados

En futuras versiones se migrará a SQLite para mayor robustez.

## Tecnologías

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Capacitor 8
- React Router

## Licencia

MIT
