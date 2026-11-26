# Modelo DREAD

DREAD clasifica amenazas para compararlas y priorizarlas. El apunte emplea cinco factores entre 0 y 10 y calcula su media.

| Factor | Pregunta | 0 / 5 / 10 (orientativo según apunte) |
|---|---|---|
| Damage | ¿Qué daño provoca? | Ninguno / datos individuales / destrucción total |
| Reproducibility | ¿Qué tan repetible es? | Muy difícil / algunos pasos / muy fácil |
| Exploitability | ¿Qué recursos exige? | Especializados / herramientas disponibles / mínimos |
| Affected users | ¿A cuántos afecta? | Ninguno / algunos / todos |
| Discoverability | ¿Qué tan fácil es descubrirla? | Muy difícil / observación / evidente |

El apunte también usa 9 para detalles públicamente conocidos en descubribilidad.

$$DREAD=(D+R+E+A+D_{desc})/5$$

Ejemplo ficticio: daño 10, reproducibilidad 5, explotabilidad 5, usuarios afectados 10 y descubribilidad 5. Resultado: 7. La puntuación permite comparar, no representa una probabilidad porcentual.

> [!question]- Ejercicio: ¿qué resultado dan 5, 10, 5, 5 y 10?
> 35/5 = 7. Justifica cada valor antes de decidir el tratamiento.

Fuente: S5, pp. 26–29.
