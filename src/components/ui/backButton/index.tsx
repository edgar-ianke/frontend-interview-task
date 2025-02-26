import { useNavigate } from "react-router"
import chevronLeft from '../../../assets/chevron-left.svg'
import s from './backButton.module.css'

export const BackButton = () => {
    const navigate = useNavigate()
    const handleBack = () => {
        navigate(-1)
    }
    return <div className={s.wrapper} onClick={handleBack}>
        <img src={chevronLeft} alt='chevron-left' />
        {/* {Дублирование обработчика для скрин ридеров} */}
        <button className={s.button} onClick={handleBack}>Back</button>
    </div>
}