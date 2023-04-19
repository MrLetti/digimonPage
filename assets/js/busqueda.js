$(document).ready(function() {
    $("#botonBuscar").on("click", function() {
        if($("#digimonName").val() === "") {
            alert("Debe ingresar un nombre");
            return
        }
        $.ajax({
            url: "https://digimon-api.vercel.app/api/digimon/name/" + $("#digimonName").val(),
            type: "GET",
            dataType: "json",
            success: function(data) {
                let html = "";
                html+= `
                <div class="col-12 col-md-4 col-lg-3 col-xl-2 text-center">
                <div class="card mt-4">
                    <div class="card-header">
                        <h3>${data[0].name}</h3>
                    </div>
                    <div class="card-body">
                        <img src="${data[0].img}" class="img-fluid">
                        <h2>${data[0].level}</h2>
                    </div>
                </div>
            </div>
         `;
                $("#digimon").html(html);
            },
            error: function(error) {
                alert("Error al buscar el digimon");
            }
        });
    });
});