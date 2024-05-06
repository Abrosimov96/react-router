import {Adidas} from './components/pages/Adidas';
import {Puma} from './components/pages/Puma';
import {Abibas} from './components/pages/Abibas';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from './components/pages/Error404';
import {S} from './components/pages/_styles';
import {Model} from './components/Model';

const PATH = {
    ADIDAS: '/adidas',
    ABIBAS: '/abibas',
    PUMA: '/puma',
    ERROR: '/error404'
} as const


function App() {
    return (
        <div>
            <S.HeaderWrapper>
                <h1>HEADER</h1>
            </S.HeaderWrapper>
            <S.BodyWrapper >
                <S.Navigation >
                    <S.NavWrapper>
                        <NavLink
                        to={PATH.ADIDAS}>ADIDAS</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                        to={PATH.PUMA}>PUMA</NavLink>
                    </S.NavWrapper>
                    <S.NavWrapper>
                        <NavLink
                        to={PATH.ABIBAS}>ABIBAS</NavLink>
                    </S.NavWrapper>
                </S.Navigation>
                <S.ContentWrapper>
                    <Routes>
                        <Route path="/" element={<Navigate to={PATH.ADIDAS}/>}/>

                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>
                        <Route path={`:model/:id`} element={<Model />}/>

                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        <Route path="/*" element={<Error404/>}/>
                    </Routes>
                </S.ContentWrapper>
            </S.BodyWrapper>
            <S.FooterWrapper>abibas 2023</S.FooterWrapper>
        </div>
    );
}

export default App;
