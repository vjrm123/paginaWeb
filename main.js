const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
});

const typed = new Typed('.probar', {
    strings: ["UCSP"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

    const companeros = [
        { name: "Victor Juan Ramos Mamani", url: "https://vjrm123.github.io/paginaWeb/" },
        { name: "Sergio Alejandro Paucar Cruz", url: "https://sergio-alejandro-paucar-cruz.web.app/" },
        { name: "Frank Eduardo Calcina Arias", url: "https://frankeduardocalcinaarias.000webhostapp.com/" },
        { name: "Ana Sánchez", url: "/perfil/ana-sanchez" },
        { name: "Pedro Fernández", url: "/perfil/pedro-fernandez" }
    ];
    
    const docentes = [
        { name: "Ernesto Cuadros", url: "https://ecuadros.blogspot.com/" },
        { name: "Lucía Ramírez", url: "/perfil/lucia-ramirez" },
        { name: "Miguel Serrano", url: "/perfil/miguel-serrano" },
        { name: "Sofía Gutiérrez", url: "/perfil/sofia-gutierrez" },
        { name: "Javier Morales", url: "/perfil/javier-morales" }
    ];

    function mostrarCompañeros() {
            var companerosList = document.getElementById("compañeros-lista");
            var docentesList = document.getElementById("docentes-lista");
        
            // Limpiar la lista de compañeros antes de agregar los nuevos
            companerosList.innerHTML = "";
        
            // Agregar los nombres de compañeros a la lista como enlaces
            for (var i = 0; i < companeros.length; i++) {
            var li = document.createElement("li");
            li.className = "nombre-item"; // Agrega la clase CSS aquí
        
            var link = document.createElement("a");
            link.href = companeros[i].url;
            link.textContent = companeros[i].name;
            link.className = "nombre-link"; // Agrega la clase CSS aquí
            link.target = "_blank";
            link.onclick = function(event) {
                console.log("Hiciste clic en el nombre: ", this.textContent);
                event.preventDefault();
                window.open(this.href, '_blank');
            };
        
            li.appendChild(link);
            companerosList.appendChild(li);
            }
        
            if (companerosList.style.display === "none") {
            companerosList.style.display = "block";
            docentesList.style.display = "none";
            } else {
            companerosList.style.display = "none";
            }
        }
    
    function mostrarDocentes() {
        var companerosList = document.getElementById("compañeros-lista");
        var docentesList = document.getElementById("docentes-lista");

        docentesList.innerHTML = "";
        for (var i = 0; i < docentes.length; i++) {
        var li = document.createElement("li");
        li.className = "nombre-item";
    
        var link = document.createElement("a");
        link.href = docentes[i].url;
        link.textContent = docentes[i].name;
        link.className = "nombre-link"; // Agrega la clase CSS aquí
        link.target = "_blank";
        link.onclick = function() {
            console.log("Hiciste clic en el nombre: ", this.textContent);
        };
    
        li.appendChild(link);
        docentesList.appendChild(li);
        }
    
        if (docentesList.style.display === "none") {
        docentesList.style.display = "block";
        companerosList.style.display = "none";
        } else {
        docentesList.style.display = "none";
        }
    }

