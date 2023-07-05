import { createContext, useState } from 'react'
import { useToast } from '@chakra-ui/react'
import api from '../services'
export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    let token = localStorage.getItem('token')
    const toast = useToast()
    const [lists,setLists] = useState([])

    async function createsClients(data){
        try {
            const res = await api.post('/clients/', data)
            return res
        } catch (error) {
            if(error.response.status === 400){
                toast({title:'Invalid field', status: 'error', duration: 4000})
            }
        }
    }

    async function loginClients(data){
        try {
            const res = await api.post('/login/', data)
            return res
        } catch (error) {
            return error
        }   
    }   

    async function createsTasks(data){
        try {
            const res = await api.post('/tasks/',data,
            {
                headers:{
                    'Authorization':`token ${token}`
                }
            })
            return res
        } catch (error) {
            return error
        }
    }  

    async function listTasks(data, userId){
        try {
            const res = await api.get('/tasks/', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    } 

    async function updateTasks(data, userId){
        try {
            const res = await api.patch('/tasks/', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    } 

    async function deleteTasks(data, userId){
        try {
            const res = await api.delete('/tasks/', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    }

    async function createsLists(data){
        try {
            const res = await api.post('/lists/',data,{
                headers:{
                    'Authorization': `token ${token}`
                }
            })
            return res
        } catch (error) {
            return error
        }
    }

    async function listLists(){
        try {
            const res = await api.get('/lists/')
            return res
        } catch (error) {
            return error
        }
    }

    return(
        <ApiContext.Provider
            value={{createsClients,loginClients,createsTasks,createsLists,updateTasks,deleteTasks,listTasks,listLists,lists,setLists}}
        >
            {children}
        </ApiContext.Provider>
    )
}