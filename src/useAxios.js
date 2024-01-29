import axios from 'axios'
import { useState, useEffect } from 'react'

// axios.defaults.baseURL = "https://react-mini-projects-api.classbon.com"

const instance = axios.create({
    baseURL: "https://react-mini-projects-api.classbon.com"
})

export function useAxios(axiosParams) {
    const [response, setResponse] = useState([]);
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData();
    }, [axiosParams.url])

    async function fetchData() {
        try {
            const result = await instance.request(axiosParams)
            setResponse(result.data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return [response, error, loading]
}
