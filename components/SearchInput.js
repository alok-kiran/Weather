import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChangeText = (newLocation) => {
    console.log(newLocation)
    this.setState({
      text: newLocation
    })
  }

  handleSubmitEditing = () => {
    const { onSubmit } = this.props
    const { text } = this.state
    if (!text) return
    onSubmit(text)
    this.setState({ text: '' })
  }

  render() {
    const { placeholder = '' } = this.props
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          placeholder={placeholder}
          placeholderTextColor='white'
          underlineColorAndroid='transparent'
          style={styles.textInput}
          clearButtonMode='always'
          value={this.state.text}
          onChangeText={(text) => this.handleChangeText(text)}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 41,
    width: 300,
    marginTop: 20,
    backgroundColor: '#444',
    marginHorizontal: 40,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
  }
})
