import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyByIdAction } from './features/CompanyByIdReducer'
import { RootState } from './store'
import { useParams } from 'react-router-dom'

export default function CompanyById() {
  const companyId = useParams()
  const url = `https://api.github.com/orgs/${companyId.id}`

  const dispatch = useDispatch()
  function GetCompanyByid() {
    axios
      .get(url)
      .then((res) => {
        dispatch(companyByIdAction.getData(res.data))
      })
      .catch((error) => {
        dispatch(companyByIdAction.handleError(error))
      })
  }
  useEffect(() => {
    GetCompanyByid()
  }, [])

  const { companyById, loading, error } = useSelector((state: RootState) => state.companyById)

  if (error) {
    return <p> {error}</p>
  }
  if (loading) {
    return <p> loading ....</p>
  }
  return (
    <div>
      <p>{companyById?.description}</p>
      <span>{companyById?.login}</span>
      <h3>{companyById?.url}</h3>
      <h4>{companyById?.events_url}</h4>
    </div>
  )
}
