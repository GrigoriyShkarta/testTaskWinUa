import React, {FC} from 'react';
import s from "./Logo.module.scss";
import LogoIcon from "../../../../shared/svg/LogoIcon";

const Logo:FC = () => (
    <div className={s.logo}>
        <LogoIcon/>
        <h1 className={s.logo__title}>WinUa</h1>
    </div>
)

export default Logo;