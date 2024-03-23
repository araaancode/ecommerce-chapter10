import React from 'react'
import Input from './Input'

export default { title: 'Input' }

export const text = () => <Input type="text" placeholder="name..." />
export const email = () => <Input type="email" placeholder="email..." />