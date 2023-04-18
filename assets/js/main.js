//jquery

$(document).ready(function() {
    //consumir api sin ajax con fetch
    fetch('https://digimon-api.vercel.app/api/digimon')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let html = '';
            data.forEach(digimon => {
                html += `
                    <div class="col-md-4">
                        <div class="card mt-4">
                            <div class="card-header">
                                <h3>${digimon.name}</h3>
                            </div>
                            <div class="card-body">
                                <p>${digimon.level}</p>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#digimons').html(html);
        })
});