import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { AuthProvider } from "../context/AuthProvider";
import { PublicLayout } from "../Components/empresa1/publictLayout";
import { Login } from "../Components/usuarios/login";
import { Logout } from "../Components/usuarios/Logout";
import { PrivateLayout } from "../Components/layout/PrivateLayout";
import { CrearClientes } from "../Components/cliente/CrearClientes";
import { EditarClientes } from "../Components/cliente/EditarClientes";
import { VerClientes } from "../Components/cliente/VerClientes";

export const Rutas = () => {
    return (
        <BrowserRouter>
            <AuthProvider>

                <section id="content" className="content">
                    <Routes>
                        <Route path='/' element={<PublicLayout />}>
                            <Route index element={<Login />} />
                            <Route path='login' element={<Login />} />
                        </Route>
                        <Route path='/social' element={<PrivateLayout />}>
                        <Route path="crear-cliente" element={<CrearClientes />} />
                            <Route path="editar-clientes/:id" element={<EditarClientes />} />
                            <Route path="ver-clientes/:id" element={<VerClientes />} />
                            {/* <Route index element={<ListaEmpresa />} />
                            <Route path="lista-paginas-web" element={<ListaEmpresa />} />
                            <Route path="lista/:busqueda" element={<ListaEmpresa />} />
                            <Route path="cargar-paginas-web" element={<CrearEmpresa />} /> */}


                            
                            {/* <Route path="salir" element={<Logout />} /> */}
                        </Route>
                    
                        <Route path='*' element={
                            <>
                                <h1>Error 404</h1>
                                <Link to="/">Volver a inicio</Link>
                            </>

                        } />
                    </Routes>
                </section>
            </AuthProvider>
        </BrowserRouter>
    );
}