import { ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { THEME } from '../../theme/colors';
import { Profiles } from '../../constants/Profiles';
import { stories as Stories } from '../Story/stories';
import { Messages } from '../Message/Messages';

export default function MainContent() {
  return (
    <View style={styles.container}>
      <Text>Stories</Text>
      <View style={styles.storiesContainer}>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Profiles.map(({id, nombre,  img})=>
              <Stories nombre={nombre} img={img}/>
          )}
        </ScrollView>
      </View>
      <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuSelected}>
            <Text style={styles.menuText}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuText}>Group</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuText}>Chats</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.chatsContainer}>
        <ScrollView>
        {Profiles.map(({id, nombre,  img, message, messages})=>
              <Messages nombre={nombre} img={img} message={message} messages={messages}/>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    width: 300
  },
  tittle:{
    fontSize: 30,
    fontWeight: '600',
  },
  storiesContainer:{
    flexDirection:'row',
    height:100, 
  },
  menuContainer:{
    justifyContent:'space-evenly',
    alignItems: 'center',
    flexDirection:'row',
    backgroundColor: '#d6d6d6',
    borderRadius: 20,
    paddingHorizontal:3,
    paddingVertical: 4,
  },
  menuSelected:{
    backgroundColor: 'white',
    borderRadius: 15,
    paddingHorizontal: 20,
  },
  menuText:{
    fontWeight: '600',
    fontSize:20,
  },
  chatsContainer:{
    height: 400,
  }
});