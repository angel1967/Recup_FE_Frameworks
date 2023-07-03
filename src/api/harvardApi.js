// Aqui utilizare el API para obtener la info de Harvard Art Museums
// Miguel Castaneda Junio 27, 2023
// - Uso de API HTTP como fuente de datos e información para la app. 
// Puede seleccionarse cualquiera del listado: 
// https://github.com/public-apis/public-apis - Traemos solo algunos registros del total

const API_KEY = '0c81f590-33b2-4b6b-bd16-83dc26f14a4a';
const BASE_URL = 'https://api.harvardartmuseums.org';


export async function fetchImages() {
    try {
        const response = await fetch(
            `${BASE_URL}/image?apikey=${API_KEY}&size=200000`
        );
        const data = await response.json();


        const filteredRecords = data.records.filter(
            (record) => (
                record.idsid === 43181372 ||
                record.idsid === 43181273 ||
                record.idsid === 43181207 ||
                record.idsid === 43181369 ||
                record.idsid === 43181330 ||
                record.idsid === 20668593 ||
                record.idsid === 43181207 ||
                record.idsid === 43181450 ||
                record.idsid === 43181478 ||
                record.idsid === 20669977 ||
                record.idsid === 43181514 ||
                record.idsid === 44645418 ||
                record.idsid === 43183700 ||
                record.idsid === 43183001
            )
        );

        return filteredRecords;

    } catch (error) {
        console.log('Error:', error);
        throw error;
    }
}
