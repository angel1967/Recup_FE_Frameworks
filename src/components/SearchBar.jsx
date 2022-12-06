// Componente Tarea Aplicación Dinamica SearchBar //
// al cambio de estado onChange, presenta la variable(texto) en el campo de entrada //

function SearchBar({search , doSearch}) {
    return (
    <div className="container pt-3"> 
         <input 
         value={search}
         onChange={(event) => {
            doSearch(event.target.value);
         }}
         className="form-control mb-2" 
         placeholder="Search Card Text" />
    </div>
    );
}
export default SearchBar;