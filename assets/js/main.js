$(document).ready(function() {
    //consumir api de digimon
    $.ajax({
        url: "https://digimon-api.vercel.app/api/digimon",
        type: "GET",
        dataType: "json",
        success: function(data) {
            console.log(data);
            let html = "";
            data.forEach(digimon => {
                html += `
                    <div class="col-12 col-md-4 col-lg-3 col-xl-2">
                        <div class="card mt-4">
                            <div class="card-header">
                                <h3 class="nombre-digimon">${digimon.name}</h3>
                            </div>
                            <div class="card-body">
                                <img src="${digimon.img}" class="img-fluid">
                                <p>${digimon.level}</p>
                                <button type="button" class="btn btn-info detalles-modal">Detalles</button>
                            </div>
                        </div>
                    </div>
                `;
            });
            $("#digimons").html(html);
        },
        error: function(error) {
            console.log(error);
        }
    });

    //click en el h3 de clase nombre-digimon y desplegar modal con datos del digimon
    $(document).on("click", ".nombre-digimon", function() {
        let nombre = $(this).text();
        $.ajax({
            url: "https://digimon-api.vercel.app/api/digimon/name/" + nombre,
            type: "GET",
            dataType: "json",
            success: function(data) {
                console.log(data);
                let html = "";
                data.forEach(digimon => {
                    html += `
                        <div class="card mt-4">
                            <div class="card-header">
                                <h3 class="nombre-digimon">${digimon.name}</h3>
                            </div>
                            <div class="card-body">
                                <img src="${digimon.img}" class="img-fluid">
                                <p>${digimon.level}</p>
                            </div>
                        </div>
                    `;
                });
                $("#digimons").html(html);
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});