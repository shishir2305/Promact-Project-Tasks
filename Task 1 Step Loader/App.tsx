import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import StepLoaderAnimated from './StepLoaderAnimated'

const App = () => {
  return (
    <View>
      <SafeAreaView>
      <Text>Step Loader</Text>
      <StepLoaderAnimated/>
      </SafeAreaView>
    </View>
  )
}

export default App