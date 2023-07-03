// Componente Tarea Aplicación Dinamica SearchBar //
// al cambio de estado onChange, presenta la variable(texto) en el campo de entrada //

function SearchBar({ search, doSearch }) {
    return (
        <div className="container">
            <input
                value={search}
                onChange={(event) => {
                    doSearch(event.target.value);
                }}
                className="form-control mb-2"
                placeholder="Search Card Title" />
        </div>
    );
}
export default SearchBar;