import { createContext } from 'react'
import api from '../services'

export const ApiContext = createContext([])

export const ApiProvider = ({children}) => {
    //let token = localStorage.getItem('token')

    async function createsClients(data){
        try {
            const res = await api.post('/clients/', data)
            return res
        } catch (error) {
            return error
        }
    }

    async function login(data){
        try {
            const res = await api.post('/login', data)
            return res
        } catch (error) {
            return error
        }   
    }   

    async function createsTasks(data, userId){
        try {
            const res = await api.post('/tasks', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    }  

    async function listTasks(data, userId){
        try {
            const res = await api.get('/tasks', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    } 

    async function updateTasks(data, userId){
        try {
            const res = await api.patch('/tasks', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    } 

    async function deleteTasks(data, userId){
        try {
            const res = await api.delete('/tasks', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    }

    async function createsLists(data, userId){
        try {
            const res = await api.post('/lists', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    }

    async function listLists(data, userId){
        try {
            const res = await api.get('/lists', {data,userId,token})
            return res
        } catch (error) {
            return error
        }
    }

    return(
        <ApiContext.Provider
            value={{createsClients,login,createsTasks,createsLists,updateTasks,deleteTasks,listTasks,listLists}}
        >
            {children}
        </ApiContext.Provider>
    )
}