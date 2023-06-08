import { StyleSheet, Text, FlatList, SafeAreaView} from 'react-native';
import React ,{ Component } from 'react';
import api from './src/Services/Api';
import Filme  from './src/Screen/Filme';



export default class App extends Component{

    constructor(props){
      super(props);
      this.state = {
        filmes: []
      }
    }

    async componentDidMount(){
      const response = await api.get('/filmes');
      this.setState({
        filmes: response.data
      });
    }
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <FlatList
          data={this.state.filmes}
          keyExtractor={item => item.id}
          renderItem={({item}) => <Filme data={item} />}
        />
      </SafeAreaView>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
