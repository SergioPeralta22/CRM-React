import { useNavigate } from 'react-router-dom';

const Cliente = ({ cliente }) => {
    const { nombre, email, telefono, notas, id, empresa } = cliente;

    const navigate = useNavigate();

    return (
        <tr className='border hover:bg-gray-50'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p>
                    <span className='text-gray-800 upercase font-bold '>
                        Email:{' '}
                    </span>
                    {email}
                </p>
                <p>
                    <span className='text-gray-800 upercase font-bold '>
                        Tel:{' '}
                    </span>
                    {telefono}
                </p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button
                    type='button'
                    className='mt-2 bg-yellow-500 hover:bg-yellow-600 w-full p-2 text-xs uppercase block text-white font-bold rounded-xl'
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    ver
                </button>
                <button
                    type='button'
                    className='mt-2 bg-blue-600 hover:bg-blue-700 w-full p-2 text-xs uppercase block text-white font-bold rounded-xl'
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='mt-2 bg-red-600 hover:bg-red-700 w-full p-2 text-xs uppercase block text-white font-bold rounded-xl'
                >
                    eliminar
                </button>
            </td>
        </tr>
    );
};

export default Cliente;
