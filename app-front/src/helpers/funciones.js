export function calcularTiempoTranscurrido(fecha) {
  const fechaCreacion = new Date(fecha)
  const fechaActual = new Date()
  const diferenciaTiempo = fechaActual - fechaCreacion
  const diasTranscurridos = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24))
  const horasTranscurridas = Math.floor((diferenciaTiempo / (1000 * 60 * 60)) % 24)
  const diasTranscurridosTexto = diasTranscurridos >= 0 ? diasTranscurridos + 'd ' : ''
  const horasTranscurridasTexto = horasTranscurridas >= 0 ? horasTranscurridas + 'h' : ''
  return diasTranscurridosTexto + horasTranscurridasTexto
}
