import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

let dialogData = [
    {name: "Kirik", id: 1},
    {name: "Dimik", id: 2},
    {name: "max", id: 3},
    {name: "dima", id: 4},
    {name: "sasha", id: 5}
]
let messageData = [
    {message: "hello"},
    {message: "Как дела придурок?)"},
    {message: "Игноришь?"}
]
type DialogItemPropsType = {
    name: string
    id: number
}
const DialogItem = (props: DialogItemPropsType) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
type MessagePropsType = {
    message: string
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
                <DialogItem name={dialogData[2].name} id={dialogData[2].id}/>
                <DialogItem name={dialogData[3].name} id={dialogData[3].id}/>
                <DialogItem name={dialogData[4].name} id={dialogData[4].id}/>
            </div>
            <div className={s.message}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
            </div>
        </div>
    )
}


export default Dialogs;
