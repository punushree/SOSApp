import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View, Image, Alert, Platform, TouchableHighlight, ScrollView, Button, TouchableOpacity} from 'react-native';
import flatListData from '../../ui/data/flatListData';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AddModal from '../../ui/AddModal';


class FlatListItem extends Component {
    constructor(props) {
        super(props);   
        this.state = {
            activeRowKey: null
        };          
    }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'gray',
            marginVertical: 10,
            borderRadius: 20,
            flexDirection: 'row',
            justifyContent: 'space-around',

          }}>

            <View
            style={{flexDirection: 'column'}}>
          <Text style={styles.flatListItem}>{this.props.item.name}</Text>
          <Text style={styles.flatListItem}>{this.props.item.PhoneNumber}</Text>
          </View>

          <View style={styles.avatarContainer}>
          <Image
          source={{uri: this.props.item.imageUrl.toString()}}
          style={{width: 20, height: 20, margin: 5}}></Image>
         
          
          </View>
        </View>
        
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flatListItem: {
    color: 'white',
    padding: 10,
    fontSize: 16,
  },

  avatarContainer: {        
    backgroundColor: '#D9D9D9',
    borderRadius: 100,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',    
    alignSelf: 'center',
    
  },
});

export default class ContactScreen extends Component {

    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this._onPressAdd = this._onPressAdd.bind(this);        
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
       
       
    }
    _onPressAdd () {
        // alert("You add Item");
        this.refs.addModal.showAddModal();
    }

  render() {
    return (
      <View style={{flex: 1, width: '100%', alignSelf: 'center', backgroundColor: 'black', height: '100%'}}>
          <View style={{
                backgroundColor: '#52057B', 
                flexDirection: 'row',
                justifyContent:'flex-end',                
                alignItems: 'center',
                height: 64,
                 }}>
                <TouchableHighlight 
                    style={{marginRight: 10}}
                    underlayColor='#52057B'
                    onPress={this._onPressAdd}
                    >
                  <FontAwesome 
                    name="user-o"
                    color={'#fff'}
                    size={30}
                />
            </TouchableHighlight>
            </View>
            <ScrollView>
            <View style={{width: '85%', alignSelf: 'center', marginVertical: 20}}>
        <FlatList
          data={flatListData}
          renderItem={({item, index}) => {
            //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`);
            return <FlatListItem item={item} index={index}></FlatListItem>;
          }}></FlatList>
          </View>
          </ScrollView>
          <AddModal ref={'addModal'} parentFlatList={this} >

            </AddModal>
      </View>
    );
  }
}
