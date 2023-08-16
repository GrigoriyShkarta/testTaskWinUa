import {FC} from 'react';
import {Logo, Navigate, Search} from "./components";
import s from "./Header.module.scss"

const Header:FC = () => (
    <header className={s.header}>
        <Logo/>
        <div className={s.navigateBlock}>
            <Navigate/>
            <Search/>
        </div>
    </header>
);

export default Header;