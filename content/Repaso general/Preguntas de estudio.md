# Preguntas de estudio

Responde antes de desplegar la solución.

## Semana 5

> [!question]- ¿Qué distingue amenaza de vulnerabilidad?
> La amenaza puede causar daño; la vulnerabilidad es una debilidad que puede aprovechar.

> [!question]- ¿Qué pilar CIA falla cuando un servicio no responde?
> Disponibilidad.

> [!question]- Probabilidad 4 e impacto 3: ¿qué riesgo resulta?
> 12, según la matriz 1–4 del apunte.

> [!question]- ¿Cuáles son las cuatro fases de gestión?
> Análisis, clasificación, reducción y control.

> [!question]- ¿Qué diferencia hay entre log y monitoreo?
> El log conserva eventos; el monitoreo observa y analiza actividad para detectar problemas.

> [!question]- ¿Qué significa que un componente tenga CVE?
> Tiene una vulnerabilidad identificada; se debe evaluar exposición y tratamiento.

> [!question]- DREAD: 10,5,5,10,5. ¿Resultado?
> 7.

> [!question]- ¿Qué se hace después de desplegar un parche?
> Validar funcionamiento y reducción del riesgo, monitorear y documentar.

## Semana 6

> [!question]- ¿Autenticación equivale a autorización?
> No. Identifica al usuario; la autorización verifica permisos.

> [!question]- ¿Base64 protege secretos?
> No, solo cambia su representación.

> [!question]- ¿Por qué parametrizar SQL?
> Separa instrucciones SQL de datos externos.

> [!question]- ¿Qué función usarías para almacenar contraseñas?
> Argon2 o bcrypt con sal y parámetros adecuados.

> [!question]- ¿Cómo prevenir XXE?
> Deshabilitar entidades externas y DTD innecesarios, actualizar y restringir recursos.

> [!question]- ¿Qué distingue diseño inseguro de error de implementación?
> El primero carece de controles adecuados desde el diseño; el segundo implementa mal un control.

## Semana 7

> [!question]- ¿Qué diferencia XSS almacenado de reflejado?
> El almacenado persiste; el reflejado vuelve inmediatamente en una respuesta.

> [!question]- ¿Qué API usar para mostrar texto externo en DOM?
> textContent, en vez de innerHTML.

> [!question]- ¿Por qué pickle no debe procesar datos no confiables?
> Puede ejecutar comportamiento durante la reconstrucción.

> [!question]- ¿Ocultar un botón impide acceso a una API?
> No. El servidor debe verificar permisos.

> [!question]- ¿Qué categoría 2021 incluye XSS?
> A03:2021, inyección.

> [!question]- ¿Qué categoría 2021 incluye XXE?
> A05:2021, configuración de seguridad incorrecta.
