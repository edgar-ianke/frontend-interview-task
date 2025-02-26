import s from './title.module.css'
type Props = {
    name: string,
}
export const Title = ({name}: Props) => {
    return <h1 className={s.title}>{name}</h1>
}