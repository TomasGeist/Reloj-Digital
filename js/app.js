console.log("esta funcionando")

const dateLive = ()=>{
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Lun', 'Mar', 'Mier', 'Jue', 'Vier', 'Sab', 'Dom'];
    let diaSemana = dias[fecha.getDay()]
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()]
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('reloj').classList.toggle('animar');

}   

const formatoHora = (fecha)=>{
    if(fecha < 10)
        fecha = '0' + fecha;
        return fecha;
       
}

setInterval(dateLive, 1000);

