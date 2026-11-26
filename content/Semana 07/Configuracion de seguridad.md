# Configuración de seguridad incorrecta

A6:2017 y A05:2021. Ocurre cuando servidores, aplicaciones, bibliotecas o plataformas conservan configuraciones inseguras.

| Configuración insegura | Alternativa |
|---|---|
| Credenciales predeterminadas | Credenciales únicas y robustas |
| Servicios innecesarios activos | Deshabilitar y restringir |
| Directorios o repositorios expuestos | Restringir acceso y publicar solo archivos necesarios |
| Errores detallados al usuario | Mensajes genéricos y registro interno |
| Componentes sin mantenimiento | Inventario y parchado |
| Permisos excesivos | Privilegio mínimo |

La detección requiere revisiones de configuración, pruebas de acceso y verificación de entornos. Las herramientas del apunte incluyen ScoutSuite (cloud), Aqua Security (contenedores) y CIS-CAT (configuración según benchmarks). No reemplazan una revisión contextual.

Relaciona con [[Hardening y parchado]] y [[Registro y monitoreo]].

Fuente: S7, pp. 16–19, 30–31.
