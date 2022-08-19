import { createContext, useContext, useState } from "react";
// es una libreria que esta escrita sobre fetch appi , le llaman wrapper
import axios from "axios";

const LetrasContext = createContext();
const LetrasProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');
    const [letra, setLetra] = useState('');
    const [cargando, setCargando] = useState(false)

    const  busquedaLetra = async (busqueda) => {
        try {
            setCargando(true)
            const {artista, cancion} = busqueda
            const url  = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
            // se manda a llamar asi a axios en este tipo de fetch se hace con 1
            // ya que en el de fetch es uno como json y luego el otro con los datos
            // tambien podemos extraer los datos directamente 
            const {data} = await axios.get(url);
            setLetra(data.lyrics);
            setAlerta('');
        } catch (error) {
            setAlerta('Cancion no encontrada')
        }
        setCargando(false)
    }
    return(
        <LetrasContext.Provider
            value={{
                alerta,
                setAlerta,
                busquedaLetra,
                letra,
                cargando
            }}
        >
            {children}
        </LetrasContext.Provider>
    )
}

export {
    LetrasProvider,
};

export default LetrasContext