import React, { FC } from 'react'

interface Props {
  providers: FC[]
}

const createProvidersTree = (providers: FC[], children: React.ReactNode): JSX.Element | React.ReactNode => {
  if (providers.length > 0) {
    const NewProvider = providers.pop()
    return (
      <NewProvider>
        {createProvidersTree(providers, children)}
      </NewProvider>
    )
  }
  return children
}

export const WrapProviders: FC<Props> = ({ providers, children }) => {
  return (
    <>
      {createProvidersTree(providers, children)}
    </>
  )
}

export default WrapProviders