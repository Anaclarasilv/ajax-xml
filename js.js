const xmlURL = 'sitemap.xml';

function buscarXML(){ 
    fetch(xmlURL)

    .then(Response=> Response.text())
    .then(data => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(data, 
        "application/xml");
        let noticias = xml.getElementsByTagName("url");
        let manchetesContainer =document.getElementById
         ("machetes");
            manchetesContainer.innerHTML = "";
        
            for(let i = 0; i < noticias.length; i++){
                let loc = noticias[i].getElementsByClassName
                ("loc")[0].textContent;
                let data_publi_elemnt = noticias[i].
                getElementsByTagName("publication._date")[0];
                let data_publi = data_publi_elemnt ?
                data_publi_elemnt.textContent: 'data indisp.';

                let titulo_element = noticias[i]
                getElementsByTagName("publication._date")[0];
                let titulo = titulo_element ? titulo_element.
                textContent : 'titulo_indisponivel';
                 let montadiv = `
                 <div class ='noticias'> 
                  <h2>${titulo}</h2> 
                  <p>publicado em  ${data_publi}</p>
                  <a href='${loc}' target='_blank'>
                  leia mais</a><hr>
                 `;
                 manchetesContainer.innerHTML += montadiv;
            }
    }).catch(Error => {
        console.error('erro ao carregar o xml', Error);
    });
}
window.onload = buscarXML;


    
