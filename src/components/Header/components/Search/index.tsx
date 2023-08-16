import {FC} from 'react';
import SearchIcon from "../../../../shared/svg/SearchIcon";
import s from "./Search.module.scss"

const Search:FC = () => (
    <div className={s.inputWrapper}>
        <div className={s.iconWrapper}>
            <SearchIcon/>
        </div>
        <input className={s.input} type="text"/>
    </div>
)

export default Search;