import React from 'react'
import posed, { PoseGroup } from 'react-pose'
import Layout from './src/components/layout'

const Transition = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 },
})

export const replaceComponentRenderer = ({ props, ...other }) => {
  const { component } = props.pageResources
  return (
    <Layout>
      <PoseGroup>
        <Transition key={props.location.key}>
          {React.createElement(component, props)}
        </Transition>
      </PoseGroup>
    </Layout>
  )
}
