import React from 'react'
import { TextInput, View } from 'react-native'
import styles from './SearchBar.styles'

const SearchBar = ({ onSearch }) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Ara...'
                onChangeText={ onSearch }
            />
        </View>
    )
}

export default SearchBar