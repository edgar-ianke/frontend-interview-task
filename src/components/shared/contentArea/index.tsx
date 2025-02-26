import s from './contentArea.module.css'

type Props = {
    text: string
}

export const ContentArea = ({text}: Props) => {
    return <p className={s.content}>{text}</p>
}