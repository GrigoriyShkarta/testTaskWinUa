import {FC} from 'react';
import {navigateOptions} from "../../../../shared/constants";
import s from "./Navigate.module.scss"

const Navigate:FC = () => (
    <nav className={s.navigate}>
        <ul className={s.navigate__list}>
            {navigateOptions.map((nav, idx) =>
                <li className={s.navigate__list_item} key={idx}>
                    <a href="#">{nav}</a>
                </li>
            )}
        </ul>
    </nav>
)

export default Navigate;