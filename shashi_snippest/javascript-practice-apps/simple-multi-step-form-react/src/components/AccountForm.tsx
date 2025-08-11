import React from 'react'
import FormWrapper from './FormWrapper';

type AccountData = {
    email: string,
    password: string
}

type AccountFormProps = AccountData & {
    updateFields: (fields: Partial<AccountData>) => void
}

const AccountForm = ({email, password, updateFields}: AccountFormProps) => {
  return (
    <FormWrapper title="Account">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => updateFields({email: e.target.value})} autoFocus required/>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => updateFields({password: e.target.value})} required/>
    </FormWrapper>
  )
}

export default AccountForm;