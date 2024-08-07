import { useState } from 'react'
import { Container, Avatar, Form} from './styles'
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiMail, FiUser, FiLock, FiCamera } from 'react-icons/fi'

import {useAuth} from '../../hooks/auth'
import avatarPlaceholder from '../../assets/avatar_placeholder.svg'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { api } from '../../services/api'

export function Profile (){
   
    const { user, updateProfile } = useAuth()

    const [ name, setName ] = useState(user.name)
    const [ email, setEmail ] = useState(user.email)
    const [ passwordOld, setPassworldOld ] = useState()
    const [ passworldNew, setPassworldNew ] = useState()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder

    

    const [ avatar, setAvatar ] = useState(avatarUrl)
    const [ avatarFile, setAvatarFile ] = useState(null)

    async function handleUpdate(){
        const user = {
            name,
            email,
            passworld: passwordOld,
            passwordOld: passworldNew
        }

        await updateProfile({user, avatarFile})
    }

    function handleChangeFile(event){

        const file = event.target.files[0]
        setAvatarFile(file)

        const imagenPreview = URL.createObjectURL(file)
        setAvatar(imagenPreview)
    }

    return (
        <Container>
            <header>
                <Link to={"/"}>
                
                    <FiArrowLeft/>
                    <ButtonText title={"Voltar"}/>
                </Link>
            </header>
            
            <Form>

                <Avatar>
                    <img src={avatar} alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input 
                            id='avatar'
                            type="file" 
                            onChange={handleChangeFile}
                        />
                    </label>
                    </Avatar>
               
                        <Input 
                            icon={FiUser} 
                            type="text"
                            value={name}
                            onChange={ e => setName( e.target.value)}
                        />

                        <Input 
                            icon={FiMail} 
                            type="text"
                            value={email}
                            onChange={ e => setEmail( e.target.value)}
                        />

                        <Input icon={FiLock} 
                            placeholder="Senha Atual" 
                            type="password"
                            onChange={ e => setPassworldOld( e.target.velue)}
                        />

                        <Input icon={FiLock} 
                            placeholder="Nova Senha" 
                            type="password"
                            onChange={ e => setPassworldNew( e.targw)}
                        />

                        <Button 
                            title={"Salvar"}
                            onClick={handleUpdate}
                        />
                </Form>
        </Container>
    )
}