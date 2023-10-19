import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { companyAction } from './features/companyReducer'
import { RootState } from './store'

export default function CompanyDetails() {
  const url = 'https://api.github.com/organizations'
  const dispatch = useDispatch()

  useEffect(() => {
    function fetchDate() {
      axios
        .get(url)
        .then((res) => {
          dispatch(companyAction.getData(res.data))
        })
        .catch((error) => console.log(error))
    }
    fetchDate()
  }, [])

  const { companysList, loading, error } = useSelector((state: RootState) => state.company)
  if (error) {
    return <p>{error}</p>
  }
  if (loading) {
    return <p>loading...</p>
  }
  return (
    <div>
      {companysList.map((company) => {
        return (
          <div key={company.login}>
            <p>{company.login}</p>
          </div>
        )
      })}
    </div>
  )
}
